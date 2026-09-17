/**
 * PlexEra Form Mailer Utility
 * Handles form submissions across the portal and routes them directly to contact@plexera.pro
 */

export const RECIPIENT_EMAIL = 'contact@plexera.pro';
export const FORMSUBMIT_ENDPOINT = `https://formsubmit.co/ajax/${RECIPIENT_EMAIL}`;

export interface FormSubmissionOptions {
  formType: 'Candidate Application' | 'Employer Requisition' | 'General Advisory';
  sourceUrl?: string;
  customSubject?: string;
}

/**
 * Submit form data to contact@plexera.pro via FormSubmit AJAX endpoint
 */
export async function submitFormToPlexEra(
  formElement: HTMLFormElement,
  options: FormSubmissionOptions
): Promise<{ ok: boolean; message: string }> {
  const formData = new FormData(formElement);

  // Extract contact email for Reply-To
  const applicantEmail = 
    (formData.get('email') as string) || 
    (formData.get('workEmail') as string) || 
    '';

  const applicantName = 
    (formData.get('fullName') as string) || 
    (formData.get('companyName') as string) || 
    'Portal Visitor';

  // Configure FormSubmit parameters
  const subject = options.customSubject || 
    `[PlexEra] ${options.formType}: ${applicantName}`;

  formData.set('_subject', subject);
  if (applicantEmail) {
    formData.set('_replyto', applicantEmail);
  }
  formData.set('_template', 'table');
  formData.set('_captcha', 'false');
  formData.set('Form_Type', options.formType);
  formData.set('Source_URL', options.sourceUrl || window.location.href);
  formData.set('Submission_Timestamp', new Date().toLocaleString());

  try {
    const response = await fetch(FORMSUBMIT_ENDPOINT, {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => null);
      throw new Error(errorData?.message || `Server responded with status ${response.status}`);
    }

    const data = await response.json();
    return {
      ok: true,
      message: data.message || 'Consultation request submitted successfully!'
    };
  } catch (error: any) {
    console.error('Form submission error:', error);
    return {
      ok: false,
      message: error?.message || 'Network error occurred while submitting.'
    };
  }
}

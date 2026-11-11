# Shifagate product plan

## Users

### Patients
- Create an account and profile.
- Submit a treatment request and select a medical specialty.
- Share medical documents securely.
- Request hospital/doctor options and a treatment-cost estimate.
- Request help with medical-visa documentation, accommodation, airport pickup, and translation.
- Track case status, appointments, and next steps.

### Staff and administrators
- Review and manage patient cases.
- Assign cases to staff members.
- Track hospital enquiries, appointments, estimates, and travel-support tasks.
- Record internal notes and follow-up dates.
- Manage roles and permissions.

## Languages and platforms

- Arabic and English.
- Arabic interface must support right-to-left layout; English must support left-to-right layout.
- Patient app target: Android and iOS.
- Staff dashboard target: web.

## Initial release (MVP)

Build in this order:
1. App shell, language selection, and navigation.
2. Patient registration and profile.
3. Treatment request form.
4. Secure document upload.
5. Staff case list and case details.
6. Status updates and basic notifications.

## Data entities (draft)

- profiles
- patient_cases
- treatment_requests
- medical_documents
- hospitals
- doctors
- appointments
- estimates
- travel_services
- case_tasks
- audit_logs

## Security requirements

- Never store real patient data or secrets in Git.
- Use fictional data in development.
- Enforce server-side access policies and role-based permissions.
- Keep medical documents in private storage buckets.
- Use environment variables for keys; never commit secrets.
- Record important staff actions in an audit log.
- Obtain appropriate patient consent and review applicable legal requirements before launch.

## Out of scope for the first prototype

- Real payments
- Automatic visa issuance or guarantees
- Direct hospital-system integrations
- Automated medical diagnosis

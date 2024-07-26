import React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import '../design/global.css'; // Adjust this path as needed

const TermsOfService = () => {
    return (
        <Container sx={{ maxWidth: 'md', mt: 4 }}>
            <Typography variant="h2" gutterBottom>
                Terms and Conditions
            </Typography>
            <Typography variant="body1" paragraph>
                Last Updated: [Date]
            </Typography>
            <Typography variant="h6" gutterBottom>
                1. Introduction
            </Typography>
            <Typography variant="body1" paragraph>
                Welcome to The Local Guide ("we," "us," or "our"). These Terms and Conditions govern your use of our website located at [Your Website URL] (the "Site") and any services provided through the Site (collectively, the "Services"). By accessing or using the Site, you agree to be bound by these Terms and Conditions. If you do not agree with any part of these Terms and Conditions, you should not use the Site.
            </Typography>
            <Typography variant="h6" gutterBottom>
                2. Use of the Site
            </Typography>
            <Typography variant="body1" paragraph>
                <strong>Eligibility:</strong> You must be at least 18 years old to use this Site. By using the Site, you represent and warrant that you meet this requirement.
            </Typography>
            <Typography variant="body1" paragraph>
                <strong>User Account and Forms:</strong> To access certain services, you may need to fill out a form. You agree to provide accurate, complete, and current information when filling out the form.
            </Typography>
            <Typography variant="body1" paragraph>
                <strong>Prohibited Activities:</strong> You agree not to engage in any of the following prohibited activities:
                <ul>
                    <li>Using the Site for any illegal or unauthorized purpose.</li>
                    <li>Impersonating any person or entity or falsely stating or misrepresenting your affiliation with any person or entity.</li>
                    <li>Interfering with or disrupting the Site or servers or networks connected to the Site.</li>
                    <li>Attempting to gain unauthorized access to any portion of the Site or any other systems or networks connected to the Site.</li>
                </ul>
            </Typography>
            <Typography variant="h6" gutterBottom>
                3. Services and Payments
            </Typography>
            <Typography variant="body1" paragraph>
                <strong>Services Provided:</strong> The Local Guide offers services to users who purchase a package through the Site. The payment for these packages is processed through a third-party payment service. The Local Guide does not handle payments directly, and there is no payment security threat associated with our Site.
            </Typography>
            <Typography variant="body1" paragraph>
                <strong>Payment Processing:</strong> Payments for packages are handled by a third-party service provider. We do not store or process payment information on our Site. All payment transactions are conducted securely by the third-party provider.
            </Typography>
            <Typography variant="h6" gutterBottom>
                4. Data Collection and Privacy
            </Typography>
            <Typography variant="body1" paragraph>
                <strong>Data Collection:</strong> We collect personal information only when you fill out a form to access our services. This information may include your name, email address, and phone number.
            </Typography>
            <Typography variant="body1" paragraph>
                <strong>Data Storage:</strong> Your data is stored securely in Google Firebase. We do not sell or share your data with third parties. Only Google has access to the data stored on Firebase.
            </Typography>
            <Typography variant="body1" paragraph>
                <strong>Data Security:</strong> We implement reasonable security measures to protect your personal information. However, we cannot guarantee absolute security against unauthorized access.
            </Typography>
            <Typography variant="h6" gutterBottom>
                5. Intellectual Property
            </Typography>
            <Typography variant="body1" paragraph>
                All content and materials on the Site, including but not limited to text, graphics, logos, images, and software, are the property of The Local Guide or its licensors and are protected by copyright, trademark, and other intellectual property laws.
            </Typography>
            <Typography variant="h6" gutterBottom>
                6. Limitation of Liability
            </Typography>
            <Typography variant="body1" paragraph>
                To the maximum extent permitted by law, The Local Guide will not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or related to your use of the Site or the Services. In no event shall The Local Guide's total liability to you for all damages, losses, and causes of action exceed the amount paid by you, if any, for accessing the Site or using the Services.
            </Typography>
            <Typography variant="h6" gutterBottom>
                7. Changes to Terms
            </Typography>
            <Typography variant="body1" paragraph>
                We may update these Terms and Conditions from time to time. The revised Terms and Conditions will be effective when posted on the Site. Your continued use of the Site after the posting of revised Terms and Conditions constitutes your acceptance of the revised terms.
            </Typography>
            <Typography variant="h6" gutterBottom>
                8. Governing Law
            </Typography>
            <Typography variant="body1" paragraph>
                These Terms and Conditions are governed by and construed in accordance with the laws of [Your State/Country], without regard to its conflict of law principles. Any disputes arising out of or related to these Terms and Conditions or your use of the Site shall be resolved in the courts located in [Your State/Country].
            </Typography>
            <Typography variant="h6" gutterBottom>
                9. Contact Information
            </Typography>
            <Typography variant="body1" paragraph>
                If you have any questions about these Terms and Conditions, please contact us at:
            </Typography>
            <Typography variant="body1" paragraph>
                The Local Guide<br />
                [Your Address]<br />
                [Your Email Address]<br />
                [Your Phone Number]
            </Typography>
        </Container>
    );
};

export default TermsOfService;

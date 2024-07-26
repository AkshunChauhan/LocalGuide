import React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import '../design/global.css'; // Adjust this path as needed

const PrivacyPolicy = () => {
    return (
        <Container sx={{ maxWidth: 'md', mt: 4 }}>
            <Typography variant="h2" gutterBottom>
                Privacy Policy
            </Typography>
            <Typography variant="body1" paragraph>
                Last Updated: [Date]
            </Typography>
            <Typography variant="h6" gutterBottom>
                1. Introduction
            </Typography>
            <Typography variant="body1" paragraph>
                Welcome to The Local Guide ("we," "us," or "our"). We are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website located at [Your Website URL] (the "Site") and use our services (collectively, the "Services"). By using the Site, you consent to the practices described in this Privacy Policy.
            </Typography>
            <Typography variant="h6" gutterBottom>
                2. Information We Collect
            </Typography>
            <Typography variant="body1" paragraph>
                <strong>Personal Information:</strong> We collect personal information that you provide directly to us when you fill out a form on our Site. This information may include your name, email address, phone number, and other details relevant to your request for services.
            </Typography>
            <Typography variant="body1" paragraph>
                <strong>Usage Data:</strong> We may collect information about your use of the Site, including IP address, browser type, pages visited, and other usage data. This information helps us understand how users interact with the Site and improve our Services.
            </Typography>
            <Typography variant="h6" gutterBottom>
                3. How We Use Your Information
            </Typography>
            <Typography variant="body1" paragraph>
                <strong>To Provide Services:</strong> We use your personal information to process and respond to your requests for services, communicate with you, and provide you with information relevant to your inquiry.
            </Typography>
            <Typography variant="body1" paragraph>
                <strong>To Improve the Site:</strong> We use usage data to analyze and improve the functionality and performance of the Site.
            </Typography>
            <Typography variant="body1" paragraph>
                <strong>For Legal Compliance:</strong> We may use your information as required or permitted by law, including to comply with legal obligations, resolve disputes, and enforce our agreements.
            </Typography>
            <Typography variant="h6" gutterBottom>
                4. Data Storage and Security
            </Typography>
            <Typography variant="body1" paragraph>
                <strong>Data Storage:</strong> Your personal information is stored securely in Google Firebase. We do not sell or share your data with third parties. Only Google has access to the data stored on Firebase.
            </Typography>
            <Typography variant="body1" paragraph>
                <strong>Data Security:</strong> We implement reasonable security measures to protect your personal information. However, no system is completely secure, and we cannot guarantee the absolute security of your data.
            </Typography>
            <Typography variant="h6" gutterBottom>
                5. Third-Party Services
            </Typography>
            <Typography variant="body1" paragraph>
                <strong>Payment Processing:</strong> Payments for services are processed through a third-party payment service provider. We do not handle or store payment information directly. All payment transactions are conducted securely by the third-party provider.
            </Typography>
            <Typography variant="body1" paragraph>
                <strong>Other Third-Party Services:</strong> Our Site may contain links to other websites or services that are not operated by us. We are not responsible for the privacy practices or content of these third-party sites. We encourage you to review their privacy policies before providing any information.
            </Typography>
            <Typography variant="h6" gutterBottom>
                6. Cookies and Tracking Technologies
            </Typography>
            <Typography variant="body1" paragraph>
                <strong>Cookies:</strong> We use cookies and similar tracking technologies to enhance your experience on our Site. Cookies are small data files stored on your device that help us remember your preferences and improve the Site's functionality.
            </Typography>
            <Typography variant="body1" paragraph>
                <strong>Managing Cookies:</strong> You can control or disable cookies through your browser settings. However, please note that disabling cookies may affect the functionality of the Site.
            </Typography>
            <Typography variant="h6" gutterBottom>
                7. Children's Privacy
            </Typography>
            <Typography variant="body1" paragraph>
                Our Site is not intended for use by children under the age of 13. We do not knowingly collect personal information from children under 13. If we become aware that we have collected personal information from a child under 13, we will take steps to delete that information.
            </Typography>
            <Typography variant="h6" gutterBottom>
                8. Changes to This Privacy Policy
            </Typography>
            <Typography variant="body1" paragraph>
                We may update this Privacy Policy from time to time. The revised Privacy Policy will be effective when posted on the Site. Your continued use of the Site after the posting of revised Privacy Policy constitutes your acceptance of the updated terms.
            </Typography>
            <Typography variant="h6" gutterBottom>
                9. Contact Us
            </Typography>
            <Typography variant="body1" paragraph>
                If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at:
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

export default PrivacyPolicy;

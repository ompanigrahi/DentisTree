document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    
    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent form from submitting
        
        const service = document.getElementById('service').value;
        const date = document.getElementById('date').value;

        let serviceDescription;

        // Map service options to their descriptions
        switch (service) {
            case 'Dental Bonding':
                serviceDescription = 'Dental Bonding';
                break;
            case 'Dental Crowns':
                serviceDescription = 'Dental Crowns';
                break;
            case 'Root Canal Therapy':
                serviceDescription = 'Root Canal Therapy';
                break;
            case 'Teeth Whitening':
                serviceDescription = 'Teeth Whitening';
                break;
            case 'Tooth Extractions':
                serviceDescription = 'Tooth Extractions';
                break;
            default:
                serviceDescription = 'Unknown service';
        }

        // Display alert
        alert(`You have booked:\nService: ${serviceDescription}\nDate: ${date}`);
    });
});

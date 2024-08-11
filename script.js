document.addEventListener('DOMContentLoaded', function () {
    const countrySelect = document.getElementById('country');
    const stateSelect = document.getElementById('state');

    // Expanded list of states (partial example)
    const states = {
        'usa': [
            'California', 'Texas', 'New York', 'Florida', 'Illinois', 'Pennsylvania',
            'Ohio', 'Georgia', 'North Carolina', 'Michigan', 'New Jersey', 'Virginia',
            'Washington', 'Arizona', 'Massachusetts', 'Tennessee', 'Indiana', 'Missouri',
            'Maryland', 'Wisconsin', 'Colorado', 'Minnesota', 'South Carolina', 'Alabama',
            'Louisiana', 'Kentucky', 'Oregon', 'Oklahoma', 'Connecticut', 'Iowa', 'Mississippi',
            'Arkansas', 'Kansas', 'Nevada', 'Utah', 'Kansas', 'Nebraska', 'West Virginia',
            'Idaho', 'Hawaii', 'Maine', 'New Hampshire', 'Montana', 'Rhode Island', 'Delaware',
            'South Dakota', 'North Dakota', 'Alaska', 'Vermont', 'Wyoming', 'District of Columbia'
        ],
        'canada': [
            'Ontario', 'Quebec', 'British Columbia', 'Alberta', 'Manitoba', 'Saskatchewan',
            'Nova Scotia', 'New Brunswick', 'Newfoundland and Labrador', 'Prince Edward Island',
            'Northwest Territories', 'Yukon', 'Nunavut'
        ],
        'india': [
            'Maharashtra', 'Delhi', 'Karnataka', 'Gujarat', 'Uttar Pradesh', 'West Bengal',
            'Rajasthan', 'Tamil Nadu', 'Bihar', 'Kerala', 'Andhra Pradesh', 'Odisha',
            'Punjab', 'Haryana', 'Jharkhand', 'Chhattisgarh', 'Himachal Pradesh', 'Uttarakhand',
            'Tripura', 'Meghalaya', 'Nagaland', 'Arunachal Pradesh', 'Manipur', 'Mizoram',
            'Sikkim', 'Goa', 'Andaman and Nicobar Islands', 'Dadra and Nagar Haveli and Daman and Diu',
            'Lakshadweep'
        ]
    };

    if (countrySelect) {
        countrySelect.addEventListener('change', function () {
            const country = this.value;
            const statesList = states[country] || [];

            stateSelect.innerHTML = '<option value="" disabled selected>Select State</option>';

            statesList.forEach(function (state) {
                const option = document.createElement('option');
                option.value = state.toLowerCase().replace(/\s+/g, '-'); // Convert spaces to hyphens for URL-friendly value
                option.textContent = state;
                stateSelect.appendChild(option);
            });
        });
    }

    const registrationForm = document.getElementById('registrationForm');
    if (registrationForm) {
        registrationForm.addEventListener('submit', function (e) {
            e.preventDefault();

            if (registrationForm.checkValidity()) {
                alert('Registration successful!');
                // Handle form submission here
            } else {
                alert('Please fill out all required fields.');
            }
        });
    }
});


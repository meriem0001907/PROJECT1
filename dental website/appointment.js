document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");
    
    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent form submission for validation
        
        const date = document.getElementById("date").value;
        const services = document.getElementById("services").value;
        const maladie = document.getElementById("maladie").value.trim();
        const telephone = document.getElementById("telephone").value.trim();
        const premiereVisite = document.getElementById("premiere_visite").checked;

        // Basic validation
        if (!date || !services || !maladie || !telephone) {
            alert("Veuillez remplir tous les champs obligatoires !");
            return;
        }

        // Validate phone number format (basic example)
        const phoneRegex = /^[0-9]{10}$/; // Example for a 10-digit number
        if (!phoneRegex.test(telephone)) {
            alert("Veuillez entrer un numéro de téléphone valide !");
            return;
        }

        // Confirmation message
        let confirmationMessage = `Rendez-vous confirmé !\n\nDate: ${date}\nService: ${services}\nMaladies: ${maladie}\nTéléphone: ${telephone}`;
        if (premiereVisite) {
            confirmationMessage += "\nC'est votre première visite chez nous.";
        }
        
        alert(confirmationMessage);
        form.submit(); // Submit the form after validation
    });
});

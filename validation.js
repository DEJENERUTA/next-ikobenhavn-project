 /***** form validation *****/
const message = document.querySelector("#message");
document.querySelector("#form1").addEventListener("submit", validate);

function validate(evt) {
    if (this.email.value === "") {
        console.log(email);
        this.email.focus();
        message.textContent = "Skriv dit email!";
        evt.preventDefault();
        return false;
    }
    if (this.email2.value === "") {
        console.log(email2);
        this.email2.focus();
        message.textContent = "Bekraft din email!";
        evt.preventDefault();
        return false;
    }
    if (this.password.value === "") {
        console.log(password);
        this.password.focus();
        message.textContent = "Valg adgangsskode!";
        evt.preventDefault();
        return false;
    }
    if (this.password2.value === "") {
        console.log(password2);
        this.password2.focus();
        message.textContent = "Bekraft koden!";
        evt.preventDefault();
        return false;
    }
    if (this.name.value === "") {
        console.log(name);
        this.name.focus();
        message.textContent = "Fornavn!";
        evt.preventDefault();
        return false;
    }
    if (this.name2.value === "") {
        console.log(name2);
        this.name2.focus();
        message.textContent = "Efternavn!";
        evt.preventDefault();
        return false;
    }
    if (this.telephone.value === "") {
        console.log(telephone);
        this.telephone.focus();
        message.textContent = "telephone!";
        evt.preventDefault();
        return false;
    }
    if (this.adress.value === "") {
        console.log(adress);
        this.adress.focus();
        message.textContent = "Adresse!";
        evt.preventDefault();
        return false;
        }
}




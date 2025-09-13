
function calculateAge() {
    const input = document.getElementById("birthdate").value;
    const result = document.getElementById("result");

    if(!input){
        result.textContent = "Please enter a valid date!";
        return;
    }

    const birthDate = luxon.DateTime.fromISO(input);
    const today = luxon.DateTime.now();

    if(!birthDate.isValid || birthDate > today){
        result.textContent = "Please enter a valid date!";
        return;
    }

    const diff = today.diff(birthDate,["years","months","days"]).toObject();
    const years = Math.floor(diff.years);
    const months = Math.floor(diff.months);
    const days = Math.floor(diff.days);

    result.textContent = `You are ${years} years, ${months} months and ${days} days old`
}

document.getElementById("calcBtn").addEventListener("click", calculateAge)

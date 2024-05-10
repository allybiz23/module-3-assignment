function validateInputForm(form) {
    // Validate ReqDate (request date)
    const reqDateRegex = /^\d{2}\/\d{2}\/\d{4}$/; // mm/dd/yyyy format
    if (!reqDateRegex.test(form.ReqDate)) {
        alert("Invalid request date format. Please use mm/dd/yyyy format.");
        return false;
    }

    // Validate EmpID (employee ID)
    const empIDRegex = /^[A-Z]\d{5}$/; // 1 capital letter followed by 5 numbers
    if (!empIDRegex.test(form.EmpID)) {
        alert("Invalid employee ID format. It must be 6 alphanumeric characters, starting with a capital letter, followed by 5 numbers.");
        return false;
    }

    // Validate FName (user first name)
    const fNameRegex = /^[A-Z][a-zA-Z]*$/; // Starts with capital letter
    if (!fNameRegex.test(form.FName)) {
        alert("Invalid first name format. It must start with a capital letter.");
        return false;
    }

    // Validate LName (user last name)
    const lNameRegex = /^[A-Z][a-zA-Z]*$/; // Starts with capital letter
    if (!lNameRegex.test(form.LName)) {
        alert("Invalid last name format. It must start with a capital letter.");
        return false;
    }

    // Validate ProbDesc (problem description)
    if (form.ProbDesc.trim() === "") {
        alert("Problem description is required.");
        return false;
    }

    // All validations passed, return true
    return true;
}

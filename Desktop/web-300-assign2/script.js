class SupportRequest {
    constructor(formData) {
        this.formData = formData;
        this.ticketSummary = "";
    }

    submitRequest() {
        // Code to process and submit the form data
        // server communication to generate a support ticket
        // Set the ticket summary
        // Example: this.ticketSummary = generatedSummary;
    }
}
class SupportTicket {
    constructor(ticketNumber, userName, ticketDetails) {
        this.ticketNumber = ticketNumber;
        this.userName = userName;
        this.ticketDetails = ticketDetails;
    }

    // Getters for class variables (optional, depending on usage)

    searchByName(userName) {
        // Code to search for tickets by user name
        // server communication to retrieve matching tickets
        // Example: return matchingTickets;
    }

    searchByNumber(ticketNumber) {
        // Code to search for tickets by ticket number
        // server communication to retrieve matching tickets
        // Example: return matchingTickets;
    }
}
// Example usage in the main program
const newRequest = new SupportRequest(formData);
newRequest.submitRequest();

const ticket = new SupportTicket(ticketNumber, userName, ticketDetails);
const matchingTicketsByName = ticket.searchByName(userName);
const matchingTicketsByNumber = ticket.searchByNumber(ticketNumber);

public class InvoicePrinter {
	
	private Invoice invoice;


	public InvoicePrinter(Invoice invoice) {

		this.invoice = invoice;
	}

	
	public void printInvoice() {

               System.out.println(quantity + "x " + book.name + " " + book.price + "$");
               System.out.println(quantity + "Discount Rate: " + discountRate);
               System.out.println("Tax Rate: " + taxRate);
               System.out.println("Total: " + total);

        }


}

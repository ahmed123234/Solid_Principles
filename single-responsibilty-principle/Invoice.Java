public class Invoice {
	private Book book;
	private Integer quantity;
	private Double discountRate;
	private Double taxRate;
	private Double total;


	public Invoice(Book book, Integer quantity, Double discountRate,
			Double taxRate, Double total) {
		this.book = book;
		this.quantity = quantity;
		this.discountRate = discountRate;
		this.taxRate = taxRate;
		this.total = total;

		this.calculateTotal();
	}

	public Double calculateTotal() {
		Double price =  ((book.price - book.price * discountRate) * this.quantity);

		Double priceWithTaxes = price * ( 1 + this.taxRate);

		return priceWithTaxes;
	}


	/* By create a class structure for each purpose we are now obey the SRP,  and 
	 * every class are now respnsible of one aspect of our application.

	public void printInvoice() {

		System.out.println(quantity + "x " + book.name + " " + book.price + "$");
		System.out.println(quantity + "Discount Rate: " + discountRate);
		System.out.println("Tax Rate: " + taxRate);
		System.out.println("Total: " + total);

	}


	public void SaveToFile(String filename) {
	
		//Create a file with the given name and writes the invoice
	}

	*/

	/*
	 *	The above class architecture violate the SRP, as the follwing:
	 *
	 *	-- The mixin of printing logic with bussniss logic in the same class violates 
	 *		SRP.
	 *
	 *	-- The mixin of persistence logic with bussniss logic in the same class violates			SRP. (save to db, save to file , make an API call, or so on) .
	 *
	 *	Solution: In order to prevent the needs to change the class due to any of the 
	 *	          above violations, we can create new classes for our pronting and 
	 *	          persistence purposes, so we will no longer need to modify the invoice 			  class for them.  	
	 *
	 *
	 * */
}

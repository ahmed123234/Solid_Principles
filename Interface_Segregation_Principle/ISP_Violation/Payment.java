package ISP_Violation;

import java.util.List;

public interface Payment {
    void initiatePayments();

    Object status();

    List<Object> getPayments();


    // adding additional methods

    void initiateLoanSettlement();
    void initiateRePayment();
}
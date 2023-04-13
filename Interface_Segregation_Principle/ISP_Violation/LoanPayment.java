package ISP_Violation;

import java.util.List;

public class LoanPayment implements Payment {

    // here initiatePayments is unwanted method(doesn't has any logic), this violate ISP
    @Override
    public void initiatePayments() {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'initiatePayments'");
    }



    @Override
    public Object status() {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'status'");
    }

    @Override
    public List<Object> getPayments() {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'getPayments'");
    }

    @Override
    public void initiateLoanSettlement() {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'initiateLoanSettlement'");
    }

    @Override
    public void initiateRePayment() {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'initiateRePayment'");
    }
    
}

package ISP_Violation;

import java.util.List;

public class BankPayment implements Payment {

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

    // implement the unwanted methods (this action violates ISP), these methods don't have any logic   

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

import React, { useContext } from 'react';
import { Container } from './styles';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import totalImg from '../../assets/total.svg';
import { TransactionsContext} from '../../TransactionsContext';


export function Summary(){
  
  const {transactions} = useContext(TransactionsContext);

  console.log(transactions);
  
  return(

    <Container>

{/* <TransactionContext.consumer>
  {(data) => {
    console.log(data);
    return <p>ok</p>
  }
</TransactionContext.consumer> */}

      <div>
        <header>
          <p>Cash Flow</p>
          <img src={incomeImg} alt="Cash Flow Arrow" />
        </header>
        <strong>U$1000</strong>
      </div>
      <div>
        <header>
          <p>Withdraws</p>
          <img src={ outcomeImg} alt="Withdraws Flow Arrow" />
        </header>
        <strong> - U$500</strong>
      </div>
      <div className="highlight-background">
        <header>
          <p>Total</p>
          <img src={totalImg} alt="Total Arrow" />
        </header>
        <strong>U$500</strong>
      </div>
    </Container>
  );
}

function TransactionContext(TransactionContext: any) {
  throw new Error('Function not implemented.');
}

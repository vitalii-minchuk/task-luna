import { Button } from '@mui/material';
import { useAppDispatch } from '../../../hooks';
import { connectShop } from '../../../store/slice/authSlice';

function ShopConnection() {
  const dispatch = useAppDispatch();

  const handleShopConnection = () => {
    dispatch(connectShop());
  };
  return (
    <div>
      <Button onClick={handleShopConnection}>ok</Button>
    </div>
  );
}

export default ShopConnection;

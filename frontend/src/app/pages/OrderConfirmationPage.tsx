import { useParams, Link } from 'react-router';
import { ordersAPI } from '../data/mockData';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { CheckCircle } from 'lucide-react';

export function OrderConfirmationPage() {
  const { orderId } = useParams();
  const order = ordersAPI.getById(orderId!);

  if (!order) {
    return (
      <div className="container py-16 text-center">
        <h1 className="text-2xl font-bold mb-4">Order not found</h1>
        <Link to="/">
          <Button>Back to Home</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="container py-16">
      <Card className="max-w-2xl mx-auto">
        <CardContent className="pt-8 text-center space-y-6">
          <div className="flex justify-center">
            <div className="p-4 bg-green-100 rounded-full">
              <CheckCircle className="h-16 w-16 text-green-600" />
            </div>
          </div>

          <div>
            <h1 className="text-3xl font-bold mb-2">Order Confirmed!</h1>
            <p className="text-muted-foreground">
              Thank you for your purchase. Your order has been received.
            </p>
          </div>

          <div className="bg-muted p-6 rounded-lg space-y-2">
            <p className="text-sm text-muted-foreground">Order Number</p>
            <p className="text-2xl font-bold">{order.id}</p>
          </div>

          <div className="text-left space-y-4 pt-4">
            <h2 className="font-semibold text-lg">Order Details</h2>
            
            <div className="space-y-2">
              {order.items.map((item) => (
                <div key={item.product.id} className="flex justify-between text-sm">
                  <span>
                    {item.product.name} × {item.quantity}
                  </span>
                  <span className="font-medium">
                    ${(item.product.price * item.quantity).toFixed(2)}
                  </span>
                </div>
              ))}
            </div>

            <div className="border-t pt-4">
              <div className="flex justify-between font-bold">
                <span>Total</span>
                <span>${order.total.toFixed(2)}</span>
              </div>
            </div>

            <div className="border-t pt-4 space-y-2 text-sm">
              <div>
                <p className="text-muted-foreground">Shipping to:</p>
                <p className="font-medium">{order.customerName}</p>
                <p className="text-muted-foreground">{order.shippingAddress}</p>
              </div>
              <div>
                <p className="text-muted-foreground">Email:</p>
                <p className="font-medium">{order.customerEmail}</p>
              </div>
            </div>
          </div>

          <div className="flex gap-4 pt-4">
            <Link to="/products" className="flex-1">
              <Button variant="outline" className="w-full">
                Continue Shopping
              </Button>
            </Link>
            <Link to="/" className="flex-1">
              <Button className="w-full">Back to Home</Button>
            </Link>
          </div>

          <p className="text-sm text-muted-foreground">
            A confirmation email has been sent to {order.customerEmail}
          </p>
        </CardContent>
      </Card>
    </div>
  );
}

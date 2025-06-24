import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Package, Truck, Calendar } from 'lucide-react';

const OrderSuccess: React.FC = () => {
  const orderNumber = `ORD-${Date.now().toString().slice(-6)}`;
  const estimatedDelivery = new Date();
  estimatedDelivery.setDate(estimatedDelivery.getDate() + 5);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl w-full">
        <div className="bg-white rounded-lg shadow-lg p-8 text-center">
          <div className="mb-6">
            <div className="mx-auto w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-4">
              <CheckCircle className="h-12 w-12 text-green-600" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Order Confirmed!</h1>
            <p className="text-xl text-gray-600">Thank you for your purchase</p>
          </div>

          <div className="bg-green-50 rounded-lg p-6 mb-8">
            <h2 className="text-lg font-semibold text-green-800 mb-2">Order Number</h2>
            <p className="text-2xl font-bold text-green-900">{orderNumber}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="text-center">
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <Package className="h-6 w-6 text-blue-600" />
              </div>
              <h3  className="font-semibold text-gray-900">Order Processing</h3>
              <p className="text-sm text-gray-600">We're preparing your items</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <Truck className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-900">Shipping</h3>
              <p className="text-sm text-gray-600">Free shipping included</p>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <Calendar className="h-6 w-6 text-orange-600" />
              </div>
              <h3 className="font-semibold text-gray-900">Delivery</h3>
              <p className="text-sm text-gray-600">
                Est. {estimatedDelivery.toLocaleDateString()}
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <p className="text-gray-600">
              A confirmation email has been sent to your email address with order details and tracking information.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/orders"
                className="bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
              >
                Track Your Order
              </Link>
              <Link
                to="/products"
                className="border border-purple-600 text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-colors"
              >
                Continue Shopping
              </Link>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">What's Next?</h3>
            <div className="text-left space-y-2 text-sm text-gray-600">
              <p>• You'll receive an email confirmation shortly</p>
              <p>• We'll notify you when your order ships</p>
              <p>• Track your package using the order number above</p>
              <p>• Contact support if you have any questions</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSuccess;
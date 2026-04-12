import { Card, CardContent } from '../components/ui/card';
import { Target, Users, Award, TrendingUp } from 'lucide-react';

export function AboutPage() {
  return (
    <div className="container py-16">
      <div className="max-w-4xl mx-auto space-y-16">
        {/* Hero Section */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold">About TechStore</h1>
          <p className="text-xl text-muted-foreground">
            Your trusted partner in technology since 2020
          </p>
        </div>

        {/* Story Section */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold">Our Story</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-muted-foreground leading-relaxed">
              Founded in 2025, TechStore has grown from a small startup to one of the leading
              online retailers of technology and electronics. Our mission is simple: to provide
              our customers with the latest technology at competitive prices, backed by
              exceptional customer service.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4">
              We carefully curate our product selection to ensure we only offer the best quality
              items from trusted brands. Our team of tech enthusiasts is passionate about helping
              you find the perfect products for your needs.
            </p>
          </div>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardContent className="pt-6 space-y-2">
              <div className="p-3 bg-primary/10 rounded-full w-fit">
                <Target className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Our Mission</h3>
              <p className="text-muted-foreground">
                To make cutting-edge technology accessible to everyone while providing
                exceptional customer experiences.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6 space-y-2">
              <div className="p-3 bg-primary/10 rounded-full w-fit">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Customer First</h3>
              <p className="text-muted-foreground">
                We put our customers at the heart of everything we do, ensuring satisfaction
                with every purchase.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6 space-y-2">
              <div className="p-3 bg-primary/10 rounded-full w-fit">
                <Award className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Quality Guarantee</h3>
              <p className="text-muted-foreground">
                Every product is carefully selected and tested to meet our high standards
                of quality and reliability.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6 space-y-2">
              <div className="p-3 bg-primary/10 rounded-full w-fit">
                <TrendingUp className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Innovation</h3>
              <p className="text-muted-foreground">
                We stay ahead of the curve, constantly updating our inventory with the
                latest innovations in technology.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">50K+</div>
            <div className="text-sm text-muted-foreground">Happy Customers</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">500+</div>
            <div className="text-sm text-muted-foreground">Products</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">99%</div>
            <div className="text-sm text-muted-foreground">Satisfaction Rate</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">24/7</div>
            <div className="text-sm text-muted-foreground">Support</div>
          </div>
        </div>

        {/* Team Section */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold">Why Choose Us?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-2">Expert Curation</h3>
                <p className="text-sm text-muted-foreground">
                  Our team of tech experts carefully selects every product we sell.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-2">Competitive Pricing</h3>
                <p className="text-sm text-muted-foreground">
                  We offer the best prices without compromising on quality.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-2">Fast Shipping</h3>
                <p className="text-sm text-muted-foreground">
                  Free shipping on orders over $50 with quick delivery times.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}


import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';

const NotFoundPage = () => {
  return (
    <>
      <Helmet>
        <title>Page Not Found | Welldonebeautysaloon</title>
      </Helmet>
      
      <Header />
      
      <main className="min-h-screen flex items-center justify-center bg-background pt-20">
        <div className="text-center px-4">
          <h1 className="text-8xl font-bold text-primary mb-6">404</h1>
          <h2 className="text-3xl mb-4">Oops! Page Not Found</h2>
          <p className="text-muted-foreground max-w-md mx-auto mb-8 text-lg">
            It looks like the page you're looking for doesn't exist or has been moved.
          </p>
          <Button asChild size="lg" className="rounded-full px-8">
            <Link to="/">Return to Home</Link>
          </Button>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default NotFoundPage;

import React, { useState } from 'react';
import Button from '../components/ui/Button';
import { Mail, MapPin, Phone, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    setTimeout(() => setStatus('success'), 1500);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
        <div>
          <h1 className="text-4xl font-bold mb-6">Start a Conversation</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-10">
            Have a complex technical challenge? We're ready to engineer a solution. Reach out for consultations or project inquiries.
          </p>

          <div className="space-y-8">
            <div className="flex items-start">
              <div className="w-12 h-12 bg-steelBlue/10 rounded-lg flex items-center justify-center text-steelBlue mr-4">
                <Mail size={24} />
              </div>
              <div>
                <h4 className="font-bold">Email</h4>
                <p className="text-gray-600 dark:text-gray-400">contact@gummertech.com</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-12 h-12 bg-steelBlue/10 rounded-lg flex items-center justify-center text-steelBlue mr-4">
                <MapPin size={24} />
              </div>
              <div>
                <h4 className="font-bold">Office</h4>
                <p className="text-gray-600 dark:text-gray-400">Tech District, Suite 400<br />San Francisco, CA</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-techBlue p-8 md:p-12 rounded-2xl shadow-xl border border-gray-100 dark:border-techBlue-light/20">
          {status === 'success' ? (
            <div className="text-center py-20">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Send size={32} />
              </div>
              <h2 className="text-2xl font-bold mb-2">Message Sent!</h2>
              <p className="text-gray-600 dark:text-gray-400">We'll get back to you within 24 business hours.</p>
              <Button onClick={() => setStatus('idle')} className="mt-8">Send Another</Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Full Name</label>
                  <input required type="text" className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-techBlue-light/20 bg-gray-50 dark:bg-techBlue-dark focus:ring-2 focus:ring-steelBlue outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email Address</label>
                  <input required type="email" className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-techBlue-light/20 bg-gray-50 dark:bg-techBlue-dark focus:ring-2 focus:ring-steelBlue outline-none" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Project Type</label>
                <select className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-techBlue-light/20 bg-gray-50 dark:bg-techBlue-dark focus:ring-2 focus:ring-steelBlue outline-none">
                  <option>Software Engineering</option>
                  <option>Cloud/DevOps</option>
                  <option>Networking</option>
                  <option>Consulting</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea required rows={4} className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-techBlue-light/20 bg-gray-50 dark:bg-techBlue-dark focus:ring-2 focus:ring-steelBlue outline-none"></textarea>
              </div>
              <Button type="submit" className="w-full" disabled={status === 'sending'}>
                {status === 'sending' ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
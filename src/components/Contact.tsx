import React, { useState, useRef } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [lastSubmitTime, setLastSubmitTime] = useState<number>(0);
  const submitCount = useRef<number>(0);

  // 24 saatte maksimum gönderim sayısı
  const MAX_SUBMISSIONS_PER_DAY = 5;
  // İki gönderim arasında olması gereken minimum süre (ms cinsinden - 1 dakika)
  const MIN_SUBMISSION_INTERVAL = 60 * 1000; 
  

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setError(null); // Input değiştiğinde hata mesajını temizle
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Spam kontrolü - çok sık gönderim kontrolü
    const now = Date.now();
    if (now - lastSubmitTime < MIN_SUBMISSION_INTERVAL) {
      setError("Please wait a minute before sending another message.");
      return;
    }

    // Spam kontrolü - günlük limit kontrolü
    if (submitCount.current >= MAX_SUBMISSIONS_PER_DAY) {
      setError("You've reached the maximum number of submissions for today. Please try again later.");
      return;
    }

    setIsSubmitting(true);
    setError(null); // Önceki hataları temizle

    try {
        const result = await emailjs.send(
          'service_544tnfe',
          'template_53nt04r',
          {
            from_name: formData.name,
            from_email: formData.email,
            subject: formData.subject,
            message: formData.message,
          },
          'gtkF6ew5226sY4O-I'
        );
        
        console.log('Email sent successfully!', result);
        setError('Your message has been sent successfully! 🎉');
        setFormData({ name: '', email: '', subject: '', message: '' });

      // Başarılı gönderimden sonra sayaçları güncelle
      submitCount.current += 1;
      setLastSubmitTime(Date.now());

      // LocalStorage'a son gönderim zamanını ve sayısını kaydet
      localStorage.setItem('lastSubmitTime', Date.now().toString());
      localStorage.setItem('submitCount', submitCount.current.toString());

      } catch (error) {
        console.error('Email gönderilirken hata oluştu:', error);
        setError('Failed to send message. Please try again later.');
      } finally {
        setIsSubmitting(false);
      }
    }

  // Component mount olduğunda localStorage'dan verileri al
  React.useEffect(() => {
    const storedLastSubmitTime = localStorage.getItem('lastSubmitTime');
    const storedSubmitCount = localStorage.getItem('submitCount');

    if (storedLastSubmitTime) {
      const lastTime = parseInt(storedLastSubmitTime);
      setLastSubmitTime(lastTime);

      // Eğer son gönderimden bu yana 24 saat geçtiyse sayacı sıfırla
      if (Date.now() - lastTime > 24 * 60 * 60 * 1000) {
        submitCount.current = 0;
        localStorage.setItem('submitCount', '0');
      } else if (storedSubmitCount) {
        submitCount.current = parseInt(storedSubmitCount);
      }
    }
  }, []);

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            I'm always open to discussing new opportunities, interesting projects, 
            or just having a conversation about technology. Feel free to reach out!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Let's Connect
            </h3>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mr-4">
                  <Mail className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <p className="text-gray-900 dark:text-white font-medium">Email</p>
                  <p className="text-gray-600 dark:text-gray-300">anilcemelemir@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mr-4">
                  <Phone className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <p className="text-gray-900 dark:text-white font-medium">Phone</p>
                  <p className="text-gray-600 dark:text-gray-300">+90 (533) 966-7176</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mr-4">
                  <MapPin className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <p className="text-gray-900 dark:text-white font-medium">Location</p>
                  <p className="text-gray-600 dark:text-gray-300">Adana, Turkey</p>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Follow Me
              </h4>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/anilcemelemir"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                >
                  <Github className="h-6 w-6" />
                </a>
                <a
                  href="https://www.linkedin.com/in/an%C4%B1l-cem-elemir-b34a17378/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                >
                  <Linkedin className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Send Me a Message
            </h3>

            {error && (
              <div className={`mb-4 p-3 rounded border ${error.includes("successfully")
                  ? "bg-green-100 dark:bg-green-900/30 border-green-400 dark:border-green-800 text-green-700 dark:text-green-300"
                  : "bg-red-100 dark:bg-red-900/30 border-red-400 dark:border-red-800 text-red-700 dark:text-red-300"
                }`}>
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                    placeholder="Your Name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                  placeholder="What's this about?"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                  placeholder="Tell me about your project or just say hello!"
                />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting || submitCount.current >= MAX_SUBMISSIONS_PER_DAY}
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors font-medium flex items-center justify-center disabled:bg-gray-400 disabled:cursor-not-allowed"
              >
                <Send className="h-5 w-5 mr-2" />
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>

              {/* submitCount.current > 0 olup olmadığına bakmadan her zaman göster */}
              <p className="text-xs text-gray-500 dark:text-gray-400 text-center">
                Remaining submissions today: {MAX_SUBMISSIONS_PER_DAY - submitCount.current}
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
import React, { useState } from 'react';
import { Calendar } from 'lucide-react';

const ReikiCalendar = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [message, setMessage] = useState('');

  // Generate calendar days for the current month
  const generateCalendar = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth();
    
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const firstDayOfMonth = new Date(year, month, 1).getDay();
    
    const days = [];
    // Add empty cells for days before the first day of the month
    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(<div key={`empty-${i}`} className="h-12"></div>);
    }
    
    // Add the days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const dateString = `${year}-${month + 1}-${day}`;
      days.push(
        <div 
          key={day} 
          className={`h-12 flex items-center justify-center rounded-full mx-1 cursor-pointer
                     hover:bg-purple-100 transition-colors
                     ${selectedDate === dateString ? 'bg-purple-200 font-bold' : 'bg-white'}`}
          onClick={() => handleDateSelect(dateString)}
        >
          {day}
        </div>
      );
    }
    
    return days;
  };

  const handleDateSelect = (date) => {
    setSelectedDate(date);
    setShowForm(true);
    setMessage('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !phone) {
      setMessage('Please fill in all fields.');
      return;
    }
    
    // Format the email subject and body
    const subject = `Reiki Appointment Request for ${selectedDate}`;
    const body = `Selected Date: ${selectedDate}
Email: ${email}
Phone: ${phone}`;
    
    // Create mailto link
    const mailtoLink = `mailto:Lunakenya88@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // Open default email client
    window.location.href = mailtoLink;
    
    setMessage('Thank you! Your email client should open with your appointment details.');
  };

  const getMonthName = () => {
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 
                    'July', 'August', 'September', 'October', 'November', 'December'];
    return months[new Date().getMonth()];
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded-lg shadow-lg">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-purple-800 flex items-center justify-center">
          <Calendar className="mr-2" />
          Reiki Healing Calendar
        </h2>
        <p className="text-purple-600 italic mt-2">Find your moment of peace and healing</p>
      </div>
      
      <div className="mb-4 text-center">
        <h3 className="text-xl font-semibold text-purple-700">{getMonthName()}</h3>
      </div>
      
      {/* Calendar grid */}
      <div className="grid grid-cols-7 gap-1 mb-6">
        {/* Day headers */}
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
          <div key={day} className="text-center font-medium text-purple-700 mb-2">{day}</div>
        ))}
        
        {/* Calendar days */}
        {generateCalendar()}
      </div>
      
      {showForm && (
        <div className="mt-6 p-4 bg-purple-50 rounded-lg">
          <h3 className="text-lg font-semibold text-purple-800 mb-4">Book Your Reiki Session</h3>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-purple-700 mb-1">Email</label>
              <input
                type="email"
                id="email"
                className="w-full px-3 py-2 border border-purple-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            
            <div className="mb-4">
              <label htmlFor="phone" className="block text-sm font-medium text-purple-700 mb-1">Phone Number</label>
              <input
                type="tel"
                id="phone"
                className="w-full px-3 py-2 border border-purple-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </div>
            
            <div className="text-sm text-purple-600 mb-4">
              Selected date: <span className="font-semibold">{selectedDate}</span>
            </div>
            
            <button
              type="submit"
              className="w-full bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
            >
              Submit Appointment Request
            </button>
          </form>
          
          {message && (
            <div className="mt-4 p-3 bg-purple-100 text-purple-800 rounded-md">
              {message}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ReikiCalendar;
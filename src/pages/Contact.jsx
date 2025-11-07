import { useState } from 'react'
import { FaComments, FaEnvelope, FaGlobe, FaMapMarkerAlt, FaLightbulb, FaHandshake, FaLink, FaBriefcase, FaTwitter, FaHeart } from 'react-icons/fa'
import NavBar from '../shared/NavBar.jsx'
import Footer from '../shared/Footer.jsx'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      const response = await fetch('https://formsubmit.co/ajax/manojkumarmmmut@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          _captcha: false
        })
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({ name: '', email: '', subject: '', message: '' })
        setTimeout(() => setSubmitStatus(null), 5000)
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="min-h-dvh flex flex-col bg-gradient-to-b from-sky-50 to-white dark:from-slate-900 dark:to-slate-950">
      <NavBar />
      <div className="flex-1 mx-auto max-w-5xl px-6 pt-24 pb-10 w-full space-y-6">
        {/* How You Can Reach Us Section */}
        <div className="rounded-2xl bg-white ring-1 ring-slate-200 p-8 dark:bg-slate-900 dark:ring-slate-800">
          <h2 className="text-2xl font-semibold text-slate-800 dark:text-slate-100 flex items-center gap-2 mb-6">
            <FaComments className="text-sky-600 dark:text-sky-400" />
            <span>How You Can Reach Us</span>
          </h2>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <FaEnvelope className="text-sky-600 dark:text-sky-400 text-xl mt-1" />
              <div>
                <p className="text-slate-800 dark:text-slate-100 font-medium">Email</p>
                <a href="mailto:manojkumarmmmut@gmail.com" className="text-sky-600 dark:text-sky-400 hover:underline">
                  manojkumarmmmut@gmail.com
                </a>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <FaGlobe className="text-sky-600 dark:text-sky-400 text-xl mt-1" />
              <div>
                <p className="text-slate-800 dark:text-slate-100 font-medium">Website</p>
                <a href="https://www.testube.app" target="_blank" rel="noopener noreferrer" className="text-sky-600 dark:text-sky-400 hover:underline">
                  www.testube.app
                </a>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <FaMapMarkerAlt className="text-sky-600 dark:text-sky-400 text-xl mt-1" />
              <div>
                <p className="text-slate-800 dark:text-slate-100 font-medium">Address</p>
                <p className="text-slate-600 dark:text-slate-300">Gorakhpur, Uttar Pradesh, India</p>
              </div>
            </div>
          </div>
        </div>

        {/* Feedback & Suggestions Section */}
        <div className="rounded-2xl bg-white ring-1 ring-slate-200 p-8 dark:bg-slate-900 dark:ring-slate-800">
          <h2 className="text-2xl font-semibold text-slate-800 dark:text-slate-100 flex items-center gap-2 mb-4">
            <FaLightbulb className="text-sky-600 dark:text-sky-400" />
            <span>Feedback & Suggestions</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
            We're constantly working to improve your learning experience. If you have any ideas for new test types or features, let us know! Your input helps us make Testube smarter and more engaging.
          </p>
          <p className="text-slate-600 dark:text-slate-300 mb-6">
            You can also fill out the form below ...
          </p>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full rounded-lg px-4 py-2 ring-1 ring-slate-200 focus:ring-2 focus:ring-sky-500 outline-none dark:bg-slate-800 dark:text-slate-100 dark:ring-slate-700"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full rounded-lg px-4 py-2 ring-1 ring-slate-200 focus:ring-2 focus:ring-sky-500 outline-none dark:bg-slate-800 dark:text-slate-100 dark:ring-slate-700"
                placeholder="your.email@example.com"
              />
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full rounded-lg px-4 py-2 ring-1 ring-slate-200 focus:ring-2 focus:ring-sky-500 outline-none dark:bg-slate-800 dark:text-slate-100 dark:ring-slate-700"
                placeholder="What's this about?"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full rounded-lg px-4 py-2 ring-1 ring-slate-200 focus:ring-2 focus:ring-sky-500 outline-none dark:bg-slate-800 dark:text-slate-100 dark:ring-slate-700 resize-none"
                placeholder="Your message here..."
              />
            </div>
            {submitStatus === 'success' && (
              <div className="p-4 rounded-lg bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800">
                <p className="text-emerald-700 dark:text-emerald-300 text-sm">
                  ✓ Thank you for your message! We will get back to you soon.
                </p>
              </div>
            )}
            {submitStatus === 'error' && (
              <div className="p-4 rounded-lg bg-rose-50 dark:bg-rose-900/20 border border-rose-200 dark:border-rose-800">
                <p className="text-rose-700 dark:text-rose-300 text-sm">
                  ✗ Something went wrong. Please try again or email us directly.
                </p>
              </div>
            )}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 bg-sky-600 text-white hover:bg-sky-700 transition font-medium disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Sending...' : 'Submit'}
            </button>
          </form>
        </div>

        {/* Connect with Us Section */}
        <div className="rounded-2xl bg-white ring-1 ring-slate-200 p-8 dark:bg-slate-900 dark:ring-slate-800">
          <h2 className="text-2xl font-semibold text-slate-800 dark:text-slate-100 flex items-center gap-2 mb-6">
            <FaHandshake className="text-sky-600 dark:text-sky-400" />
            <span>Connect with Us</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-300 mb-4">
            Follow our journey and updates on social media:
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <FaLink className="text-sky-600 dark:text-sky-400 text-xl" />
              <div>
                <p className="text-slate-800 dark:text-slate-100 font-medium">Instagram</p>
                <a href="https://instagram.com/testube_app" target="_blank" rel="noopener noreferrer" className="text-sky-600 dark:text-sky-400 hover:underline">
                  @testube_app
                </a>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <FaBriefcase className="text-sky-600 dark:text-sky-400 text-xl" />
              <div>
                <p className="text-slate-800 dark:text-slate-100 font-medium">LinkedIn</p>
                <a href="https://linkedin.com/company/testube" target="_blank" rel="noopener noreferrer" className="text-sky-600 dark:text-sky-400 hover:underline">
                  Testube
                </a>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <FaTwitter className="text-sky-600 dark:text-sky-400 text-xl" />
              <div>
                <p className="text-slate-800 dark:text-slate-100 font-medium">Twitter</p>
                <a href="https://twitter.com/testube_official" target="_blank" rel="noopener noreferrer" className="text-sky-600 dark:text-sky-400 hover:underline">
                  @testube_official
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Thank You Section */}
        <div className="rounded-2xl bg-gradient-to-br from-sky-50 to-blue-50 dark:from-slate-800 dark:to-slate-900 ring-1 ring-slate-200 dark:ring-slate-700 p-8 text-center">
          <h2 className="text-2xl font-semibold text-slate-800 dark:text-slate-100 flex items-center justify-center gap-2 mb-4">
            <FaHeart className="text-red-500" />
            <span>Thank You for Using Testube</span>
          </h2>
          <p className="text-lg text-slate-700 dark:text-slate-300 italic">
            "Your curiosity drives our innovation. Keep learning, keep testing!"
          </p>
        </div>
      </div>
      <Footer />
    </div>
  )
}



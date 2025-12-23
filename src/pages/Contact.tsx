import { FormEvent, useState } from 'react';
import Section from '../components/ui/Section';
import Button from '../components/ui/Button';
import { usePageMeta } from '../hooks/usePageMeta';

interface FormState {
  name: string;
  email: string;
  projectType: string;
  budget: string;
  message: string;
}

const initialState: FormState = {
  name: '',
  email: '',
  projectType: '',
  budget: '',
  message: ''
};

const Contact = () => {
  usePageMeta({ title: 'Contact | nuViz Studio', description: 'Contact nuViz Studio for photography, film, music video, or design projects.' });

  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Record<keyof FormState, string>>({
    name: '',
    email: '',
    projectType: '',
    budget: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const validate = (): boolean => {
    const newErrors: Record<keyof FormState, string> = { name: '', email: '', projectType: '', budget: '', message: '' };
    if (!form.name.trim()) newErrors.name = 'Name is required';
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) newErrors.email = 'Valid email is required';
    if (!form.projectType) newErrors.projectType = 'Select a project type';
    if (!form.budget) newErrors.budget = 'Select a budget range';
    if (form.message.trim().length < 10) newErrors.message = 'Share a few more details';
    setErrors(newErrors);
    return Object.values(newErrors).every(val => !val);
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (!validate()) return;
    setSubmitted(true);
    setForm(initialState);
  };

  const handleChange = (key: keyof FormState, value: string) => {
    setForm(prev => ({ ...prev, [key]: value }));
    setErrors(prev => ({ ...prev, [key]: '' }));
  };

  return (
    <Section className="pt-16">
      <div className="grid gap-8 lg:grid-cols-2">
        <div>
          <p className="text-xs uppercase tracking-wide text-slate">Contact</p>
          <h1 className="text-4xl font-serif">Tell us what you are building.</h1>
          <p className="text-slate mt-3 max-w-xl">
            Email studio@nuviz.studio or use the form. We are based in Brooklyn and often work in Toronto and Los Angeles.
          </p>
          <ul className="mt-4 text-sm text-slate space-y-1">
            <li>Response within one business day.</li>
            <li>Transparent scopes and rights.</li>
            <li>Lean crews, premium delivery.</li>
          </ul>
        </div>

        <div className="border border-slate/30 rounded-subtle p-6 bg-white shadow-soft">
          {submitted ? (
            <div className="space-y-3">
              <h2 className="font-serif text-2xl">We got it.</h2>
              <p className="text-slate">Thanks for reaching out. We will respond with next steps shortly.</p>
              <Button onClick={() => setSubmitted(false)}>Send another request</Button>
            </div>
          ) : (
            <form className="space-y-4" onSubmit={handleSubmit} noValidate>
              <div>
                <label className="block text-sm font-semibold">Name</label>
                <input
                  type="text"
                  value={form.name}
                  onChange={e => handleChange('name', e.target.value)}
                  className="mt-1 w-full border border-slate/30 rounded-subtle px-3 py-2 focus:outline-none focus:border-charcoal"
                  required
                />
                {errors.name && <p className="text-red-600 text-xs mt-1">{errors.name}</p>}
              </div>
              <div>
                <label className="block text-sm font-semibold">Email</label>
                <input
                  type="email"
                  value={form.email}
                  onChange={e => handleChange('email', e.target.value)}
                  className="mt-1 w-full border border-slate/30 rounded-subtle px-3 py-2 focus:outline-none focus:border-charcoal"
                  required
                />
                {errors.email && <p className="text-red-600 text-xs mt-1">{errors.email}</p>}
              </div>
              <div>
                <label className="block text-sm font-semibold">Project type</label>
                <select
                  value={form.projectType}
                  onChange={e => handleChange('projectType', e.target.value)}
                  className="mt-1 w-full border border-slate/30 rounded-subtle px-3 py-2 focus:outline-none focus:border-charcoal"
                  required
                >
                  <option value="">Select</option>
                  <option value="Photography">Photography</option>
                  <option value="Videography">Videography</option>
                  <option value="Music Video">Music Video</option>
                  <option value="Design">Design</option>
                </select>
                {errors.projectType && <p className="text-red-600 text-xs mt-1">{errors.projectType}</p>}
              </div>
              <div>
                <label className="block text-sm font-semibold">Budget range</label>
                <select
                  value={form.budget}
                  onChange={e => handleChange('budget', e.target.value)}
                  className="mt-1 w-full border border-slate/30 rounded-subtle px-3 py-2 focus:outline-none focus:border-charcoal"
                  required
                >
                  <option value="">Select</option>
                  <option value="Under 3k">Under $3k</option>
                  <option value="3k-7k">$3k – $7k</option>
                  <option value="7k-15k">$7k – $15k</option>
                  <option value="15k+">$15k+</option>
                </select>
                {errors.budget && <p className="text-red-600 text-xs mt-1">{errors.budget}</p>}
              </div>
              <div>
                <label className="block text-sm font-semibold">Project notes</label>
                <textarea
                  value={form.message}
                  onChange={e => handleChange('message', e.target.value)}
                  className="mt-1 w-full border border-slate/30 rounded-subtle px-3 py-2 h-28 focus:outline-none focus:border-charcoal"
                  required
                />
                {errors.message && <p className="text-red-600 text-xs mt-1">{errors.message}</p>}
              </div>
              <Button type="submit">Send request</Button>
            </form>
          )}
        </div>
      </div>
    </Section>
  );
};

export default Contact;

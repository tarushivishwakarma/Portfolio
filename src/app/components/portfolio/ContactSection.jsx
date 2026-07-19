import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, Github, Linkedin, Code2, Award, Code, CheckCircle } from "./Icons";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { useScrollReveal } from "./useScrollReveal";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "tarushivishwakarma22@gmail.com",
      link: "mailto:tarushivishwakarma22@gmail.com",
      color: "purple",
      bgImage: "https://images.unsplash.com/photo-1557200134-90327ee9fafa?q=80&w=600&auto=format&fit=crop"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Lucknow, Uttar Pradesh",
      color: "purple",
      bgImage: "https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=600&auto=format&fit=crop"
    },
  ];

  const validateForm = () => {
    const newErrors = { name: "", email: "", message: "" };
    let isValid = true;

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
      isValid = false;
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters long";
      isValid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = "Please enter a valid email address";
      isValid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
      isValid = false;
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters long";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form successfully submitted:", formData);
      setIsSubmitted(true);
    }
  };

  const handleReset = () => {
    setFormData({ name: "", email: "", message: "" });
    setErrors({ name: "", email: "", message: "" });
    setIsSubmitted(false);
  };

  const [headerRef, headerVisible] = useScrollReveal();
  const [leftRef, leftVisible] = useScrollReveal();
  const [rightRef, rightVisible] = useScrollReveal();

  return (
    <section id="contact" className="py-24 px-6 bg-transparent">
      <div className="max-w-6xl mx-auto">
        <div
          ref={headerRef}
          className={`text-center mb-16 reveal-fade ${headerVisible ? 'revealed' : ''}`}
        >
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-zinc-900 dark:text-white mb-2">
            Get In Touch
          </h2>
          <p className="text-zinc-500 dark:text-zinc-400 text-sm">Have a project in mind or want to collaborate? Feel free to reach out!</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div
            ref={leftRef}
            className={`space-y-6 reveal-fade-left ${leftVisible ? 'revealed' : ''}`}
          >
            <h3 className="text-lg font-medium text-zinc-700 dark:text-zinc-300 mb-6">Contact Information</h3>

            {contactInfo.map((info) => (
              <div key={info.label}>
                <Card className="bg-white/80 dark:bg-zinc-900/10 backdrop-blur-md border border-zinc-200/50 dark:border-white/5 p-4 hover:scale-[1.02] hover:border-zinc-350 dark:hover:border-white/10 transition-all shadow-sm relative overflow-hidden group">
                  
                  {/* Subtle Background Image watermark */}
                  <img
                    src={info.bgImage}
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover opacity-[0.15] dark:opacity-[0.26] pointer-events-none group-hover:scale-105 group-hover:opacity-[0.25] dark:group-hover:opacity-[0.38] mix-blend-multiply dark:mix-blend-overlay transition-all duration-500 z-0"
                    loading="lazy"
                  />

                  <a
                    href={info.link}
                    className="flex items-center gap-4 group relative z-10"
                  >
                    <div className="p-2.5 rounded-xl bg-zinc-100 dark:bg-zinc-900/85 border border-zinc-250/50 dark:border-white/5 flex items-center justify-center">
                      <info.icon className="w-5 h-5 text-zinc-655 dark:text-zinc-300" />
                    </div>
                    <div>
                      <p className="text-zinc-500 dark:text-zinc-500 text-xs tracking-wider uppercase font-medium">{info.label}</p>
                      <p className="text-zinc-800 group-hover:text-zinc-600 dark:text-white dark:group-hover:text-zinc-300 text-sm transition-colors font-medium mt-0.5">
                        {info.value}
                      </p>
                    </div>
                  </a>
                </Card>
              </div>
            ))}
          </div>

          {/* Contact Form Slot */}
          <div
            ref={rightRef}
            className={`w-full reveal-fade-right ${rightVisible ? 'revealed' : ''}`}
          >
            {isSubmitted ? (
              <Card className="bg-white/80 dark:bg-zinc-900/10 backdrop-blur-md border border-zinc-200/50 dark:border-white/5 p-8 hover:border-zinc-350 dark:hover:border-white/10 transition-all shadow-sm flex flex-col justify-center items-center text-center h-full min-h-[460px] rounded-2xl relative overflow-hidden group">
                
                {/* Subtle Background Image watermark */}
                <img
                  src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=600&auto=format&fit=crop"
                  alt=""
                  className="absolute inset-0 w-full h-full object-cover opacity-[0.1] dark:opacity-[0.18] pointer-events-none group-hover:scale-105 group-hover:opacity-[0.15] dark:group-hover:opacity-[0.24] mix-blend-multiply dark:mix-blend-overlay transition-all duration-500 z-0"
                  loading="lazy"
                />

                {/* Visual success background orb */}
                <div className="absolute -right-20 -bottom-20 w-44 h-44 rounded-full bg-emerald-500/5 blur-3xl z-0" />
                
                <div className="flex flex-col items-center max-w-sm relative z-10 transition-all duration-500 transform scale-100 opacity-100">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-6 relative">
                    <div className="absolute inset-0 rounded-full bg-emerald-500/15 animate-ping [animation-duration:2.5s]" />
                    <CheckCircle className="w-8 h-8 text-emerald-500 relative z-10" />
                  </div>

                  <h3 className="text-2xl font-semibold text-zinc-900 dark:text-white mb-3">
                    Message Delivered!
                  </h3>
                  <p className="text-zinc-600 dark:text-zinc-400 text-sm mb-8 leading-relaxed font-light">
                    Thank you for reaching out, <span className="font-semibold text-zinc-900 dark:text-white">{formData.name}</span>. Your details have been successfully processed, and I will get back to you at <span className="font-semibold text-zinc-900 dark:text-white">{formData.email}</span> as soon as possible!
                  </p>

                  <Button
                    onClick={handleReset}
                    className="bg-zinc-900 hover:bg-zinc-800 text-white dark:bg-white dark:hover:bg-zinc-200 dark:text-zinc-955 font-semibold px-8 py-3 rounded-full transition-colors cursor-pointer shadow-sm text-sm"
                  >
                    Send Another Message
                  </Button>
                </div>
              </Card>
            ) : (
              <Card className="bg-white/80 dark:bg-zinc-900/10 backdrop-blur-md border border-zinc-200/50 dark:border-white/5 p-8 hover:border-zinc-355 dark:hover:border-white/10 transition-all shadow-sm rounded-2xl relative overflow-hidden group">
                
                {/* Subtle Background Image watermark */}
                <img
                  src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=600&auto=format&fit=crop"
                  alt=""
                  className="absolute inset-0 w-full h-full object-cover opacity-[0.1] dark:opacity-[0.18] pointer-events-none group-hover:scale-105 group-hover:opacity-[0.15] dark:group-hover:opacity-[0.24] mix-blend-multiply dark:mix-blend-overlay transition-all duration-500 z-0"
                  loading="lazy"
                />

                <div className="relative z-10">
                  <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-6">Send a Message</h3>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className="block text-zinc-500 dark:text-zinc-400 text-xs font-semibold tracking-wider uppercase mb-2 pl-0.5">Name</label>
                      <Input
                        type="text"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={(e) => {
                          setFormData({ ...formData, name: e.target.value });
                          if (errors.name) setErrors({ ...errors, name: "" });
                        }}
                        className={`bg-white dark:bg-zinc-950/50 border text-zinc-900 dark:text-white placeholder:text-zinc-400 dark:placeholder:text-zinc-650 focus:ring-0 text-sm shadow-inner rounded-xl h-11 transition-all duration-200 ${
                          errors.name 
                            ? 'border-rose-500 focus:border-rose-500 dark:border-rose-500/60 dark:focus:border-rose-500/60 ring-1 ring-rose-500/20' 
                            : 'border-zinc-200 dark:border-zinc-800 focus:border-zinc-400 dark:focus:border-zinc-505'
                        }`}
                      />
                      {errors.name && (
                        <p className="text-rose-550 dark:text-rose-400 text-xs mt-1.5 font-medium pl-1 animate-fade-in">
                          {errors.name}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-zinc-500 dark:text-zinc-400 text-xs font-semibold tracking-wider uppercase mb-2 pl-0.5">Email</label>
                      <Input
                        type="text"
                        placeholder="your.email@example.com"
                        value={formData.email}
                        onChange={(e) => {
                          setFormData({ ...formData, email: e.target.value });
                          if (errors.email) setErrors({ ...errors, email: "" });
                        }}
                        className={`bg-white dark:bg-zinc-955 border text-zinc-900 dark:text-white placeholder:text-zinc-400 dark:placeholder:text-zinc-650 focus:ring-0 text-sm shadow-inner rounded-xl h-11 transition-all duration-200 ${
                          errors.email 
                            ? 'border-rose-500 focus:border-rose-500 dark:border-rose-500/60 dark:focus:border-rose-500/60 ring-1 ring-rose-500/20' 
                            : 'border-zinc-200 dark:border-zinc-800 focus:border-zinc-400 dark:focus:border-zinc-505'
                        }`}
                      />
                      {errors.email && (
                        <p className="text-rose-550 dark:text-rose-400 text-xs mt-1.5 font-medium pl-1 animate-fade-in">
                          {errors.email}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-zinc-500 dark:text-zinc-400 text-xs font-semibold tracking-wider uppercase mb-2 pl-0.5">Message</label>
                      <Textarea
                        placeholder="Your message here (at least 10 characters)..."
                        value={formData.message}
                        onChange={(e) => {
                          setFormData({ ...formData, message: e.target.value });
                          if (errors.message) setErrors({ ...errors, message: "" });
                        }}
                        className={`bg-white dark:bg-zinc-955 border text-zinc-900 dark:text-white placeholder:text-zinc-400 dark:placeholder:text-zinc-650 focus:ring-0 min-h-32 text-sm shadow-inner rounded-xl transition-all duration-200 ${
                          errors.message 
                            ? 'border-rose-500 focus:border-rose-500 dark:border-rose-500/60 dark:focus:border-rose-500/60 ring-1 ring-rose-500/20' 
                            : 'border-zinc-200 dark:border-zinc-800 focus:border-zinc-400 dark:focus:border-zinc-505'
                        }`}
                      />
                      {errors.message && (
                        <p className="text-rose-555 dark:text-rose-400 text-xs mt-1.5 font-medium pl-1 animate-fade-in">
                          {errors.message}
                        </p>
                      )}
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-zinc-900 hover:bg-zinc-800 text-white dark:bg-white dark:hover:bg-zinc-200 dark:text-zinc-955 font-semibold h-11 rounded-xl transition-all cursor-pointer text-sm shadow-sm"
                    >
                      <Send className="mr-2 w-4 h-4" />
                      Send Message
                    </Button>
                  </form>
                </div>
              </Card>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

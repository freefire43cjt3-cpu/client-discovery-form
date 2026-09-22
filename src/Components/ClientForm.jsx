import { useState } from "react";
import "./ClientForm.css";

function ClientForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    setSubmitting(true);
    setError("");

    const form = e.target;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/mdekglyz", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setSubmitted(true);
        form.reset();
      } else {
        setError(
          "Something went wrong while submitting the form. Please try again."
        );
      }
    } catch (err) {
      setError(
        "Unable to submit the form. Please check your internet connection and try again."
      );
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <main className="success-page">
        <div className="success-background-glow"></div>

        <div className="success-card">
          <div className="success-icon-wrapper">
            <div className="success-icon">✓</div>
          </div>

          <span className="success-label">SUBMISSION RECEIVED</span>

          <h1>Thanks!</h1>

          <p className="success-message">
            The form was submitted successfully.
          </p>

          <p className="success-subtext">
            Your business information has been received. I'll review
            everything and get back to you shortly.
          </p>

          <button
            type="button"
            onClick={() => {
              setSubmitted(false);
              setError("");
            }}
            className="back-button"
          >
            <span>←</span>
            Go Back
          </button>
        </div>
      </main>
    );
  }

  return (
    <main className="client-form-page">
      <div className="page-background"></div>

      <div className="form-wrapper">
        {/* HEADER */}
        <header className="form-header">
          <div className="header-top">
            <span className="form-label">CLIENT DISCOVERY</span>
            <span className="form-number">01 — 08</span>
          </div>

          <h1>
            Let's Build Your
            <span> Digital Presence.</span>
          </h1>

          <p>
            Tell me about your aluminium fabrication business and what you
            want your new website to achieve.
          </p>

          <div className="progress-line">
            <span></span>
          </div>
        </header>

        <form onSubmit={handleSubmit}>
          {/* SECTION 01 */}
          <section className="form-section">
            <div className="section-heading">
              <span>01</span>

              <div>
                <h2>Business Information</h2>
                <p>Let's start with the basics.</p>
              </div>
            </div>

            <div className="form-grid">
              <div className="input-group full-width">
                <label>Business Name *</label>

                <input
                  type="text"
                  name="businessName"
                  placeholder="e.g. Raymond Aluminium Works"
                  required
                />
              </div>

              <div className="input-group">
                <label>Year Business Started</label>

                <input
                  type="text"
                  name="startYear"
                  placeholder="e.g. 2015"
                />
              </div>

              <div className="input-group">
                <label>Business Slogan / Tagline</label>

                <input
                  type="text"
                  name="tagline"
                  placeholder="e.g. Quality You Can Trust"
                />
              </div>

              <div className="input-group full-width">
                <label>What services do you offer? *</label>

                <textarea
                  name="services"
                  placeholder="Tell me about the services your business provides..."
                  rows="4"
                  required
                ></textarea>
              </div>

              <div className="input-group full-width">
                <label>What makes your business different?</label>

                <textarea
                  name="difference"
                  placeholder="What should customers know about your business?"
                  rows="4"
                ></textarea>
              </div>
            </div>
          </section>

          {/* SECTION 02 */}
          <section className="form-section">
            <div className="section-heading">
              <span>02</span>

              <div>
                <h2>Products & Services</h2>
                <p>Tell me what you make and install.</p>
              </div>
            </div>

            <div className="checkbox-grid">
              {[
                "Aluminium Windows",
                "Aluminium Doors",
                "Sliding Windows",
                "Sliding Doors",
                "Office Partitions",
                "Shop Fronts",
                "Curtain Walls",
                "Installation Services",
              ].map((item) => (
                <label className="checkbox-card" key={item}>
                  <input type="checkbox" name="products" value={item} />

                  <span className="custom-checkbox"></span>

                  <span>{item}</span>
                </label>
              ))}
            </div>

            <div className="input-group extra-input">
              <label>Other Products / Services</label>

              <textarea
                name="otherServices"
                placeholder="List anything else you offer..."
                rows="3"
              ></textarea>
            </div>
          </section>

          {/* SECTION 03 */}
          <section className="form-section">
            <div className="section-heading">
              <span>03</span>

              <div>
                <h2>Brand & Visual Identity</h2>
                <p>
                  Let's understand how you want your business represented.
                </p>
              </div>
            </div>

            <div className="question-block">
              <h3>Do you already have a business logo?</h3>

              <div className="radio-row">
                <label>
                  <input type="radio" name="logo" value="yes" />
                  <span>Yes, I have one</span>
                </label>

                <label>
                  <input type="radio" name="logo" value="no" />
                  <span>No, I need one</span>
                </label>
              </div>
            </div>

            <div className="input-group">
              <label>Preferred Brand Colors</label>

              <input
                type="text"
                name="colors"
                placeholder="e.g. Blue, silver and white"
              />
            </div>

            <div className="input-group">
              <label>What style do you prefer?</label>

              <select name="style" defaultValue="">
                <option value="" disabled>
                  Select a style
                </option>

                <option value="modern">Modern</option>
                <option value="premium">Premium</option>
                <option value="minimal">Minimal</option>
                <option value="bold">Bold</option>
                <option value="simple">Simple & Clean</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="input-group">
              <label>
                Do you have any logo or website examples you like?
              </label>

              <textarea
                name="references"
                placeholder="Paste links or describe what you like..."
                rows="3"
              ></textarea>
            </div>
          </section>

          {/* SECTION 04 */}
          <section className="form-section">
            <div className="section-heading">
              <span>04</span>

              <div>
                <h2>Customers & Orders</h2>

                <p>
                  Help me understand how customers interact with your
                  business.
                </p>
              </div>
            </div>

            <div className="input-group">
              <label>Who are your main customers?</label>

              <textarea
                name="customers"
                placeholder="Homes, offices, shops, estates, contractors..."
                rows="3"
              ></textarea>
            </div>

            <div className="question-block">
              <h3>Do customers usually request quotations?</h3>

              <div className="radio-row">
                <label>
                  <input type="radio" name="quotation" value="yes" />
                  <span>Yes</span>
                </label>

                <label>
                  <input type="radio" name="quotation" value="no" />
                  <span>No</span>
                </label>
              </div>
            </div>

            <div className="question-block">
              <h3>Do you offer delivery?</h3>

              <div className="radio-row">
                <label>
                  <input type="radio" name="delivery" value="yes" />
                  <span>Yes</span>
                </label>

                <label>
                  <input type="radio" name="delivery" value="no" />
                  <span>No</span>
                </label>
              </div>
            </div>

            <div className="question-block">
              <h3>Do you offer installation?</h3>

              <div className="radio-row">
                <label>
                  <input type="radio" name="installation" value="yes" />
                  <span>Yes</span>
                </label>

                <label>
                  <input type="radio" name="installation" value="no" />
                  <span>No</span>
                </label>
              </div>
            </div>

            <div className="input-group">
              <label>How do customers normally place orders?</label>

              <textarea
                name="orderProcess"
                placeholder="WhatsApp, phone call, physical visit, etc."
                rows="3"
              ></textarea>
            </div>
          </section>

          {/* SECTION 05 */}
          <section className="form-section">
            <div className="section-heading">
              <span>05</span>

              <div>
                <h2>Contact Information</h2>
                <p>Where should customers be able to reach you?</p>
              </div>
            </div>

            <div className="form-grid">
              <div className="input-group">
                <label>Business Phone *</label>

                <input
                  type="tel"
                  name="phone"
                  placeholder="+234..."
                  required
                />
              </div>

              <div className="input-group">
                <label>WhatsApp Number</label>

                <input
                  type="tel"
                  name="whatsapp"
                  placeholder="+234..."
                />
              </div>

              <div className="input-group">
                <label>Business Email</label>

                <input
                  type="email"
                  name="email"
                  placeholder="business@example.com"
                />
              </div>

              <div className="input-group">
                <label>Business Location</label>

                <input
                  type="text"
                  name="location"
                  placeholder="City / Area"
                />
              </div>

              <div className="input-group full-width">
                <label>Opening Days & Hours</label>

                <input
                  type="text"
                  name="hours"
                  placeholder="e.g. Monday - Saturday, 8am - 6pm"
                />
              </div>
            </div>
          </section>

          {/* SECTION 06 */}
          <section className="form-section">
            <div className="section-heading">
              <span>06</span>

              <div>
                <h2>Website Goals</h2>
                <p>What should the website help your business achieve?</p>
              </div>
            </div>

            <div className="input-group">
              <label>What do you want the website to achieve?</label>

              <textarea
                name="websiteGoal"
                placeholder="For example: attract new customers, showcase projects, receive enquiries..."
                rows="4"
              ></textarea>
            </div>

            <div className="checkbox-grid">
              {[
                "WhatsApp Contact",
                "Request a Quote",
                "Project Gallery",
                "Service Showcase",
                "Google Maps",
                "Customer Enquiries",
              ].map((item) => (
                <label className="checkbox-card" key={item}>
                  <input
                    type="checkbox"
                    name="websiteFeatures"
                    value={item}
                  />

                  <span className="custom-checkbox"></span>

                  <span>{item}</span>
                </label>
              ))}
            </div>
          </section>

          {/* SECTION 07 */}
          <section className="form-section">
            <div className="section-heading">
              <span>07</span>

              <div>
                <h2>Photos & Content</h2>
                <p>Let's make sure we have what the website needs.</p>
              </div>
            </div>

            <div className="input-group">
              <label>Do you have photos of your previous work?</label>

              <textarea
                name="photos"
                placeholder="Tell me what photos you currently have..."
                rows="3"
              ></textarea>
            </div>

            <div className="input-group">
              <label>Do you have videos of your work?</label>

              <textarea
                name="videos"
                placeholder="Tell me about any videos you have..."
                rows="3"
              ></textarea>
            </div>

            <div className="input-group">
              <label>Who will provide the website content?</label>

              <select name="contentProvider" defaultValue="">
                <option value="" disabled>
                  Select an option
                </option>

                <option value="client">
                  I will provide everything
                </option>

                <option value="developer">
                  I need help preparing it
                </option>

                <option value="both">
                  We'll provide it together
                </option>
              </select>
            </div>
          </section>

          {/* SECTION 08 */}
          <section className="form-section">
            <div className="section-heading">
              <span>08</span>

              <div>
                <h2>Final Details</h2>
                <p>Anything else I should know?</p>
              </div>
            </div>

            <div className="input-group">
              <label>What would you definitely like on the website?</label>

              <textarea
                name="mustHave"
                placeholder="Tell me anything important..."
                rows="4"
              ></textarea>
            </div>

            <div className="input-group">
              <label>Is there anything you don't want?</label>

              <textarea
                name="dontWant"
                placeholder="Tell me anything you want to avoid..."
                rows="4"
              ></textarea>
            </div>

            <div className="input-group">
              <label>Anything else you'd like me to know?</label>

              <textarea
                name="additionalInfo"
                placeholder="Additional information..."
                rows="4"
              ></textarea>
            </div>
          </section>

          {/* ERROR */}
          {error && (
            <div className="form-error">
              <span>!</span>
              <p>{error}</p>
            </div>
          )}

          {/* SUBMIT */}
          <div className="submit-area">
            <div className="submit-copy">
              <span className="secure-icon">✓</span>

              <p>
                Your information will be used to understand your business
                and plan your website project.
              </p>
            </div>

            <button
              type="submit"
              className="submit-button"
              disabled={submitting}
            >
              {submitting ? (
                <>
                  <span className="button-loader"></span>
                  Sending...
                </>
              ) : (
                <>
                  Submit Business Information
                  <span>→</span>
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}

export default ClientForm;
function showMarketSelection() {
  document.getElementById('initial-form').classList.add('hidden');
  document.getElementById('market-selection').classList.remove('hidden');
}

function showDurationSelection() {
  document.getElementById('market-selection').classList.add('hidden');
  document.getElementById('duration-selection').classList.remove('hidden');
}

function showLanguageSelection() {
  document.getElementById('duration-selection').classList.add('hidden');
  document.getElementById('language-selection').classList.remove('hidden');
}

function submitFinalForm() {
  const selectedLanguage = document.querySelector('input[name="language"]:checked').value;
  const selectedDuration = document.querySelector('input[name="duration"]:checked').value;
  const selectedMarkets = Array.from(document.querySelectorAll('input[name="market"]:checked'))
    .map(checkbox => checkbox.value);
    
  // Handle final form submission with all selections
  console.log('Selected markets:', selectedMarkets);
  console.log('Selected duration:', selectedDuration);
  console.log('Selected language:', selectedLanguage);
  
  // Redirect to success page
  window.location.href = 'successpage.html';
}


function scrollSection(sectionId, direction) {
  const container = document.getElementById(`${sectionId}-container`);
  const scrollAmount = 300; // Adjust this value based on your card width
  
  if (direction === 'left') {
    container.scrollBy({
      left: -scrollAmount,
      behavior: 'smooth'
    });
  } else {
    container.scrollBy({
      left: scrollAmount,
      behavior: 'smooth'
    });
  }
}
const countries = [
  { code: '+93', name: 'Afghanistan', flag: 'af.png' },
  { code: '+355', name: 'Albania', flag: 'al.png' },
  { code: '+213', name: 'Algeria', flag: 'dz.png' },
  { code: '+376', name: 'Andorra', flag: 'ad.png' },
  { code: '+244', name: 'Angola', flag: 'ao.png' },
  { code: '+54', name: 'Argentina', flag: 'ar.png' },
  { code: '+374', name: 'Armenia', flag: 'am.png' },
  { code: '+61', name: 'Australia', flag: 'au.png' },
  { code: '+43', name: 'Austria', flag: 'at.png' },
  { code: '+994', name: 'Azerbaijan', flag: 'az.png' },
  { code: '+973', name: 'Bahrain', flag: 'bh.png' },
  { code: '+880', name: 'Bangladesh', flag: 'bd.png' },
  { code: '+375', name: 'Belarus', flag: 'by.png' },
  { code: '+32', name: 'Belgium', flag: 'be.png' },
  { code: '+501', name: 'Belize', flag: 'bz.png' },
  { code: '+229', name: 'Benin', flag: 'bj.png' },
  { code: '+975', name: 'Bhutan', flag: 'bt.png' },
  { code: '+591', name: 'Bolivia', flag: 'bo.png' },
  { code: '+387', name: 'Bosnia', flag: 'ba.png' },
  { code: '+267', name: 'Botswana', flag: 'bw.png' },
  { code: '+55', name: 'Brazil', flag: 'br.png' },
  { code: '+359', name: 'Bulgaria', flag: 'bg.png' },
  { code: '+226', name: 'Burkina Faso', flag: 'bf.png' },
  { code: '+257', name: 'Burundi', flag: 'bi.png' },
  { code: '+855', name: 'Cambodia', flag: 'kh.png' },
  { code: '+237', name: 'Cameroon', flag: 'cm.png' },
  { code: '+1', name: 'Canada', flag: 'ca.png' },
  { code: '+236', name: 'Central African Republic', flag: 'cf.png' },
  { code: '+235', name: 'Chad', flag: 'td.png' },
  { code: '+56', name: 'Chile', flag: 'cl.png' },
  { code: '+86', name: 'China', flag: 'cn.png' },
  { code: '+57', name: 'Colombia', flag: 'co.png' },
  { code: '+242', name: 'Congo', flag: 'cg.png' },
  { code: '+506', name: 'Costa Rica', flag: 'cr.png' },
  { code: '+385', name: 'Croatia', flag: 'hr.png' },
  { code: '+53', name: 'Cuba', flag: 'cu.png' },
  { code: '+357', name: 'Cyprus', flag: 'cy.png' },
  { code: '+420', name: 'Czech Republic', flag: 'cz.png' },
  { code: '+45', name: 'Denmark', flag: 'dk.png' },
  { code: '+253', name: 'Djibouti', flag: 'dj.png' },
  { code: '+1', name: 'Dominican Republic', flag: 'do.png' },
  { code: '+593', name: 'Ecuador', flag: 'ec.png' },
  { code: '+20', name: 'Egypt', flag: 'eg.png' },
  { code: '+503', name: 'El Salvador', flag: 'sv.png' },
  { code: '+240', name: 'Equatorial Guinea', flag: 'gq.png' },
  { code: '+291', name: 'Eritrea', flag: 'er.png' },
  { code: '+372', name: 'Estonia', flag: 'ee.png' },
  { code: '+251', name: 'Ethiopia', flag: 'et.png' },
  { code: '+679', name: 'Fiji', flag: 'fj.png' },
  { code: '+358', name: 'Finland', flag: 'fi.png' },
  { code: '+33', name: 'France', flag: 'fr.png' },
  { code: '+241', name: 'Gabon', flag: 'ga.png' },
  { code: '+220', name: 'Gambia', flag: 'gm.png' },
  { code: '+995', name: 'Georgia', flag: 'ge.png' },
  { code: '+49', name: 'Germany', flag: 'de.png' },
  { code: '+233', name: 'Ghana', flag: 'gh.png' },
  { code: '+30', name: 'Greece', flag: 'gr.png' },
  { code: '+502', name: 'Guatemala', flag: 'gt.png' },
  { code: '+224', name: 'Guinea', flag: 'gn.png' },
  { code: '+509', name: 'Haiti', flag: 'ht.png' },
  { code: '+504', name: 'Honduras', flag: 'hn.png' },
  { code: '+852', name: 'Hong Kong', flag: 'hk.png' },
  { code: '+36', name: 'Hungary', flag: 'hu.png' },
  { code: '+354', name: 'Iceland', flag: 'is.png' },
  { code: '+91', name: 'India', flag: 'in.png' },
  { code: '+62', name: 'Indonesia', flag: 'id.png' },
  { code: '+98', name: 'Iran', flag: 'ir.png' },
  { code: '+964', name: 'Iraq', flag: 'iq.png' },
  { code: '+353', name: 'Ireland', flag: 'ie.png' },
  { code: '+972', name: 'Israel', flag: 'il.png' },
  { code: '+39', name: 'Italy', flag: 'it.png' },
  { code: '+81', name: 'Japan', flag: 'jp.png' },
  { code: '+962', name: 'Jordan', flag: 'jo.png' },
  { code: '+7', name: 'Kazakhstan', flag: 'kz.png' },
  { code: '+254', name: 'Kenya', flag: 'ke.png' },
  { code: '+82', name: 'Korea, South', flag: 'kr.png' },
  { code: '+965', name: 'Kuwait', flag: 'kw.png' },
  { code: '+996', name: 'Kyrgyzstan', flag: 'kg.png' },
  { code: '+856', name: 'Laos', flag: 'la.png' },
  { code: '+371', name: 'Latvia', flag: 'lv.png' },
  { code: '+961', name: 'Lebanon', flag: 'lb.png' },
  { code: '+266', name: 'Lesotho', flag: 'ls.png' },
  { code: '+231', name: 'Liberia', flag: 'lr.png' },
  { code: '+218', name: 'Libya', flag: 'ly.png' },
  { code: '+423', name: 'Liechtenstein', flag: 'li.png' },
  { code: '+370', name: 'Lithuania', flag: 'lt.png' },
  { code: '+352', name: 'Luxembourg', flag: 'lu.png' },
  { code: '+261', name: 'Madagascar', flag: 'mg.png' },
  { code: '+265', name: 'Malawi', flag: 'mw.png' },
  { code: '+60', name: 'Malaysia', flag: 'my.png' },
  { code: '+960', name: 'Maldives', flag: 'mv.png' },
  { code: '+223', name: 'Mali', flag: 'ml.png' },
  { code: '+356', name: 'Malta', flag: 'mt.png' },
  { code: '+222', name: 'Mauritania', flag: 'mr.png' },
  { code: '+230', name: 'Mauritius', flag: 'mu.png' },
  { code: '+52', name: 'Mexico', flag: 'mx.png' },
  { code: '+373', name: 'Moldova', flag: 'md.png' },
  { code: '+377', name: 'Monaco', flag: 'mc.png' },
  { code: '+976', name: 'Mongolia', flag: 'mn.png' },
  { code: '+382', name: 'Montenegro', flag: 'me.png' },
  { code: '+212', name: 'Morocco', flag: 'ma.png' },
  { code: '+258', name: 'Mozambique', flag: 'mz.png' },
  { code: '+95', name: 'Myanmar', flag: 'mm.png' },
  { code: '+264', name: 'Namibia', flag: 'na.png' },
  { code: '+977', name: 'Nepal', flag: 'np.png' },
  { code: '+31', name: 'Netherlands', flag: 'nl.png' },
  { code: '+64', name: 'New Zealand', flag: 'nz.png' },
  { code: '+505', name: 'Nicaragua', flag: 'ni.png' },
  { code: '+227', name: 'Niger', flag: 'ne.png' },
  { code: '+234', name: 'Nigeria', flag: 'ng.png' },
  { code: '+47', name: 'Norway', flag: 'no.png' },
  { code: '+968', name: 'Oman', flag: 'om.png' },
  { code: '+92', name: 'Pakistan', flag: 'pk.png' },
  { code: '+507', name: 'Panama', flag: 'pa.png' },
  { code: '+675', name: 'Papua New Guinea', flag: 'pg.png' },
  { code: '+595', name: 'Paraguay', flag: 'py.png' },
  { code: '+51', name: 'Peru', flag: 'pe.png' },
  { code: '+63', name: 'Philippines', flag: 'ph.png' },
  { code: '+48', name: 'Poland', flag: 'pl.png' },
  { code: '+351', name: 'Portugal', flag: 'pt.png' },
  { code: '+974', name: 'Qatar', flag: 'qa.png' },
  { code: '+40', name: 'Romania', flag: 'ro.png' },
  { code: '+7', name: 'Russia', flag: 'ru.png' },
  { code: '+250', name: 'Rwanda', flag: 'rw.png' },
  { code: '+966', name: 'Saudi Arabia', flag: 'sa.png' },
  { code: '+221', name: 'Senegal', flag: 'sn.png' },
  { code: '+381', name: 'Serbia', flag: 'rs.png' },
  { code: '+65', name: 'Singapore', flag: 'sg.png' },
  { code: '+421', name: 'Slovakia', flag: 'sk.png' },
  { code: '+386', name: 'Slovenia', flag: 'si.png' },
  { code: '+252', name: 'Somalia', flag: 'so.png' },
  { code: '+27', name: 'South Africa', flag: 'za.png' },
  { code: '+34', name: 'Spain', flag: 'es.png' },
  { code: '+94', name: 'Sri Lanka', flag: 'lk.png' },
  { code: '+249', name: 'Sudan', flag: 'sd.png' },
  { code: '+46', name: 'Sweden', flag: 'se.png' },
  { code: '+41', name: 'Switzerland', flag: 'ch.png' },
  { code: '+963', name: 'Syria', flag: 'sy.png' },
  { code: '+886', name: 'Taiwan', flag: 'tw.png' },
  { code: '+992', name: 'Tajikistan', flag: 'tj.png' },
  { code: '+255', name: 'Tanzania', flag: 'tz.png' },
  { code: '+66', name: 'Thailand', flag: 'th.png' },
  { code: '+228', name: 'Togo', flag: 'tg.png' },
  { code: '+216', name: 'Tunisia', flag: 'tn.png' },
  { code: '+90', name: 'Turkey', flag: 'tr.png' },
  { code: '+993', name: 'Turkmenistan', flag: 'tm.png' },
  { code: '+256', name: 'Uganda', flag: 'ug.png' },
  { code: '+380', name: 'Ukraine', flag: 'ua.png' },
  { code: '+971', name: 'United Arab Emirates', flag: 'ae.png' },
  { code: '+44', name: 'United Kingdom', flag: 'gb.png' },
  { code: '+1', name: 'United States', flag: 'us.png' },
  { code: '+598', name: 'Uruguay', flag: 'uy.png' },
  { code: '+998', name: 'Uzbekistan', flag: 'uz.png' },
  { code: '+58', name: 'Venezuela', flag: 've.png' },
  { code: '+84', name: 'Vietnam', flag: 'vn.png' },
  { code: '+967', name: 'Yemen', flag: 'ye.png' },
  { code: '+260', name: 'Zambia', flag: 'zm.png' },
  { code: '+263', name: 'Zimbabwe', flag: 'zw.png' }
];

function initializeCountrySelector() {
  const select = document.getElementById('countrySelect');
  
  countries.forEach(country => {
    const option = document.createElement('option');
    option.value = country.code;
    option.textContent = `${country.name} (${country.code})`;
    option.setAttribute('data-flag', country.flag);
    select.appendChild(option);
  });

  select.addEventListener('change', (e) => {
    const selectedOption = e.target.options[e.target.selectedIndex];
    const flagPath = selectedOption.getAttribute('data-flag');
    // Update flag image if needed
  });
}

// Add this to your existing DOMContentLoaded event listener
document.addEventListener('DOMContentLoaded', () => {
  // Your existing code...
  initializeCountrySelector();
});


// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Hover effect for navigation links
const navLinks = document.querySelectorAll('.nav-links a');
navLinks.forEach(link => {
    link.addEventListener('mouseenter', () => {
        link.style.color = '#8A2BE2';
        link.style.transition = 'color 0.3s ease';
    });
    link.addEventListener('mouseleave', () => {
        link.style.color = '#333';
    });
});

document.querySelectorAll('.faq-question').forEach(question => {
  question.addEventListener('click', () => {
    const answer = question.nextElementSibling;
    const toggle = question.querySelector('.faq-toggle');
    
    // Close other answers
    document.querySelectorAll('.faq-answer').forEach(item => {
      if (item !== answer) {
        item.classList.remove('active');
        const otherToggle = item.previousElementSibling.querySelector('.faq-toggle');
        if (otherToggle) {
          otherToggle.classList.remove('active');
        }
      }
    });
    // Toggle current answer
    answer.classList.toggle('active');
    if (toggle) {
      toggle.classList.toggle('active');
    }
  });
});




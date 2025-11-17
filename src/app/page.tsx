"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import HeroBillboardScroll from '@/components/sections/hero/HeroBillboardScroll';
import TagAbout from '@/components/sections/about/TagAbout';
import FeatureCardOne from '@/components/sections/feature/FeatureCardOne';
import PricingCardTwo from '@/components/sections/pricing/PricingCardTwo';
import MetricCardTwo from '@/components/sections/metrics/MetricCardTwo';
import TeamCardTwo from '@/components/sections/team/TeamCardTwo';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import BlogCardOne from '@/components/sections/blog/BlogCardOne';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterSocial from '@/components/sections/footer/FooterSocial';
import { Heart, ChefHat, Crown, Star, Users, Award, MessageCircle, BookOpen, Calendar, Instagram, Facebook, Twitter } from "lucide-react";

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-magnetic"
      defaultTextAnimation="entrance-slide"
      borderRadius="pill"
      contentWidth="large"
      sizing="small"
      background="aurora"
      cardStyle="glass-elevated"
      primaryButtonStyle="flat"
      secondaryButtonStyle="layered"
      showBlurBottom={false}
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          navItems={[
            { name: "Home", id: "hero" },
            { name: "About", id: "about" },
            { name: "Menu", id: "menu" },
            { name: "Testimonials", id: "testimonials" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="Eesti Köök"
          button={{ text: "Reserve Table", href: "contact" }}
        />
      </div>
      
      <div id="hero" data-section="hero">
        <HeroBillboardScroll
          title="Authentic Estonian Cuisine"
          description="Experience the rich flavors and warm traditions of Estonia in the heart of the city. From hearty rye breads to comforting meatballs, every dish tells a story of our heritage."
          tag="Traditional Heritage"
          tagIcon={Heart}
          buttons={[
            { text: "View Menu", href: "menu" },
            { text: "Reserve Table", href: "contact" }
          ]}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T5izMxldBWO3pvAnJwuKTzxAr/uploaded-1763413773385-hpmr7yb0.jpg"
          imageAlt="Estonian countryside with traditional wooden house"
        />
      </div>
      
      <div id="about" data-section="about">
        <TagAbout
          tag="Our Story"
          description="At Eesti Köök, we bring the authentic taste of Estonia to your table. Our family recipes have been passed down through generations, celebrating the rich culinary heritage of the Baltic region with locally sourced ingredients and time-honored cooking methods."
        />
      </div>
      
      <div id="menu" data-section="menu">
        <FeatureCardOne
          title="Signature Dishes"
          description="Discover our most beloved Estonian specialties, crafted with authentic recipes and fresh local ingredients"
          tag="Featured Menu"
          tagIcon={ChefHat}
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          textboxLayout="default"
          features={[
            {
              title: "Traditional Black Bread",
              description: "Authentic Estonian dark rye bread, baked daily using our century-old recipe with caraway seeds and molasses",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T5izMxldBWO3pvAnJwuKTzxAr/uploaded-1763413774874-w9rh4fqm.jpg",
              imageAlt: "Traditional Estonian black bread"
            },
            {
              title: "Lihapallid (Meatballs)",
              description: "Hearty Estonian-style meatballs served with creamy dill sauce, lingonberry jam, and roasted potatoes",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T5izMxldBWO3pvAnJwuKTzxAr/uploaded-1763413775514-fmb0z5m8.jpg",
              imageAlt: "Estonian meatballs with dill sauce"
            },
            {
              title: "Kartulisalat",
              description: "Classic Estonian potato salad with fresh herbs, pickles, and a tangy mayonnaise dressing",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T5izMxldBWO3pvAnJwuKTzxAr/uploaded-1763413776301-oawnwxzx.jpg",
              imageAlt: "Estonian potato salad"
            },
            {
              title: "Kapsarullid",
              description: "Traditional cabbage rolls stuffed with seasoned pork and rice, slow-cooked in savory tomato sauce",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T5izMxldBWO3pvAnJwuKTzxAr/uploaded-1763413777040-oky1qlik.jpg",
              imageAlt: "Estonian cabbage rolls"
            }
          ]}
        />
      </div>
      
      <div id="pricing" data-section="pricing">
        <PricingCardTwo
          title="Traditional Meal Sets"
          description="Complete Estonian dining experiences featuring authentic dishes and traditional accompaniments"
          tag="Special Menus"
          tagIcon={Crown}
          textboxLayout="default"
          animationType="slide-up"
          plans={[
            {
              id: "traditional",
              badge: "Most Popular",
              badgeIcon: Star,
              price: "$28",
              subtitle: "Complete traditional Estonian experience",
              buttons: [
                { text: "Order Now", href: "contact" },
                { text: "View Details", href: "menu" }
              ],
              features: [
                "Traditional black bread & butter",
                "Choice of main dish",
                "Seasonal Estonian soup",
                "Kama dessert",
                "Estonian herbal tea"
              ]
            },
            {
              id: "family",
              badge: "Best Value",
              badgeIcon: Users,
              price: "$85",
              subtitle: "Perfect for sharing authentic flavors",
              buttons: [
                { text: "Reserve Table", href: "contact" },
                { text: "Learn More", href: "about" }
              ],
              features: [
                "Serves 3-4 people",
                "Mixed appetizer platter",
                "3 main dishes to share",
                "Traditional sides",
                "Homemade Estonian desserts"
              ]
            }
          ]}
        />
      </div>
      
      <div id="metrics" data-section="metrics">
        <MetricCardTwo
          title="Our Estonian Heritage"
          description="Years of tradition and countless satisfied guests celebrating authentic Baltic cuisine"
          tag="Proven Excellence"
          tagIcon={Award}
          textboxLayout="default"
          animationType="slide-up"
          gridVariant="uniform-all-items-equal"
          metrics={[
            {
              id: "1",
              value: "25+",
              description: "Years serving authentic Estonian cuisine"
            },
            {
              id: "2",
              value: "10,000+",
              description: "Happy diners experiencing our traditions"
            },
            {
              id: "3",
              value: "50+",
              description: "Traditional recipes in our collection"
            }
          ]}
        />
      </div>
      
      <div id="testimonials" data-section="testimonials">
        <TeamCardTwo
          title="Meet Our Estonian Chefs"
          description="Our talented culinary team brings generations of Estonian cooking expertise to every dish"
          tag="Kitchen Masters"
          tagIcon={ChefHat}
          textboxLayout="default"
          animationType="slide-up"
          gridVariant="uniform-all-items-equal"
          members={[
            {
              id: "1",
              name: "Liisa Kask",
              role: "Head Chef",
              description: "Born in Tallinn, Liisa learned traditional Estonian cooking from her grandmother. She specializes in authentic bread making and traditional meat dishes.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T5izMxldBWO3pvAnJwuKTzxAr/uploaded-1763413789819-ktyg9xkb.jpg",
              imageAlt: "Portrait of Chef Liisa Kask"
            },
            {
              id: "2",
              name: "Mart Tamm",
              role: "Pastry Chef",
              description: "A master of Estonian desserts and pastries, Mart creates our famous kama desserts and traditional holiday sweets with recipes from Tartu region.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T5izMxldBWO3pvAnJwuKTzxAr/uploaded-1763413789819-ktyg9xkb.jpg",
              imageAlt: "Portrait of Chef Mart Tamm"
            }
          ]}
        />
      </div>
      
      <div id="reviews" data-section="reviews">
        <TestimonialCardOne
          title="What Our Guests Say"
          description="Authentic reviews from diners who have experienced our traditional Estonian cuisine"
          tag="Guest Reviews"
          tagIcon={MessageCircle}
          textboxLayout="default"
          animationType="slide-up"
          gridVariant="uniform-all-items-equal"
          testimonials={[
            {
              id: "1",
              name: "Sarah Johnson",
              role: "Food Blogger",
              company: "Baltic Food Explorer",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T5izMxldBWO3pvAnJwuKTzxAr/uploaded-1763413779531-ycmg04o9.jpg",
              imageAlt: "Portrait of Sarah Johnson"
            },
            {
              id: "2",
              name: "Erik Petrov",
              role: "Restaurant Critic",
              company: "City Dining Guide",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T5izMxldBWO3pvAnJwuKTzxAr/uploaded-1763413780333-0af1w4rr.jpg",
              imageAlt: "Portrait of Erik Petrov"
            },
            {
              id: "3",
              name: "Anna Rebane",
              role: "Estonian Expat",
              company: "Heritage Society",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T5izMxldBWO3pvAnJwuKTzxAr/uploaded-1763413781028-gq09j8dx.jpg",
              imageAlt: "Portrait of Anna Rebane"
            },
            {
              id: "4",
              name: "Michael Torres",
              role: "Local Foodie",
              company: "Community Reviewer",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T5izMxldBWO3pvAnJwuKTzxAr/uploaded-1763413782111-p2jhiph2.jpg",
              imageAlt: "Portrait of Michael Torres"
            },
            {
              id: "5",
              name: "Katrin Mägi",
              role: "Cultural Ambassador",
              company: "Estonian Cultural Center",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T5izMxldBWO3pvAnJwuKTzxAr/uploaded-1763413783000-dpl4aeay.jpg",
              imageAlt: "Portrait of Katrin Mägi"
            },
            {
              id: "6",
              name: "David Chen",
              role: "Travel Writer",
              company: "Global Cuisine Magazine",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T5izMxldBWO3pvAnJwuKTzxAr/uploaded-1763413783672-445ob6p1.jpg",
              imageAlt: "Portrait of David Chen"
            }
          ]}
        />
      </div>
      
      <div id="social-proof" data-section="social-proof">
        <SocialProofOne
          title="Recognized by Food Authorities"
          description="Our authentic Estonian cuisine has been featured and endorsed by leading culinary organizations"
          tag="Media Coverage"
          tagIcon={Award}
          textboxLayout="default"
          logos={[
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T5izMxldBWO3pvAnJwuKTzxAr/uploaded-1763413784401-mxdv63wn.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T5izMxldBWO3pvAnJwuKTzxAr/uploaded-1763413785091-ljhwcdib.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T5izMxldBWO3pvAnJwuKTzxAr/uploaded-1763413785831-kedp5g9u.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T5izMxldBWO3pvAnJwuKTzxAr/uploaded-1763413786565-ad7yfrev.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T5izMxldBWO3pvAnJwuKTzxAr/uploaded-1763413787595-amo24mbf.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T5izMxldBWO3pvAnJwuKTzxAr/uploaded-1763413788549-k4uj2bwt.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T5izMxldBWO3pvAnJwuKTzxAr/uploaded-1763413789281-pqprubrz.jpg"
          ]}
        />
      </div>
      
      <div id="faq" data-section="faq">
        <FaqSplitText
          sideTitle="Common Questions About Estonian Cuisine"
          sideDescription="Everything you need to know about our traditional dishes and dining experience"
          textPosition="left"
          animationType="smooth"
          faqs={[
            {
              id: "1",
              title: "What makes Estonian cuisine unique?",
              content: "Estonian cuisine combines Nordic and Eastern European influences, featuring hearty grains like barley and rye, fresh Baltic seafood, forest mushrooms, and preserved vegetables. Our cooking methods emphasize slow preparation and natural flavors."
            },
            {
              id: "2",
              title: "Do you accommodate dietary restrictions?",
              content: "Yes! We offer vegetarian versions of many traditional dishes and can accommodate gluten-free requests. Our menu clearly marks allergens, and our staff can guide you through suitable options."
            },
            {
              id: "3",
              title: "Are your ingredients authentic and locally sourced?",
              content: "We import key specialty ingredients directly from Estonia and source locally whenever possible. Our black bread flour, caraway seeds, and traditional preserves come from trusted Estonian suppliers."
            },
            {
              id: "4",
              title: "What should first-time visitors try?",
              content: "We recommend starting with our Traditional Meal Set featuring black bread, lihapallid (meatballs), kartulisalat (potato salad), and kama dessert. It's a perfect introduction to authentic Estonian flavors."
            }
          ]}
        />
      </div>
      
      <div id="blog" data-section="blog">
        <BlogCardOne
          title="Estonian Culinary Stories"
          description="Discover the rich history and traditions behind our authentic recipes and cooking methods"
          tag="Heritage Blog"
          tagIcon={BookOpen}
          textboxLayout="default"
          animationType="slide-up"
          blogs={[
            {
              id: "1",
              category: "Recipes",
              title: "The Secret to Perfect Estonian Black Bread",
              excerpt: "Learn about the traditional fermentation process and special ingredients that make our dark rye bread so authentic and flavorful.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T5izMxldBWO3pvAnJwuKTzxAr/uploaded-1763413774874-w9rh4fqm.jpg",
              imageAlt: "Traditional Estonian black bread",
              authorName: "Chef Liisa Kask",
              authorAvatar: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T5izMxldBWO3pvAnJwuKTzxAr/uploaded-1763413789819-ktyg9xkb.jpg",
              date: "15 Dec 2024"
            },
            {
              id: "2",
              category: "Culture",
              title: "Estonian Holiday Traditions & Food",
              excerpt: "Explore how traditional Estonian celebrations are centered around food, from midsummer festivities to winter solstice feasts.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T5izMxldBWO3pvAnJwuKTzxAr/uploaded-1763413790485-iholerct.jpg",
              imageAlt: "Estonian restaurant interior with traditional decor",
              authorName: "Anna Rebane",
              authorAvatar: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T5izMxldBWO3pvAnJwuKTzxAr/uploaded-1763413781028-gq09j8dx.jpg",
              date: "8 Dec 2024"
            },
            {
              id: "3",
              category: "Ingredients",
              title: "Foraging Estonian Forest Flavors",
              excerpt: "Discover the wild mushrooms, berries, and herbs that are essential to traditional Estonian cooking and how we incorporate them.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T5izMxldBWO3pvAnJwuKTzxAr/uploaded-1763413791246-ryqop2kb.jpg",
              imageAlt: "Estonian cookbook with traditional recipes",
              authorName: "Chef Mart Tamm",
              authorAvatar: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T5izMxldBWO3pvAnJwuKTzxAr/uploaded-1763413789819-ktyg9xkb.jpg",
              date: "2 Dec 2024"
            }
          ]}
        />
      </div>
      
      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Reserve Your Table"
          title="Experience Authentic Estonian Hospitality"
          description="Book your table today and join us for an unforgettable journey through the flavors of Estonia. We look forward to sharing our heritage with you."
          tagIcon={Calendar}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T5izMxldBWO3pvAnJwuKTzxAr/uploaded-1763413790485-iholerct.jpg"
          imageAlt="Cozy Estonian restaurant interior"
          mediaPosition="right"
          inputPlaceholder="Enter your email for reservations"
          buttonText="Reserve Now"
          termsText="By reserving, you agree to our booking policies. We'll contact you within 24 hours to confirm your reservation details."
        />
      </div>
      
      <div id="footer" data-section="footer">
        <FooterSocial
          logoText="Eesti Köök"
          copyrightText="© 2024 Eesti Köök. Authentic Estonian cuisine since 1999."
          columns={[
            {
              title: "Menu",
              items: [
                { label: "Signature Dishes", href: "menu" },
                { label: "Traditional Breads", href: "menu" },
                { label: "Seasonal Specials", href: "menu" },
                { label: "Desserts", href: "menu" }
              ]
            },
            {
              title: "Experience",
              items: [
                { label: "Our Story", href: "about" },
                { label: "Estonian Heritage", href: "about" },
                { label: "Meet Our Chefs", href: "testimonials" },
                { label: "Private Dining", href: "contact" }
              ]
            },
            {
              title: "Visit Us",
              items: [
                { label: "Reservations", href: "contact" },
                { label: "Location & Hours", href: "contact" },
                { label: "Special Events", href: "contact" },
                { label: "Group Bookings", href: "contact" }
              ]
            },
            {
              title: "Connect",
              items: [
                { label: "Recipe Blog", href: "blog" },
                { label: "Cooking Classes", href: "contact" },
                { label: "Newsletter", href: "contact" },
                { label: "Gift Cards", href: "contact" }
              ]
            }
          ]}
          socialLinks={[
            {
              icon: Instagram,
              href: "https://instagram.com/eestikook",
              ariaLabel: "Follow us on Instagram"
            },
            {
              icon: Facebook,
              href: "https://facebook.com/eestikook",
              ariaLabel: "Like us on Facebook"
            },
            {
              icon: Twitter,
              href: "https://twitter.com/eestikook",
              ariaLabel: "Follow us on Twitter"
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}
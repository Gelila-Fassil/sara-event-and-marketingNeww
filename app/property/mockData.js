

export const mockProperties = [
  {
    id: "1",
    attributes: {
      Title: "Modern Apartment in Bole",
      Description: "Beautiful modern apartment with stunning city views",
      Icon: {
        data: {
          attributes: {
            alternativeText: "Apartment Icon",
            url: "https://res.cloudinary.com/dkqlrnz6r/image/upload/v1732650082/apartment-icon_1.jpg"
          }
        }
      },
      Image: {
        data: {
          attributes: {
            url: "https://res.cloudinary.com/dkqlrnz6r/image/upload/v1732650082/modern-apartment_1.jpg",
            alternativeText: "Modern Apartment"
          }
        }
      },
      Price: 2500000,
      Bedrooms: 3,
      city: {
        data: {
          attributes: {
            Name: "Addis Ababa",
            location: {
              data: {
                attributes: {
                  Name: "Bole"
                }
              }
            },
            subcities: {
              data: [
                {
                  attributes: {
                    Name: "Bole Medhanealem"
                  }
                }
              ]
            }
          }
        }
      }
    }
  },
  {
    id: "2",
    attributes: {
      Title: "Luxury Villa in Sarbet",
      Description: "Spacious villa with garden and modern amenities",
      Icon: {
        data: {
          attributes: {
            alternativeText: "Villa Icon",
            url: "https://res.cloudinary.com/dkqlrnz6r/image/upload/v1732650082/villa-icon_1.jpg"
          }
        }
      },
      Image: {
        data: {
          attributes: {
            url: "https://res.cloudinary.com/dkqlrnz6r/image/upload/v1732650082/luxury-villa_1.jpg",
            alternativeText: "Luxury Villa"
          }
        }
      },
      Price: 4500000,
      Bedrooms: 5,
      city: {
        data: {
          attributes: {
            Name: "Addis Ababa",
            location: {
              data: {
                attributes: {
                  Name: "Sarbet"
                }
              }
            },
            subcities: {
              data: [
                {
                  attributes: {
                    Name: "Sarbet"
                  }
                }
              ]
            }
          }
        }
      }
    }
  },
  {
    id: "3",
    attributes: {
      Title: "Cozy Studio in CMC",
      Description: "Perfect studio apartment for young professionals",
      Icon: {
        data: {
          attributes: {
            alternativeText: "Studio Icon",
            url: "https://res.cloudinary.com/dkqlrnz6r/image/upload/v1732650082/studio-icon_1.jpg"
          }
        }
      },
      Image: {
        data: {
          attributes: {
            url: "https://res.cloudinary.com/dkqlrnz6r/image/upload/v1732650082/studio-apartment_1.jpg",
            alternativeText: "Studio Apartment"
          }
        }
      },
      Price: 1200000,
      Bedrooms: 1,
      city: {
        data: {
          attributes: {
            Name: "Addis Ababa",
            location: {
              data: {
                attributes: {
                  Name: "CMC"
                }
              }
            },
            subcities: {
              data: [
                {
                  attributes: {
                    Name: "CMC"
                  }
                }
              ]
            }
          }
        }
      }
    }
  },
  {
    id: "4",
    attributes: {
      Title: "Family Home in Gerji",
      Description: "Spacious family home in a quiet neighborhood",
      Icon: {
        data: {
          attributes: {
            alternativeText: "House Icon",
            url: "https://res.cloudinary.com/dkqlrnz6r/image/upload/v1732650082/house-icon_1.jpg"
          }
        }
      },
      Image: {
        data: {
          attributes: {
            url: "https://res.cloudinary.com/dkqlrnz6r/image/upload/v1732650082/family-home_1.jpg",
            alternativeText: "Family Home"
          }
        }
      },
      Price: 3800000,
      Bedrooms: 4,
      city: {
        data: {
          attributes: {
            Name: "Addis Ababa",
            location: {
              data: {
                attributes: {
                  Name: "Bole"
                }
              }
            },
            subcities: {
              data: [
                {
                  attributes: {
                    Name: "Gerji"
                  }
                }
              ]
            }
          }
        }
      }
    }
  }
];

export const mockCities = {
  cities: {
    data: [
      {
        id: "1",
        attributes: {
          Name: "Addis Ababa",
          location: {
            data: {
              attributes: {
                Name: "Bole"
              }
            }
          },
          subcities: {
            data: [
              {
                attributes: {
                  Name: "Bole Medhanealem"
                }
              },
              {
                attributes: {
                  Name: "Gerji"
                }
              }
            ]
          }
        }
      },
      {
        id: "2",
        attributes: {
          Name: "Addis Ababa",
          location: {
            data: {
              attributes: {
                Name: "Sarbet"
              }
            }
          },
          subcities: {
            data: [
              {
                attributes: {
                  Name: "Sarbet"
                }
              }
            ]
          }
        }
      },
      {
        id: "3",
        attributes: {
          Name: "Addis Ababa",
          location: {
            data: {
              attributes: {
                Name: "CMC"
              }
            }
          },
          subcities: {
            data: [
              {
                attributes: {
                  Name: "CMC"
                }
              }
            ]
          }
        }
      }
    ]
  }
};

export const mockHomeData = {
  propertyHome: {
    data: {
      attributes: {
        blocks: [
          {
            __typename: "ComponentLayoutPropertyAboutUs",
            Title: {
              title: "About Our Properties",
              secondTitle: "Find Your Dream Home"
            },
            description: "We offer a wide range of properties to suit your needs",
            aboutCard: {
              title: "Quality Properties",
              secondTitle: "Best Locations"
            }
          },
          {
            __typename: "ComponentLayoutPartners",
            partnerDescription: "Trusted by leading real estate companies",
            partnerTitle: {
              title: "Our Partners",
              secondTitle: "Trusted Companies"
            },
            partnerImage: {
              image: {
                data: {
                  attributes: {
                    url: "https://res.cloudinary.com/dkqlrnz6r/image/upload/v1732650082/partners_1.jpg",
                    alternativeText: "Our Partners"
                  }
                }
              }
            }
          },
          {
            __typename: "ComponentLayoutOurAcheivement",
            title: "Our Achievements",
            description: "Proud to serve our clients",
            acheivementCard: {
              description: "Successfully sold properties",
              title: "1000+",
              button: "Learn More"
            }
          }
        ]
      }
    }
  }
};

export const mockContactData = {
  propertyContactPage: {
    data: {
      attributes: {
        blocks: [
          {
            __typename: "ComponentLayoutContactInfo",
            contactTitle: {
              title: "Get in Touch",
              secondTitle: "Contact Us"
            },
            contactDescription: "Have questions about our properties? We're here to help. Fill out the form below and we'll get back to you as soon as possible.",
            getInTouch: "Contact Information",
            contactCard: [
              {
                title: "Address",
                description: "Bole, Addis Ababa, Ethiopia",
                button: "View on Map",
                image: {
                  data: {
                    attributes: {
                      url: "https://res.cloudinary.com/dkqlrnz6r/image/upload/v1732650082/location-icon_1.jpg",
                      alternativeText: "Location Icon"
                    }
                  }
                }
              },
              {
                title: "Phone",
                description: "+251 911 123 456",
                button: "Call Now",
                image: {
                  data: {
                    attributes: {
                      url: "https://res.cloudinary.com/dkqlrnz6r/image/upload/v1732650082/phone-icon_1.jpg",
                      alternativeText: "Phone Icon"
                    }
                  }
                }
              },
              {
                title: "Email",
                description: "info@saraevents.com",
                button: "Send Email",
                image: {
                  data: {
                    attributes: {
                      url: "https://res.cloudinary.com/dkqlrnz6r/image/upload/v1732650082/email-icon_1.jpg",
                      alternativeText: "Email Icon"
                    }
                  }
                }
              }
            ]
          }
        ]
      }
    }
  }
};

export const mockAboutData = {
  propertyAboutUs: {
    data: {
      attributes: {
        blocks: [
          {
            __typename: "ComponentLayoutPropertyAboutUs",
            Title: {
              title: "Who We Are",
              secondTitle: "Our Story"
            },
            description: "Sara Events and Marketing is a leading property management company in Ethiopia, dedicated to providing exceptional real estate services. With years of experience in the market, we have built a reputation for trust, reliability, and excellence.",
            aboutCard: {
              title: "Our Mission",
              secondTitle: "Building Dreams"
            }
          },
          {
            __typename: "ComponentComponentsLink",
            title: "Our Vision",
            eventTitle: "Leading the Future",
            url: "#vision"
          },
          {
            __typename: "ComponentLayoutServiceCard",
            ServiceCard: {
              title: "Professional Team",
              description: "Our team of experienced real estate professionals is dedicated to helping you find your perfect property.",
              button: "Meet Our Team",
              image: {
                data: {
                  attributes: {
                    url: "https://res.cloudinary.com/dkqlrnz6r/image/upload/v1732650082/team_1.jpg",
                    alternativeText: "Professional Team"
                  }
                }
              }
            }
          },
          {
            __typename: "ComponentLayoutTestimonial",
            testimonailTitle: {
              title: "What Our Clients",
              secondTitle: "Say About Us"
            },
            testimonialCard: [
              {
                title: "Excellent Service",
                description: "The team at Sara Events made finding my dream home a seamless experience. Their professionalism and attention to detail were outstanding.",
                button: "Read More"
              },
              {
                title: "Highly Recommended",
                description: "I've worked with many real estate companies, but Sara Events stands out for their exceptional service and market knowledge.",
                button: "Read More"
              }
            ]
          },
          {
            __typename: "ComponentLayoutPartners",
            partnerDescription: "Trusted by leading real estate companies",
            partnerTitle: {
              title: "Our Partners",
              secondTitle: "Trusted Companies"
            },
            partnerImage: {
              image: {
                data: {
                  attributes: {
                    url: "https://res.cloudinary.com/dkqlrnz6r/image/upload/v1732650082/partners_1.jpg",
                    alternativeText: "Our Partners"
                  }
                }
              }
            }
          },
          {
            __typename: "ComponentLayoutOurAcheivement",
            title: "Our Achievements",
            description: "Proud to serve our clients",
            acheivementCard: [
              {
                description: "Properties Sold",
                title: "1000+",
                button: "Learn More"
              },
              {
                description: "Happy Clients",
                title: "500+",
                button: "Learn More"
              },
              {
                description: "Years Experience",
                title: "10+",
                button: "Learn More"
              }
            ]
          }
        ]
      }
    }
  }
};

export const mockGalleryData = {
  data: [
    {
      id: "1",
      attributes: {
        Title: "Modern Apartment Interior",
        category: "Interior",
        image: {
          data: {
            attributes: {
              url: "https://res.cloudinary.com/dkqlrnz6r/image/upload/v1732650082/modern-interior_1.jpg",
              alternativeText: "Modern Apartment Interior",
              formats: {
                small: {
                  url: "https://res.cloudinary.com/dkqlrnz6r/image/upload/v1732650082/modern-interior-small_1.jpg"
                },
                large: {
                  url: "https://res.cloudinary.com/dkqlrnz6r/image/upload/v1732650082/modern-interior-large_1.jpg"
                }
              }
            }
          }
        }
      }
    },
    {
      id: "2",
      attributes: {
        Title: "Luxury Villa Exterior",
        category: "Exterior",
        image: {
          data: {
            attributes: {
              url: "https://res.cloudinary.com/dkqlrnz6r/image/upload/v1732650082/luxury-villa-exterior_1.jpg",
              alternativeText: "Luxury Villa Exterior",
              formats: {
                small: {
                  url: "https://res.cloudinary.com/dkqlrnz6r/image/upload/v1732650082/luxury-villa-exterior-small_1.jpg"
                },
                large: {
                  url: "https://res.cloudinary.com/dkqlrnz6r/image/upload/v1732650082/luxury-villa-exterior-large_1.jpg"
                }
              }
            }
          }
        }
      }
    },
    {
      id: "3",
      attributes: {
        Title: "Modern Kitchen",
        category: "Interior",
        image: {
          data: {
            attributes: {
              url: "https://res.cloudinary.com/dkqlrnz6r/image/upload/v1732650082/modern-kitchen_1.jpg",
              alternativeText: "Modern Kitchen",
              formats: {
                small: {
                  url: "https://res.cloudinary.com/dkqlrnz6r/image/upload/v1732650082/modern-kitchen-small_1.jpg"
                },
                large: {
                  url: "https://res.cloudinary.com/dkqlrnz6r/image/upload/v1732650082/modern-kitchen-large_1.jpg"
                }
              }
            }
          }
        }
      }
    },
    {
      id: "4",
      attributes: {
        Title: "Swimming Pool",
        category: "Amenities",
        image: {
          data: {
            attributes: {
              url: "https://res.cloudinary.com/dkqlrnz6r/image/upload/v1732650082/swimming-pool_1.jpg",
              alternativeText: "Swimming Pool",
              formats: {
                small: {
                  url: "https://res.cloudinary.com/dkqlrnz6r/image/upload/v1732650082/swimming-pool-small_1.jpg"
                },
                large: {
                  url: "https://res.cloudinary.com/dkqlrnz6r/image/upload/v1732650082/swimming-pool-large_1.jpg"
                }
              }
            }
          }
        }
      }
    },
    {
      id: "5",
      attributes: {
        Title: "Garden View",
        category: "Exterior",
        image: {
          data: {
            attributes: {
              url: "https://res.cloudinary.com/dkqlrnz6r/image/upload/v1732650082/garden-view_1.jpg",
              alternativeText: "Garden View",
              formats: {
                small: {
                  url: "https://res.cloudinary.com/dkqlrnz6r/image/upload/v1732650082/garden-view-small_1.jpg"
                },
                large: {
                  url: "https://res.cloudinary.com/dkqlrnz6r/image/upload/v1732650082/garden-view-large_1.jpg"
                }
              }
            }
          }
        }
      }
    },
    {
      id: "6",
      attributes: {
        Title: "Master Bedroom",
        category: "Interior",
        image: {
          data: {
            attributes: {
              url: "https://res.cloudinary.com/dkqlrnz6r/image/upload/v1732650082/master-bedroom_1.jpg",
              alternativeText: "Master Bedroom",
              formats: {
                small: {
                  url: "https://res.cloudinary.com/dkqlrnz6r/image/upload/v1732650082/master-bedroom-small_1.jpg"
                },
                large: {
                  url: "https://res.cloudinary.com/dkqlrnz6r/image/upload/v1732650082/master-bedroom-large_1.jpg"
                }
              }
            }
          }
        }
      }
    },
    {
      id: "7",
      attributes: {
        Title: "Fitness Center",
        category: "Amenities",
        image: {
          data: {
            attributes: {
              url: "https://res.cloudinary.com/dkqlrnz6r/image/upload/v1732650082/fitness-center_1.jpg",
              alternativeText: "Fitness Center",
              formats: {
                small: {
                  url: "https://res.cloudinary.com/dkqlrnz6r/image/upload/v1732650082/fitness-center-small_1.jpg"
                },
                large: {
                  url: "https://res.cloudinary.com/dkqlrnz6r/image/upload/v1732650082/fitness-center-large_1.jpg"
                }
              }
            }
          }
        }
      }
    },
    {
      id: "8",
      attributes: {
        Title: "Living Room",
        category: "Interior",
        image: {
          data: {
            attributes: {
              url: "https://res.cloudinary.com/dkqlrnz6r/image/upload/v1732650082/living-room_1.jpg",
              alternativeText: "Living Room",
              formats: {
                small: {
                  url: "https://res.cloudinary.com/dkqlrnz6r/image/upload/v1732650082/living-room-small_1.jpg"
                },
                large: {
                  url: "https://res.cloudinary.com/dkqlrnz6r/image/upload/v1732650082/living-room-large_1.jpg"
                }
              }
            }
          }
        }
      }
    }
  ]
};

export const mockFashionShowData = {
  fashionShow: {
    data: {
      attributes: {
        blocks: [
          {
            __typename: "ComponentComponentsImage",
            image: {
              data: {
                attributes: {
                  url: "/aboutEvent/bg.webp",
                  alternativeText: "Fashion Show Hero Image",
                },
              },
            },
          },
          {
            __typename: "ComponentLayoutServiceDetail",
            serviceTitle: {
              title: "Fashion Show",
              secondTitle: "Events",
            },
            serviceImage: {
              data: {
                attributes: {
                  url: "/show4.webp",
                  alternativeText: "Fashion Show Main Image",
                },
              },
            },
            serviceContent: [
              {
                children: [
                  {
                    text: "Welcome to Sara Events' Fashion Show Services, where we transform your vision into a spectacular runway experience. Our team of experienced event planners specializes in creating memorable fashion shows that showcase your designs in the most captivating way possible.",
                  },
                ],
              },
              {
                children: [
                  {
                    text: "From intimate boutique presentations to large-scale fashion weeks, we handle every aspect of your event with precision and creativity. Our comprehensive services include venue selection, runway design, lighting and sound setup, model coordination, and professional photography and videography.",
                  },
                ],
              },
            ],
            serviceDetail2: [
              {
                children: [
                  {
                    text: "Our fashion show timeline includes:",
                  },
                ],
              },
              {
                children: [
                  {
                    text: "• Pre-event planning and consultation\n• Venue setup and decoration\n• Model casting and coordination\n• Technical setup (lighting, sound, video)\n• Runway choreography\n• Event management and coordination\n• Post-event media coverage",
                  },
                ],
              },
            ],
            serviceGallery: {
              data: [
                {
                  attributes: {
                    url: "/show4.webp",
                    alternativeText: "Fashion Show Gallery Image 1",
                  },
                },
                {
                  attributes: {
                    url: "/show1.webp",
                    alternativeText: "Fashion Show Gallery Image 2",
                  },
                },
                {
                  attributes: {
                    url: "/show2.webp",
                    alternativeText: "Fashion Show Gallery Image 3",
                  },
                },
                {
                  attributes: {
                    url: "/show3.webp",
                    alternativeText: "Fashion Show Gallery Image 4",
                  },
                },
              ],
            },
          },
        ],
      },
    },
  },
};

export const mockEventServicesData = {
  charityEvents: {
    data: {
      attributes: {
        blocks: [
          {
            __typename: "ComponentComponentsImage",
            image: {
              data: {
                attributes: {
                  url: "/aboutEvent/large_3_W7_A9014_1_cb772560c0.jpg",
                  alternativeText: "Charity Event Hero Image",
                  
                },
              },
            },
          },
          {
            __typename: "ComponentLayoutServiceDetail",
            serviceTitle: {
              title: "Charity Events",
              secondTitle: "Making a Difference",
            },
            serviceImage: {
              data: {
                attributes: {
                  url: "/aboutEvent/large_3_W7_A9014_1_cb772560c0.jpg",
                  alternativeText: "Charity Event Main Image",
                },
              },
            },
            serviceContent: [
              {
                children: [
                  {
                    text: "At Sara Events, we believe in the power of giving back. Our charity event services are designed to help organizations create impactful fundraising events that make a real difference in the community. We handle every aspect of your charity event with care and attention to detail.",
                  },
                ],
              },
              {
                children: [
                  {
                    text: "From gala dinners to charity auctions, we create memorable experiences that inspire generosity and community engagement. Our comprehensive services include venue selection, catering coordination, entertainment booking, and professional event management.",
                  },
                ],
              },
            ],
            serviceDetail2: [
              {
                children: [
                  {
                    text: "Our charity event process includes:",
                  },
                ],
              },
              {
                children: [
                  {
                    text: "• Initial consultation and goal setting\n• Budget planning and fundraising strategy\n• Venue selection and decoration\n• Entertainment and program coordination\n• Donor management and recognition\n• Media coverage and promotion\n• Post-event impact assessment",
                  },
                ],
              },
            ],
            serviceGallery: {
              data: [
                {
                  attributes: {
                    url: "https://res.cloudinary.com/dkqlrnz6r/image/upload/v1732650082/charity-event-1_1.jpg",
                    alternativeText: "Charity Event Gallery Image 1",
                  },
                },
                {
                  attributes: {
                    url: "https://res.cloudinary.com/dkqlrnz6r/image/upload/v1732650082/charity-event-2_1.jpg",
                    alternativeText: "Charity Event Gallery Image 2",
                  },
                },
                {
                  attributes: {
                    url: "https://res.cloudinary.com/dkqlrnz6r/image/upload/v1732650082/charity-event-3_1.jpg",
                    alternativeText: "Charity Event Gallery Image 3",
                  },
                },
                {
                  attributes: {
                    url: "https://res.cloudinary.com/dkqlrnz6r/image/upload/v1732650082/charity-event-4_1.jpg",
                    alternativeText: "Charity Event Gallery Image 4",
                  },
                },
              ],
            },
            ServiceCard: [
              {
                title: "Charity Gala Night",
                description:
                  "A night of giving and celebration for a good cause.",
                image: {
                  data: {
                    attributes: {
                      url: "https://res.cloudinary.com/dkqlrnz6r/image/upload/v1732650082/charity-gala.jpg",
                      alternativeText: "Charity Gala Night",
                    },
                  },
                },
                href: "/event/services/charity-events",
                button: "Learn More",
              },
            ],
          },
        ],
      },
    },
  },
  corporateEvents: {
    data: {
      attributes: {
        blocks: [
          {
            __typename: "ComponentComponentsImage",
            image: {
              data: {
                attributes: {
                  url: "/aboutEvent/large_3_W7_A9014_1_cb772560c0.jpg",
                  alternativeText: "Corporate Event Hero Image",
                },
              },
            },
          },
          {
            __typename: "ComponentLayoutServiceDetail",
            serviceTitle: {
              title: "Corporate Events",
              secondTitle: "Professional Excellence",
            },
            serviceImage: {
              data: {
                attributes: {
                  url: "https://res.cloudinary.com/dkqlrnz6r/image/upload/v1732650082/corporate-event-main_1.jpg",
                  alternativeText: "Corporate Event Main Image",
                },
              },
            },
            serviceContent: [
              {
                children: [
                  {
                    text: "Sara Events specializes in creating impactful corporate events that strengthen your brand and engage your audience. From product launches to annual conferences, we deliver professional events that exceed expectations.",
                  },
                ],
              },
              {
                children: [
                  {
                    text: "Our corporate event services include comprehensive planning, venue selection, technical setup, catering coordination, and professional event management. We ensure every detail aligns with your brand identity and business objectives.",
                  },
                ],
              },
            ],
            serviceDetail2: [
              {
                children: [
                  {
                    text: "Our corporate event services include:",
                  },
                ],
              },
              {
                children: [
                  {
                    text: "• Conference and seminar planning\n• Product launches and exhibitions\n• Team building events\n• Corporate retreats\n• Annual meetings and award ceremonies\n• Trade shows and networking events\n• Virtual and hybrid event solutions",
                  },
                ],
              },
            ],
            serviceGallery: {
              data: [
                {
                  attributes: {
                    url: "https://res.cloudinary.com/dkqlrnz6r/image/upload/v1732650082/corporate-event-1_1.jpg",
                    alternativeText: "Corporate Event Gallery Image 1",
                  },
                },
                {
                  attributes: {
                    url: "https://res.cloudinary.com/dkqlrnz6r/image/upload/v1732650082/corporate-event-2_1.jpg",
                    alternativeText: "Corporate Event Gallery Image 2",
                  },
                },
                {
                  attributes: {
                    url: "https://res.cloudinary.com/dkqlrnz6r/image/upload/v1732650082/corporate-event-3_1.jpg",
                    alternativeText: "Corporate Event Gallery Image 3",
                  },
                },
                {
                  attributes: {
                    url: "https://res.cloudinary.com/dkqlrnz6r/image/upload/v1732650082/corporate-event-4_1.jpg",
                    alternativeText: "Corporate Event Gallery Image 4",
                  },
                },
              ],
            },
            ServiceCard: [
              {
                title: "Corporate Summit",
                description:
                  "Annual gathering of industry leaders and professionals.",
                image: {
                  data: {
                    attributes: {
                      url: "https://res.cloudinary.com/dkqlrnz6r/image/upload/v1732650082/corporate-summit.jpg",
                      alternativeText: "Corporate Summit",
                    },
                  },
                },
                href: "/event/services/corporate-event",
                button: "Learn More",
              },
            ],
          },
        ],
      },
    },
  },
  conferencesAndSeminars: {
    data: {
      attributes: {
        blocks: [
          {
            __typename: "ComponentComponentsImage",
            image: {
              data: {
                attributes: {
                  url: "/aboutEvent/large_3_W7_A9014_1_cb772560c0.jpg",
                  alternativeText: "Conference Hero Image",
                },
              },
            },
          },
          {
            __typename: "ComponentLayoutServiceDetail",
            serviceTitle: {
              title: "Conferences & Seminars",
              secondTitle: "Knowledge Sharing",
            },
            serviceImage: {
              data: {
                attributes: {
                  url: "https://res.cloudinary.com/dkqlrnz6r/image/upload/v1732650082/conference-main_1.jpg",
                  alternativeText: "Conference Main Image",
                },
              },
            },
            serviceContent: [
              {
                children: [
                  {
                    text: "Sara Events brings expertise in organizing impactful conferences and seminars that facilitate knowledge sharing and professional development. We create engaging environments that foster meaningful discussions and networking opportunities.",
                  },
                ],
              },
              {
                children: [
                  {
                    text: "Our comprehensive conference services include venue selection, technical setup, speaker coordination, registration management, and professional event production. We ensure seamless execution of both in-person and virtual events.",
                  },
                ],
              },
            ],
            serviceDetail2: [
              {
                children: [
                  {
                    text: "Our conference services include:",
                  },
                ],
              },
              {
                children: [
                  {
                    text: "• Academic conferences\n• Industry seminars\n• Professional development workshops\n• Panel discussions\n• Virtual conferences\n• Hybrid events\n• Post-event documentation",
                  },
                ],
              },
            ],
            serviceGallery: {
              data: [
                {
                  attributes: {
                    url: "https://res.cloudinary.com/dkqlrnz6r/image/upload/v1732650082/conference-1_1.jpg",
                    alternativeText: "Conference Gallery Image 1",
                  },
                },
                {
                  attributes: {
                    url: "https://res.cloudinary.com/dkqlrnz6r/image/upload/v1732650082/conference-2_1.jpg",
                    alternativeText: "Conference Gallery Image 2",
                  },
                },
                {
                  attributes: {
                    url: "https://res.cloudinary.com/dkqlrnz6r/image/upload/v1732650082/conference-3_1.jpg",
                    alternativeText: "Conference Gallery Image 3",
                  },
                },
                {
                  attributes: {
                    url: "https://res.cloudinary.com/dkqlrnz6r/image/upload/v1732650082/conference-4_1.jpg",
                    alternativeText: "Conference Gallery Image 4",
                  },
                },
              ],
            },
            ServiceCard: [
              {
                title: "Tech Conference",
                description: "Explore the latest in technology and innovation.",
                image: {
                  data: {
                    attributes: {
                      url: "https://res.cloudinary.com/dkqlrnz6r/image/upload/v1732650082/tech-conference.jpg",
                      alternativeText: "Tech Conference",
                    },
                  },
                },
                href: "/event/services/conferences-and-seminars",
                button: "Learn More",
              },
            ],
          },
        ],
      },
    },
  },
  grandOpening: {
    data: {
      attributes: {
        blocks: [
          {
            __typename: "ComponentComponentsImage",
            image: {
              data: {
                attributes: {
                  url: "/aboutEvent/large_3_W7_A9014_1_cb772560c0.jpg",
                  alternativeText: "Grand Opening Hero Image",
                },
              },
            },
          },
          {
            __typename: "ComponentLayoutServiceDetail",
            serviceTitle: {
              title: "Grand Opening",
              secondTitle: "Launch in Style",
            },
            serviceImage: {
              data: {
                attributes: {
                  url: "https://res.cloudinary.com/dkqlrnz6r/image/upload/v1732650082/grand-opening-main_1.jpg",
                  alternativeText: "Grand Opening Main Image",
                },
              },
            },
            serviceContent: [
              {
                children: [
                  {
                    text: "Make your grand opening a memorable celebration with Sara Events. We specialize in creating impactful launch events that generate buzz and establish your presence in the market. From ribbon-cutting ceremonies to exclusive launch parties, we handle every detail.",
                  },
                ],
              },
              {
                children: [
                  {
                    text: "Our grand opening services include venue preparation, guest management, media coordination, entertainment booking, and comprehensive event management. We ensure your launch event creates lasting impressions and generates valuable media coverage.",
                  },
                ],
              },
            ],
            serviceDetail2: [
              {
                children: [
                  {
                    text: "Our grand opening services include:",
                  },
                ],
              },
              {
                children: [
                  {
                    text: "• Venue preparation and decoration\n• Guest list management\n• Media and press coordination\n• Entertainment and performances\n• Catering and refreshments\n• Photography and videography\n• Post-event follow-up",
                  },
                ],
              },
            ],
            serviceGallery: {
              data: [
                {
                  attributes: {
                    url: "https://res.cloudinary.com/dkqlrnz6r/image/upload/v1732650082/grand-opening-1_1.jpg",
                    alternativeText: "Grand Opening Gallery Image 1",
                  },
                },
                {
                  attributes: {
                    url: "https://res.cloudinary.com/dkqlrnz6r/image/upload/v1732650082/grand-opening-2_1.jpg",
                    alternativeText: "Grand Opening Gallery Image 2",
                  },
                },
                {
                  attributes: {
                    url: "https://res.cloudinary.com/dkqlrnz6r/image/upload/v1732650082/grand-opening-3_1.jpg",
                    alternativeText: "Grand Opening Gallery Image 3",
                  },
                },
                {
                  attributes: {
                    url: "https://res.cloudinary.com/dkqlrnz6r/image/upload/v1732650082/grand-opening-4_1.jpg",
                    alternativeText: "Grand Opening Gallery Image 4",
                  },
                },
              ],
            },
            ServiceCard: [
              {
                title: "Grand Opening Ceremony",
                description:
                  "Celebrate the launch of your new business or location.",
                image: {
                  data: {
                    attributes: {
                      url: "https://res.cloudinary.com/dkqlrnz6r/image/upload/v1732650082/grand-opening.jpg",
                      alternativeText: "Grand Opening",
                    },
                  },
                },
                href: "/event/services/grand-opening",
                button: "Learn More",
              },
            ],
          },
        ],
      },
    },
  },
  productLaunch: {
    data: {
      attributes: {
        blocks: [
          {
            __typename: "ComponentComponentsImage",
            image: {
              data: {
                attributes: {
                  url: "/aboutEvent/large_3_W7_A9014_1_cb772560c0.jpg",
                  alternativeText: "Product Launch Hero Image",
                },
              },
            },
          },
          {
            __typename: "ComponentLayoutServiceDetail",
            serviceTitle: {
              title: "Product Launch",
              secondTitle: "Innovation Showcase",
            },
            serviceImage: {
              data: {
                attributes: {
                  url: "https://res.cloudinary.com/dkqlrnz6r/image/upload/v1732650082/product-launch-main_1.jpg",
                  alternativeText: "Product Launch Main Image",
                },
              },
            },
            serviceContent: [
              {
                children: [
                  {
                    text: "Launch your product with impact using Sara Events' comprehensive product launch services. We create immersive experiences that showcase your innovation and generate excitement among your target audience.",
                  },
                ],
              },
              {
                children: [
                  {
                    text: "Our product launch services include strategic planning, venue selection, technical setup, media coordination, and professional event management. We ensure your product gets the attention it deserves.",
                  },
                ],
              },
            ],
            serviceDetail2: [
              {
                children: [
                  {
                    text: "Our product launch services include:",
                  },
                ],
              },
              {
                children: [
                  {
                    text: "• Strategic launch planning\n• Venue selection and setup\n• Technical and AV support\n• Media and press coordination\n• Product demonstration setup\n• Guest management\n• Post-launch follow-up",
                  },
                ],
              },
            ],
            serviceGallery: {
              data: [
                {
                  attributes: {
                    url: "https://res.cloudinary.com/dkqlrnz6r/image/upload/v1732650082/product-launch-1_1.jpg",
                    alternativeText: "Product Launch Gallery Image 1",
                  },
                },
                {
                  attributes: {
                    url: "https://res.cloudinary.com/dkqlrnz6r/image/upload/v1732650082/product-launch-2_1.jpg",
                    alternativeText: "Product Launch Gallery Image 2",
                  },
                },
                {
                  attributes: {
                    url: "https://res.cloudinary.com/dkqlrnz6r/image/upload/v1732650082/product-launch-3_1.jpg",
                    alternativeText: "Product Launch Gallery Image 3",
                  },
                },
                {
                  attributes: {
                    url: "https://res.cloudinary.com/dkqlrnz6r/image/upload/v1732650082/product-launch-4_1.jpg",
                    alternativeText: "Product Launch Gallery Image 4",
                  },
                },
              ],
            },
            ServiceCard: [
              {
                title: "Product Launch Event",
                description: "Showcase your latest product to the world.",
                image: {
                  data: {
                    attributes: {
                      url: "https://res.cloudinary.com/dkqlrnz6r/image/upload/v1732650082/product-launch.jpg",
                      alternativeText: "Product Launch",
                    },
                  },
                },
                href: "/event/services/launching",
                button: "Learn More",
              },
            ],
          },
        ],
      },
    },
  },
};

export const EventService = {
  data: [
    {
      id: 1,
      title: "Corporate Events",
      description:
        "We specialize in planning and executing professional corporate events that align with your brand and business goals. From team-building retreats to formal galas, we ensure every detail reflects your company’s values.",
      image: {
        url: "/aboutEvent/large_3_W7_A9014_1_cb772560c0.jpg",
        alternativeText: "Charity Event Image",
      },
      href: "/event/services/charity-events",
    },
    {
      id: 2,
      title: "Conferences and Seminars",
      description:
        "Our team organizes seamless conferences and seminars tailored to engage your audience, with expert coordination of venues, technology, and schedules for a successful experience.",
      image: {
        url: "/charity.webp",
        alternativeText: "Corporate Event Image",
      },
      href: "/event/services/corporate-events",
    },
    {
      id: 3,
      title: "Product Launches",
      description:
        "Product Launches Make a lasting impression with our creative and impactful product launch events, designed to generate buzz and spotlight your brand’s latest innovation.",
      image: {
        url: "/speech.webp",
        alternativeText: "Conference Image",
      },
      href: "/event/services/conferences-and-seminars",
    },
    {
      id: 4,
      title: "Grand Openings",
      description:
        "Celebrate your milestone with a grand opening event that captivates and excites your audience, leaving a remarkable first impression of your brand or venue.",
      image: {
        url: "meeting4.webp",
        alternativeText: "Grand Opening Image",
      },
      href: "/event/services/grand-opening",
    },
    {
      id: 5,
      title: "Exhibitions ",
      description:
        "We bring your vision to life with professionally managed exhibitions, ensuring that your displays effectively engage visitors and highlight your offerings.",
      image: {
        url: "metting3.webp",
        alternativeText: "Product Launch Image",
      },
      href: "/event/services/product-launches",
    },
    {
      id: 5,
      title: "Fashion Shows",
      description:
        "Our expertise in organizing fashion shows ensures a stunning and memorable event that showcases your designs with flawless coordination and creative flair.",
      image: {
        url: "/aboutEvent/large_3_W7_A9014_1_cb772560c0.jpg",
        alternativeText: "Product Launch Image",
      },
      href: "/event/services/product-launches",
    },
    {
      id: 5,
      title: "Charity Events",
      description:
        "From fundraisers to awareness campaigns, we help you create meaningful charity events that inspire and connect with your community for a greater cause.",
      image: {
        url: "/picture.webp",
        alternativeText: "Product Launch Image",
      },
      href: "/event/services/product-launches",
    },
  ],
};

export const achievementSection = {
  title: "Our Achievements",
  description: "Proud to serve our clients and partners across Ethiopia.",
  cards: [
    { title: "200+", description: "Events Organized" },
    { title: "100+", description: "Corporate Clients" },
    { title: "10+", description: "Years Experience" },
  ],
};


export const upcomingEvents = [
    {
      id: 1,
      title: "Tech Conference 2024",
      date: "2024-12-15",
      location: "Addis Ababa, Ethiopia",
      description: "Join us for a day of insightful talks and networking.",
    },
    {
      id: 2,
      title: "Annual Business Expo",
      date: "2024-11-20",
      location: "Nairobi, Kenya",
      description: "Explore innovative business solutions and meet leaders.",
    },
  ];



export const tabs = [
  "All",
  "Charity",
  "ConferencesandSeminars",
  "GrandOpenings",
  "corporate",
];




export const allGalleries = [
  {
    id: 1,
    category: "Charity",
    title: "Charity",
    images: ["/picture.webp", "/charity.webp", "/memory.webp"],
  },
  {
    id: 2,
    category: "ConferencesandSeminars",
    title: "Conferences and Seminars",
    images: ["meeting2.webp", "/metting3.webp"],
  },

  {
    id: 3,
    category: "GrandOpenings",
    title: "Grand Openings",
    images: ["/speech.webp", "/speech4.jpg", "/meeting4.webp"],
  },

  {
    id: 4,
    category: "corporate",
    title: "Corporate Events",
    images: ["/meeting.webp", "award.webp", "/event.webp"],
  },
];

export const gallery = [
  {
    url: "/award.webp",
  },
  {
    url: "/charity.webp",
  },
  {
    url: "/event.webp",
  },
  {
    url: "/meeting.webp",
  },
  {
    url: "/meeting2.webp",
  },
  {
    url: "/meeting4.webp",
  },
  {
    url: "/memory.webp",
  },
  {
    url: "/metting3.webp",
  },
  {
    url: "/picture.webp",
  },
  {
    url: "/speech.webp",
  },
  {
    url: "/speech2.webp",
  },
  {
    url: "/speech4.jpg",
  },
];




export const mockHeaderData = {
  logo: {
    url: "/logo.png",
    alternativeText: "Company Logo"
  },
  menuItems: [
    { id: 1, label: "Home", href: "/" },
    { id: 2, label: "About", href: "/about" },
    { id: 3, label: "Services", href: "/services" },
    { id: 4, label: "Gallery", href: "/gallery" },
    { id: 5, label: "Contact", href: "/contact" }
  ]
};

export const mockFooterData = {
  logo: {
    url: "/logo.png",
    alternativeText: "Company Logo"
  },
  description: "We are a leading event management company dedicated to creating unforgettable experiences for our clients.",
  socialLinks: [
    { id: 1, url: "https://facebook.com", icon: "Facebook" },
    { id: 2, url: "https://twitter.com", icon: "Twitter" },
    { id: 3, url: "https://instagram.com", icon: "Instagram" },
    { id: 4, url: "https://linkedin.com", icon: "LinkedIn" }
  ],
  quickLinks: [
    { id: 1, label: "Home", href: "/" },
    { id: 2, label: "About", href: "/about" },
    { id: 3, label: "Services", href: "/services" },
    { id: 4, label: "Gallery", href: "/gallery" },
    { id: 5, label: "Contact", href: "/contact" }
  ],
  contactInfo: [
    { id: 1, icon: "📍", text: "123 Event Street, City, Country" },
    { id: 2, icon: "📞", text: "+1 234 567 890" },
    { id: 3, icon: "✉️", text: "info@company.com" }
  ],
  copyright: "© 2024 Company Name. All rights reserved."
};

export const mockPropertyHeaderData = {
  logo: {
    url: "/images/property-logo.png",
    alternativeText: "Property Logo"
  },
  menuItems: [
    { id: 1, label: "Home", href: "/property" },
    { id: 2, label: "About", href: "/property/about" },
    { id: 3, label: "Properties", href: "/property/properties" },
    { id: 4, label: "Gallery", href: "/property/gallery" },
    { id: 5, label: "Contact", href: "/property/contact" }
  ]
};

export const mockPropertyFooterData = {
  logo: {
    url: "/images/property-logo.png",
    alternativeText: "Property Logo"
  },
  description: "We are a premier property management company committed to providing exceptional real estate services.",
  socialLinks: [
    { id: 1, url: "https://facebook.com", icon: "Facebook" },
    { id: 2, url: "https://twitter.com", icon: "Twitter" },
    { id: 3, url: "https://instagram.com", icon: "Instagram" },
    { id: 4, url: "https://linkedin.com", icon: "LinkedIn" }
  ],
  quickLinks: [
    { id: 1, label: "Home", href: "/property" },
    { id: 2, label: "About", href: "/property/about" },
    { id: 3, label: "Properties", href: "/property/properties" },
    { id: 4, label: "Gallery", href: "/property/gallery" },
    { id: 5, label: "Contact", href: "/property/contact" }
  ],
  contactInfo: [
    { id: 1, icon: "📍", text: "456 Property Avenue, City, Country" },
    { id: 2, icon: "📞", text: "+1 234 567 891" },
    { id: 3, icon: "✉️", text: "property@company.com" }
  ],
  copyright: "© 2024 Property Company. All rights reserved."
};








export const HeroSlides = {
  slides: [
    {
      imageUrl: "/meeting2.webp",
      altText: "Event 2",
      title: "Transforming Ideas in to Event",
      description:
        "We turn bold ideas into unforgettable events — blending creativity, strategy, and flawless execution to bring your vision to life.",
    },

    {
      imageUrl: "/charity.webp",
      altText: "Event 1",
      title: "Conferences and Seminars",
      description:
        "Our team organizes seamless conferences and seminars tailored to engage your audience, with expert coordination of venues, technology, and schedules for a successful experience.",
    },

    {
      imageUrl: "/aboutEvent/large_3_W7_A9014_1_cb772560c0.jpg",
      altText: "Event 1",
      title: "Product Launches",
      description:
        " Make a lasting impression with our creative and impactful product launch events, designed to generate buzz and spotlight your brand’s latest innovation.",
    },
  ],
};





export const heroSlides = [
  {
    imageUrl: "/aboutEvent/large_3_W7_A9014_1_cb772560c0.jpg",
    altText: "Event 1",
    title: "Experience Unforgettable Moments",
    description: "We create and manage extraordinary events tailored for you.",
    url: "/events",
    button: "Explore Events",
  },
  {
    imageUrl: "/aboutEvent/large_3_W7_A9014_1_cb772560c0.jpg",
    altText: "Event 2",
    title: "Celebrate With Style",
    description: "Bringing your vision to life with creativity and precision.",
    url: "/services",
    button: "View Services",
  },
];





export const mockEventAboutData = {
  eventAboutPage: {
    data: {
      attributes: {
        blocks: [
          {
            __typename: "ComponentLayoutAboutInfo",
            aboutTitle: {
              title: "About Sara Events",
              secondTitle: "Our Story",
            },
            aboutImage: {
              data: {
                attributes: {
                  url: "/aboutEvent/large_3_W7_A9014_1_cb772560c0.jpg",
                  alternativeText: "About Us Image",
                },
              },
            },
            whoWeAre: "Who We Are",
            aboutDescription:
              "Sara Events and Marketing is a leading event management company dedicated to creating unforgettable experiences. Our team specializes in organizing charity events, corporate functions, conferences, grand openings, and product launches.",
            achievements: [
              { number: "200+", title: "Events Organized" },
              { number: "100+", title: "Corporate Clients" },
              { number: "10+", title: "Years Experience" },
            ],
            ourMission: "Our Mission",
            missionDescription:
              "To deliver exceptional event experiences that inspire, engage, and create lasting memories.",
            missionCards: [
              {
                image: {
                  data: {
                    attributes: {
                      url: "/aboutEvent/large_3_W7_A9014_1_cb772560c0.jpg",
                      alternativeText: "Mission 1",
                    },
                  },
                },
                title: "Creativity",
                description: "We bring creative ideas to life for every event.",
              },
              {
                image: {
                  data: {
                    attributes: {
                      url: "/aboutEvent/large_3_W7_A9014_1_cb772560c0.jpg",
                      alternativeText: "Mission 2",
                    },
                  },
                },
                title: "Professionalism",
                description: "Our team is dedicated to professional service.",
              },
              {
                image: {
                  data: {
                    attributes: {
                      url: "/aboutEvent/large_3_W7_A9014_1_cb772560c0.jpg",
                      alternativeText: "Mission 3",
                    },
                  },
                },
                title: "Impact",
                description:
                  "We strive to make a positive impact with every event.",
              },
            ],
          },
          {
            __typename: "ComponentLayoutTeamInfo",
            teamTitle: "Our Team",
            teamDescription:
              "Meet the passionate professionals behind Sara Events.",
            teamMembers: [
              {
                name: "Sara Ahmed",
                position: "Founder & CEO",
                description:
                  "Sara leads the team with a vision for excellence and a passion for events.",
                image: {
                  data: {
                    attributes: {
                      url: "https://res.cloudinary.com/dkqlrnz6r/image/upload/v1732650082/team1.jpg",
                      alternativeText: "Sara Ahmed",
                    },
                  },
                },
              },
              {
                name: "Mulugeta Bekele",
                position: "Event Manager",
                description:
                  "Mulugeta ensures every event runs smoothly and exceeds expectations.",
                image: {
                  data: {
                    attributes: {
                      url: "https://res.cloudinary.com/dkqlrnz6r/image/upload/v1732650082/team2.jpg",
                      alternativeText: "Mulugeta Bekele",
                    },
                  },
                },
              },
              {
                name: "Hanna Tesfaye",
                position: "Creative Director",
                description:
                  "Hanna brings creative flair and innovation to every project.",
                image: {
                  data: {
                    attributes: {
                      url: "https://res.cloudinary.com/dkqlrnz6r/image/upload/v1732650082/team3.jpg",
                      alternativeText: "Hanna Tesfaye",
                    },
                  },
                },
              },
            ],
          },
          {
            __typename: "ComponentLayoutPartnersInfo",
            partnersTitle: "Our Partners",
            partnersDescription:
              "We are proud to collaborate with leading organizations and brands.",
            partners: [
              {
                name: "UNICEF",
                logo: {
                  data: {
                    attributes: {
                      url: "https://res.cloudinary.com/dkqlrnz6r/image/upload/v1732650082/unicef-logo.jpg",
                      alternativeText: "UNICEF Logo",
                    },
                  },
                },
              },
              {
                name: "World Bank",
                logo: {
                  data: {
                    attributes: {
                      url: "https://res.cloudinary.com/dkqlrnz6r/image/upload/v1732650082/worldbank-logo.jpg",
                      alternativeText: "World Bank Logo",
                    },
                  },
                },
              },
            ],
          },
        ],
      },
    },
  },
};

// --- Event Gallery Page Mock Data ---
export const mockEventGalleryData = {
  data: [
    {
      id: "1",
      attributes: {
        category: "Charity",
        Title: "Charity Gala Night",
        image: {
          data: {
            attributes: {
              url: "https://res.cloudinary.com/dkqlrnz6r/image/upload/v1732650082/gallery1.jpg",
              alternativeText: "Charity Gala Night"
            }
          }
        }
      }
    },
    {
      id: "2",
      attributes: {
        category: "Corporate",
        Title: "Corporate Summit 2023",
        image: {
          data: {
            attributes: {
              url: "https://res.cloudinary.com/dkqlrnz6r/image/upload/v1732650082/gallery2.jpg",
              alternativeText: "Corporate Summit 2023"
            }
          }
        }
      }
    },
    {
      id: "3",
      attributes: {
        category: "Product Launch",
        Title: "New Product Launch",
        image: {
          data: {
            attributes: {
              url: "https://res.cloudinary.com/dkqlrnz6r/image/upload/v1732650082/gallery3.jpg",
              alternativeText: "New Product Launch"
            }
          }
        }
      }
    }
  ]
};

// --- Event Contact Page Mock Data ---
export const mockEventContactData = {
  eventContactPage: {
    data: {
      attributes: {
        blocks: [
          {
            __typename: "ComponentLayoutContactInfo",
            contactTitle: {
              title: "Contact Us",
              secondTitle: "Get in Touch"
            },
            getInTouch: "Get in Touch",
            contactDescription: "We'd love to hear from you! Reach out to us for event inquiries, partnerships, or general questions.",
            contactCard: [
              {
                title: "Email",
                description: "info@saraevents.com",
                button: "Send Email",
                image: {
                  data: {
                    attributes: {
                      url: "https://res.cloudinary.com/dkqlrnz6r/image/upload/v1732650082/email-icon.jpg",
                      alternativeText: "Email Icon"
                    }
                  }
                }
              },
              {
                title: "Phone",
                description: "+251 912 345 678",
                button: "Call Now",
                image: {
                  data: {
                    attributes: {
                      url: "https://res.cloudinary.com/dkqlrnz6r/image/upload/v1732650082/phone-icon.jpg",
                      alternativeText: "Phone Icon"
                    }
                  }
                }
              }
            ]
          }
        ]
      }
    }
  }
}; 
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
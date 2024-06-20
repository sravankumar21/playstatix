import React from 'react';
import { Carousel, Card } from 'react-bootstrap';

const SafetyTipsCarousel = () => {
  const carouselStyle = {
    minHeight: '500px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '50px 0',
    opacity: 1,
  };

  const indicatorStyle = {
    color: 'black', // Set the color of the carousel indicators
  };

  const cardStyle = {
    background: 'black',
    borderRadius: '15px',
    padding: '20px',
    margin: '20px',
    width: '1000px',
    textAlign: 'center',
    color: 'white'
  };

  const safetyTips = [
    {
      title: "Set Parental Controls",
      description: "Enable parental controls to regulate how your child interacts with other players and set limits on playtime.",
    },
    {
      title: "Take Screen Breaks",
      description: "Encourage regular screen breaks to prevent eye strain and promote overall well-being.",
    },
    {
      title: "Check Game Content",
      description: "Verify the age rating and content of games to ensure they are suitable for your child.",
    },
    {
      title: "Use Shared Gaming Space",
      description: "Consider having gaming sessions in a shared family space to monitor activity.",
    },
    {
      title: "Choose Safe Usernames",
      description: "Ensure your child selects usernames that do not reveal personal information.",
    },
    {
      title: "Download Authorized Versions",
      description: "Educate your child about downloading games from legitimate sources to avoid malware.",
    },
    {
      title: "Report Bad Behavior",
      description: "Teach your child how to report or block inappropriate behavior from other players.",
    },
    {
      title: "Review Terms and Conditions",
      description: "Familiarize yourself with game terms and conditions to understand policies on unacceptable content and hidden charges.",
    },
    {
      title: "Communicate Openly",
      description: "Have open discussions with your child about online safety and appropriate behavior while gaming.",
    },
    {
      title: "Participate in Gaming",
      description: "Occasionally join your child in online gaming to understand their experiences and connections.",
    },
    {
      title: "Update Anti-virus Software",
      description: "Keep anti-virus software updated to protect against malware and viruses in real-time.",
    },
  ];

  return (
    <div className="container-fluid py-5">
      <h3 style={{ color: 'black', textAlign: 'center' }}>Online gaming: How to keep kids safe</h3>
      <div style={carouselStyle}>
      <Carousel indicatorsStyle={indicatorStyle}>

          {safetyTips.map((tip, index) => (
            <Carousel.Item key={index}>
              <Card style={cardStyle}>
                <Card.Body>
                  <Card.Title>{tip.title}</Card.Title>
                  <Card.Text>{tip.description}</Card.Text>
                </Card.Body>
              </Card>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default SafetyTipsCarousel;

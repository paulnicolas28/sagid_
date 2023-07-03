import React, {useEffect} from 'react';
import { Container, Grid, Card, CardContent, Typography, Button } from '@mui/material';
import { styled } from '@mui/system';
import { useNavigate } from 'react-router-dom';


const StyledContainer = styled(Container)({
    marginTop: '2rem',
    width: '90%', // Set container width to 90% of the page
    display: 'flex',
    justifyContent: 'center',
  });
  
  const StyledCard = styled(Card)({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '25%',
    marginBottom: '2rem', // Add some bottom margin between cards
  });
  
  const StyledCardContent = styled(CardContent)({
    textAlign: 'center',
  });
  
  const StyledButton = styled(Button)({
    marginTop: '1rem',
  });



const ChoixPlan = () => {
    
  const plans = [
    {
      title: 'Plan de fauchage A',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean luctus tellus sit amet felis posuere sollicitudin.',
      price: '$49.99',
    },
    {
      title: 'Plan de fauchage B',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean luctus tellus sit amet felis posuere sollicitudin.',
      price: '$69.99',
    },
    {
      title: 'Plan de fauchage C',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean luctus tellus sit amet felis posuere sollicitudin.',
      price: '$89.99',
    },
    {
      title: 'Plan de fauchage D',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean luctus tellus sit amet felis posuere sollicitudin.',
      price: '$109.99',
    }
  ];

  const navigate = useNavigate();

const redirectToDashboard = () => {
  navigate("/"); // Replace '/other-page' with the desired URL or path
};

    

  return (
    <StyledContainer>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          {plans.map((plan, index) => (
            <StyledCard key={index}>
              <StyledCardContent>
                <Typography variant="h6" component="h2">
                  {plan.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {plan.description}
                </Typography>
                <Typography variant="h5" component="h3">
                  {plan.price}
                </Typography>
                <StyledButton variant="contained" color="primary" onClick={redirectToDashboard}>
                  Sélectionner
                </StyledButton>
              </StyledCardContent>
            </StyledCard>
          ))}
        </Grid>
      </Grid>
    </StyledContainer>
  );
}

export default ChoixPlan;
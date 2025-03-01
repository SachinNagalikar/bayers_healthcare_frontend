import React, { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { TextField, Button, Checkbox, FormControlLabel, MenuItem, Container, Typography, Grid2, Paper } from '@mui/material';

const SignUp = () => {
  const { register, handleSubmit, formState: { errors }, watch } = useForm();
  const role = watch("role");
  const consentChecked = watch("consent");

  const onSubmit = useCallback(async (data) => {
    if (!data.consent) {
      alert('You must agree to the data usage policy.');
      return;
    }
    try {
      await axios.post('http://localhost:5000/auth/register', data);
      console.log('User registered:', data);
    } catch (error) {
      console.error('Error registering user:', error);
    }
  }, []);

  return (
    <Container maxWidth="sm">
      <Paper elevation={3} style={{ padding: 20, marginTop: 20 }}>
        <Typography variant="h4" gutterBottom>Register</Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid2 container spacing={2}>
            {[
              { name: "username", label: "Username", type: "text", required: true },
              { name: "email", label: "Email", type: "text", required: true },
              { name: "password", label: "Password", type: "password", required: true },
              { name: "phone", label: "Phone", type: "text" },
              { name: "date_of_birth", label: "Date of Birth", type: "date" },
              { name: "address.street", label: "Street Address", type: "text" },
              { name: "address.city", label: "City", type: "text" },
              { name: "address.state", label: "State", type: "text" },
              { name: "address.zip", label: "ZIP Code", type: "text" },
              { name: "address.country", label: "Country", type: "text" }
            ].map(({ name, label, type, required }) => (
              <Grid2 item xs={12} key={name}>
                <TextField fullWidth label={label} type={type} {...register(name, required ? { required: `${label} is required` } : {})} error={!!errors[name]} helperText={errors[name]?.message} InputLabelProps={type === "date" ? { shrink: true } : {}} />
              </Grid2>
            ))}
            <Grid2 item xs={12}>
              <TextField select fullWidth label="Role" {...register("role", { required: "Role is required" })} error={!!errors.role} helperText={errors.role?.message}>
                <MenuItem value="patient">Patient</MenuItem>
                <MenuItem value="provider">Provider</MenuItem>
              </TextField>
            </Grid2>
            {role === "patient" && (
              <>
                <Grid2 item xs={12}>
                  <TextField fullWidth label="Medical History" {...register("role_specific_data.patient.medical_history")} />
                </Grid2>
                <Grid2 item xs={12}>
                  <TextField fullWidth label="Allergies" {...register("role_specific_data.patient.allergies")} />
                </Grid2>
                <Grid2 item xs={12}>
                  <TextField fullWidth label="Medications" {...register("role_specific_data.patient.medications")} />
                </Grid2>
                <Grid2 item xs={12}>
                  <TextField fullWidth label="Emergency Contact Name" {...register("role_specific_data.patient.emergency_contact.name")} />
                </Grid2>
                <Grid2 item xs={12}>
                  <TextField fullWidth label="Emergency Contact Relationship" {...register("role_specific_data.patient.emergency_contact.relationship")} />
                </Grid2>
                <Grid2 item xs={12}>
                  <TextField fullWidth label="Emergency Contact Phone" {...register("role_specific_data.patient.emergency_contact.phone")} />
                </Grid2>
              </>
            )}
            {role === "provider" && (
              <>
                <Grid2 item xs={12}>
                  <TextField fullWidth label="Specialization" {...register("role_specific_data.provider.specialization")} />
                </Grid2>
                <Grid2 item xs={12}>
                  <TextField fullWidth label="Hospital Affiliation" {...register("role_specific_data.provider.hospital_affiliation")} />
                </Grid2>
                <Grid2 item xs={12}>
                  <TextField fullWidth label="License Number" {...register("role_specific_data.provider.license_number")} />
                </Grid2>
                <Grid2 item xs={12}>
                  <TextField fullWidth label="Years of Experience" type="number" {...register("role_specific_data.provider.years_of_experience")} />
                </Grid2>
                <Grid2 item xs={12}>
                  <TextField fullWidth label="Available Days" {...register("role_specific_data.provider.availability.days_of_week")} />
                </Grid2>
                <Grid2 item xs={6}>
                  <TextField fullWidth label="Start Time" type="time" {...register("role_specific_data.provider.availability.working_hours.start")} InputLabelProps={{ shrink: true }} />
                </Grid2>
                <Grid2 item xs={6}>
                  <TextField fullWidth label="End Time" type="time" {...register("role_specific_data.provider.availability.working_hours.end")} InputLabelProps={{ shrink: true }} />
                </Grid2>
              </>
            )}
            <Grid2 item xs={12}>
              <FormControlLabel control={<Checkbox {...register("consent", { required: "You must agree to the data policy" })} />} label="I agree to the data usage policy." />
              {errors.consent && <Typography color="error">{errors.consent.message}</Typography>}
            </Grid2>
            <Grid2 item xs={12}>
              <Button type="submit" variant="contained" color="primary" fullWidth disabled={!consentChecked}>Register</Button>
            </Grid2>
          </Grid2>
        </form>
      </Paper>
    </Container>
  );
};

export default SignUp;

import React, { useState, useEffect } from 'react';
import { Box, Modal, TextField, Button } from '@mui/material';
import { enviadorAuth } from '../../functions/usePostAuth';
import { API_URLS } from '../../modulos/urls';

const AddReviewModal = ({ isOpen, onClose, citaId ,barberiaId,barbero }) => {
  const [formData, setFormData] = useState({
    title: '',
    body: '',
    rating: '',
    citaId: '',
    barberiaId: '',
    barbero:""
  });

  useEffect(() => {
    if (citaId !== null && barberiaId !== null) {
      setFormData(prevState => ({
        ...prevState,
        citaId,
        barberiaId,
        barbero
      }));
    }
  }, [citaId,barberiaId]); // Este efecto se ejecutará cada vez que citaId cambie

  const commonInputStyles = {
    '& label.Mui-focused': {
      color: '#574EB8',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#574EB8',
    },
    '& .MuiOutlinedInput-root': {
      '&.Mui-focused fieldset': {
        borderColor: '#574EB8',
      },
    },
    '&:hover .MuiOutlinedInput-root': {
      borderColor: '#3B3561',
    },
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    enviadorAuth(API_URLS.resenas, formData);
    setFormData({ title: '', body: '', rating: '', citaId: '', barberiaId :"" ,barbero:""}); // Reiniciamos formData
    onClose(); // Cerrar el modal después de enviar el formulario
  };

  return (
    <Modal open={isOpen} onClose={onClose}>
      <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', bgcolor: 'background.paper', boxShadow: 24, p: 4, minWidth: 400 }}>
        <h2>Agregar Nueva Reseña</h2>
        <form onSubmit={handleSubmit}>
          <TextField
            required
            fullWidth
            margin="normal"
            label="Título"
            name="title"
            value={formData.title}
            onChange={handleChange}
            sx={commonInputStyles}
          />
          <TextField
            required
            fullWidth
            margin="normal"
            label="Reseña"
            name="body"
            multiline
            rows={4}
            value={formData.body}
            onChange={handleChange}
            sx={commonInputStyles}
          />
          <TextField
            required
            fullWidth
            margin="normal"
            label="Calificación"
            name="rating"
            type="number"
            value={formData.rating}
            onChange={handleChange}
            sx={commonInputStyles}
          />
          <TextField
            fullWidth
            margin="normal"
            label="ID de la Cita"
            name="citaId"
            type="text"
            value={formData.citaId}
            onChange={handleChange}
            hidden
          /> 

          <TextField
            fullWidth
            margin="normal"
            label="ID de la barberia"
            name="barberiaId"
            type="text"
            value={formData.barberiaId}
            onChange={handleChange}
            hidden
          /> 
          <TextField
            fullWidth
            margin="normal"
            label="userbarber"
            name="barbero"
            type="text"
            value={formData.barbero}
            onChange={handleChange}
            hidden
          /> 
          <Button type="submit" variant="contained" color="primary" sx={{ backgroundColor: '#574EB8', '&:hover': { backgroundColor: '#3B3561' }}}>
            Enviar Reseña
          </Button>
        </form>
      </Box>
    </Modal>
  );
};

export default AddReviewModal;

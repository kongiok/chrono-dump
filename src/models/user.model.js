import PropTypes from 'prop-types';
import { supabase } from '../assets/utils';

export const upsertUser = async ({ id, name, email, password, phone, role }) => {
  const givenPhone = phone || null;
  const givenRole = role || 'user';
  const { data, error } = await supabase.from('users').upsert({
    id: id,
    name: name,
    email: email,
    password: password,
    phone: givenPhone,
    role: givenRole,
  }).select();
  return { data, error };
}

export const getUserByEmail = async (email) => {
  const { data, error } = await supabase.from('users').select().eq('email', email);
  return { data, error };
}

upsertUser.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  phone: PropTypes.string,
  role: PropTypes.string,
};

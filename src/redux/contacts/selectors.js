// export const getContactsList = state => state.contacts.contacts.items;
// export const getFilter = state => state.contacts.filter;
export const getContacts = state => {
  return {
    items: state.contacts.items,
    isLoading: state.contacts.isLoading,
    error: state.contacts.error,
  };
};
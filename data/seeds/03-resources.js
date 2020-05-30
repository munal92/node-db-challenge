
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').insert([
    {resource_name: 'VS CODE ',resource_desc:'Compiler '},
    {resource_name: 'ADJUSTABLE TABLE',resource_desc:'necessary for back health'},
    {resource_name: 'Laptop',resource_desc:null },
    {resource_name: 'Node Modules',resource_desc:'use npm and install the necessary libraries'},
   
   
  ]);
};

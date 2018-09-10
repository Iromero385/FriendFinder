// ===============================================================================
// DATA
// Below data will hold all of the reserved tables.
// Initially we just set it equal to a "dummy" customer.
// But you could have it be an empty array as well.
// ===============================================================================

var contacts = [
    {
        name:"Ahmed",
        photo:"http://www.gstatic.com/tv/thumb/persons/314/314_v9_bc.jpg",
        scores:[
            5,
            1,
            4,
            4,
            5,
            1,
            2,
            5,
            4,
            1
          ]
      },
    {
        "name":"Brad",
        "photo":"https://images.complex.com/complex/images/c_limit,w_680/fl_lossy,pg_1,q_auto/x5s3si7tzsgvheir8rke/brad-pitt-home-lawsuit",
        "scores":[
            5,
            4,
            4,
            4,
            5,
            3,
            5,
            5,
            4,
            4
          ]
      },
    {
        "name":"Isaac",
        "photo":"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
        "scores":[
            5,
            4,
            4,
            5,
            5,
            5,
            5,
            4,
            4,
            5
          ]
      }
    
  ];
  
  // Note how we export the array. This makes it accessible to other files using require.
  module.exports = contacts;
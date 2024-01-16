const axios = require("axios");

const getFromIPFS = async (hash) => {
  const { PINATA_GATEWAY_URL, PINATA_GATEWAY_TOKEN } =
    process.env;

    const CID = 'QmR4xFdh1JhRmxR8wUZbXcU393RkdZDXxfjRoiaVzDBQxu'

  try {
    const res = await axios.get(
      `${PINATA_GATEWAY_URL}/ipfs/${CID}?pinataGatewayToken=${PINATA_GATEWAY_TOKEN}`
    );
    console.log(res.data);
  } catch (error) {
    console.log(error);
  }
};

getFromIPFS();

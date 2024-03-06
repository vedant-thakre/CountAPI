import Count from "./countModel.js";

export const createNewCounter = async (req, res) => {
  try {
    const { id, value } = req.query;

    if (!value || isNaN(value)) {
      return res.status(400).json({
        status: false,
        message: "Invalid value provided",
      });
    }

    const newUser = await Count.findOneAndUpdate(
      { webID: id },
      { webID: id, value },
      { new: true, upsert: true }
    );

    res.status(201).json({
      status: true,
      message: "Counter created successfully",
      data: newUser,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      status: false,
      message: "Internal Server Error",
    });
  }
};



export const increaseCount = async (req, res) => {
  try {
    const { id, value: increaseValue } = req.query;

    // Find the counter by webID
    const counter = await Count.findOne({ webID: id });

    if (!counter) {
      return res.status(400).json({
        status: false,
        message: "Web Id does not exist",
      });
    }

    // Increase the count by the specified value
    const updatedCount = counter.value + parseInt(increaseValue, 10);

    // Update the count in the database
    await Count.findOneAndUpdate(
      { webID: id },
      { value: updatedCount },
      { new: true } // This option returns the updated document
    );

    res.status(200).json({
      status: true,
      message: "Count increased successfully",
      updatedCount,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      status: false,
      message: "Internal Server Error",
    });
  }
};

export const resetCounter = async (req, res) => {
  try {
    const { id } = req.query;

    const counter = await Count.findOne({ webID: id });

    if (!counter) {
      return res.status(400).json({
        status: false,
        message: "Web Id does not exist",
      });
    }

    // Reset the counter value to 0
    await Count.findOneAndUpdate({ webID: id }, { value: 0 }, { new: true });

    res.status(200).json({
      status: true,
      message: "Counter reset successfully",
      updatedCount: 0,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      status: false,
      message: "Internal Server Error",
    });
  }
};

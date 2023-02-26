import { supabase } from "../../components/supabase/supabase";

export default async function InstamojoWebhook(req, res) {
  if (req.body) {
    const reqBody = req.body;

    const updateDatabasePayment = async (id, status) => {
      const oId = id.split("-");

      const { error } = await supabase
        .from("order_history")
        .update({ payment_status: status })
        .eq("id", oId);

      if (!error) {
        return true;
      } else {
        return false;
      }
    };
    const d = await updateDatabasePayment(reqBody.purpose, reqBody.status);
    return res.json({ status: true, response: d });
  } else {
    return res.json({
      status: false,
    });
  }
}

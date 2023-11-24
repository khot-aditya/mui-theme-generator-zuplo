import { ZuploContext, ZuploRequest } from "@zuplo/runtime";
import { environment } from "@zuplo/runtime";
import { createClient } from "@supabase/supabase-js"

const sb = () => {
  const supabaseUrl = 'https://vvwurcluclmfbskwmkqy.supabase.co';
  const supabaseAnonKey = environment.SUPABASE_SERVICE_KEY
  const supabase = createClient(supabaseUrl, supabaseAnonKey);
  return supabase;
}


export async function getAllThemes(request: ZuploRequest, context: ZuploContext) {

  const supabase = sb();

  const { data: countries, error } = await supabase
    .from('countries')
    .select('*')

  if (error) {
    throw new Error("error")
  }

  return countries

}

// export async function setCountries(request: ZuploRequest, context: ZuploContext) {

//   const supabase = sb();
//   const payload = await request.json();

//   const { data, error } = await supabase
//     .from('countries')
//     .insert(payload)
//     .select()


//   if (error) {
//     context.log.error(error)
//     throw new Error("error")
//   }

//   return new Response("Saved Successfully", { status: 201 })

// }
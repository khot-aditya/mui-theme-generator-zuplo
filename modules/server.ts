import { ZuploContext, ZuploRequest } from "@zuplo/runtime";
import { environment } from "@zuplo/runtime";
import { createClient } from "@supabase/supabase-js"

const sb = () => {
  const supabaseUrl = 'https://rbbiufqawlwcslpdmmnz.supabase.co';
  const supabaseAnonKey = environment.SUPABASE_SERVICE_KEY!
  const supabase = createClient(supabaseUrl, supabaseAnonKey);
  return supabase;
}

export async function getAllThemes(request: ZuploRequest, context: ZuploContext) {

  const supabase = sb();

  const { data: themes, error: themesError, count: totalRecords, status } = await supabase
    .from('themes')
    .select('name', { count: 'planned', head: false })

  if (themesError) {
    return {
      status,
      message: themesError.message
    }
  }

  return {
    status,
    message: "Success",
    data: themes,
    totalRecords
  }

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
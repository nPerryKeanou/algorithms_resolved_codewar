/**
 * KATA : Extract the domain name from a URL
 * NIVEAU : 5 kyu
 * LIEN :https://www.codewars.com/kata/514a024011ea4fb54200004b/train/javascript
 * AUTEUR :  xianpants
 * DESCRIPTION :
 *  Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:
 * url = "http://github.com/carbonfive/raygun" -> domain name = "github"
 * url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
 * url = "https://www.cnet.com"                -> domain name = cnet"
 * 
 */

// --- MY SOLUTION ---
function domainName(url: string): string{
  let cleanBegin: string = url.replace("http://", "")
                      .replace("https://", "")
                      .replace("http://www.", "")
                      .replace("https://www", "")
                      .replace("www.", "");

    let cleanSplit: string[] = cleanBegin.split(".");

    return cleanSplit[0];

}

// --- TEST ---
// Tests avec protocoles classiques
console.log(domainName("http://google.com") === "google");          // true
console.log(domainName("https://google.com") === "google");         // true
// Tests avec le fameux "www."
console.log(domainName("http://www.google.com") === "google");      // true
console.log(domainName("https://www.google.com") === "google");     // true
console.log(domainName("www.google.com") === "google");             // true
// Tests avec des sous-domaines ou extensions complexes (le split[0] doit gérer ça)
console.log(domainName("http://google.co.jp") === "google");        // true
console.log(domainName("www.xakep.ru") === "xakep");                // true
console.log(domainName("https://my-subdomain.google.com") === "my-subdomain"); // true
// Tests avec des tirets (valides dans les noms de domaine)
console.log(domainName("http://zombie-bites.com") === "zombie-bites"); // true
console.log(domainName("https://www.iron-maiden.com") === "iron-maiden"); // true
// Tests avec des dossiers après le domaine (le split[0] doit ignorer ce qu'il y a après le /)
// Attention : si ton code actuel ne gère pas le "/", ce test pourrait échouer !
console.log(domainName("http://github.com/carbonfive/raygun") === "github"); // true
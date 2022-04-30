

class GooglePage {
    get google_cookies() { return $(`[id="L2AGLb"]`) }
    get google_url() { return 'https://www.google.com/' }
    get google_search_input() { return $(`[name="q"]`) }
    get search_wdio() { return $(`[class="LC20lb MBeuO DKV0Md"]`) }
    get search_result_first_option() { return $(`[data-hveid="CBIQAA"]`) }
}

module.exports = new GooglePage
(function() {var implementors = {};
implementors['language_tags'] = ["impl <a class='trait' href='https://doc.rust-lang.org/nightly/std/error/trait.Error.html' title='std::error::Error'>ErrorTrait</a> for <a class='enum' href='language_tags/enum.Error.html' title='language_tags::Error'>Error</a>",];implementors['log'] = ["impl <a class='trait' href='https://doc.rust-lang.org/nightly/std/error/trait.Error.html' title='std::error::Error'>Error</a> for <a class='struct' href='log/struct.SetLoggerError.html' title='log::SetLoggerError'>SetLoggerError</a>",];implementors['time'] = ["impl <a class='trait' href='https://doc.rust-lang.org/nightly/std/error/trait.Error.html' title='std::error::Error'>Error</a> for <a class='enum' href='time/enum.ParseError.html' title='time::ParseError'>ParseError</a>",];implementors['solicit'] = ["impl <a class='trait' href='https://doc.rust-lang.org/nightly/std/error/trait.Error.html' title='std::error::Error'>Error</a> for <a class='struct' href='solicit/http/client/struct.CleartextConnectError.html' title='solicit::http::client::CleartextConnectError'>CleartextConnectError</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/std/error/trait.Error.html' title='std::error::Error'>Error</a> for <a class='enum' href='solicit/http/enum.HttpError.html' title='solicit::http::HttpError'>HttpError</a>",];implementors['openssl'] = ["impl <a class='trait' href='https://doc.rust-lang.org/nightly/std/error/trait.Error.html' title='std::error::Error'>Error</a> for <a class='enum' href='openssl/ssl/error/enum.SslError.html' title='openssl::ssl::error::SslError'>SslError</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/std/error/trait.Error.html' title='std::error::Error'>Error</a> for <a class='enum' href='openssl/ssl/error/enum.NonblockingSslError.html' title='openssl::ssl::error::NonblockingSslError'>NonblockingSslError</a>",];implementors['rustc_serialize'] = ["impl <a class='trait' href='https://doc.rust-lang.org/nightly/std/error/trait.Error.html' title='std::error::Error'>Error</a> for <a class='enum' href='rustc_serialize/base64/enum.FromBase64Error.html' title='rustc_serialize::base64::FromBase64Error'>FromBase64Error</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/std/error/trait.Error.html' title='std::error::Error'>Error</a> for <a class='enum' href='rustc_serialize/hex/enum.FromHexError.html' title='rustc_serialize::hex::FromHexError'>FromHexError</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/std/error/trait.Error.html' title='std::error::Error'>StdError</a> for <a class='enum' href='rustc_serialize/json/enum.DecoderError.html' title='rustc_serialize::json::DecoderError'>DecoderError</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/std/error/trait.Error.html' title='std::error::Error'>StdError</a> for <a class='enum' href='rustc_serialize/json/enum.ParserError.html' title='rustc_serialize::json::ParserError'>ParserError</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/std/error/trait.Error.html' title='std::error::Error'>StdError</a> for <a class='enum' href='rustc_serialize/json/enum.EncoderError.html' title='rustc_serialize::json::EncoderError'>EncoderError</a>",];implementors['uuid'] = ["impl <a class='trait' href='https://doc.rust-lang.org/nightly/std/error/trait.Error.html' title='std::error::Error'>Error</a> for <a class='enum' href='uuid/enum.ParseError.html' title='uuid::ParseError'>ParseError</a>",];implementors['url'] = ["impl <a class='trait' href='https://doc.rust-lang.org/nightly/std/error/trait.Error.html' title='std::error::Error'>Error</a> for <a class='enum' href='url/enum.ParseError.html' title='url::ParseError'>ParseError</a>",];implementors['url'] = ["impl <a class='trait' href='https://doc.rust-lang.org/nightly/std/error/trait.Error.html' title='std::error::Error'>Error</a> for <a class='enum' href='url/enum.ParseError.html' title='url::ParseError'>ParseError</a>",];implementors['num'] = ["impl <a class='trait' href='https://doc.rust-lang.org/nightly/std/error/trait.Error.html' title='std::error::Error'>Error</a> for <a class='enum' href='num/bigint/enum.ParseBigIntError.html' title='num::bigint::ParseBigIntError'>ParseBigIntError</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/std/error/trait.Error.html' title='std::error::Error'>Error</a> for <a class='struct' href='num/rational/struct.ParseRatioError.html' title='num::rational::ParseRatioError'>ParseRatioError</a>",];implementors['hyper'] = ["impl <a class='trait' href='https://doc.rust-lang.org/nightly/std/error/trait.Error.html' title='std::error::Error'>Error</a> for <a class='enum' href='url/parser/enum.ParseError.html' title='url::parser::ParseError'>ParseError</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/std/error/trait.Error.html' title='std::error::Error'>Error</a> for <a class='enum' href='language_tags/enum.Error.html' title='language_tags::Error'>Error</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/std/error/trait.Error.html' title='std::error::Error'>StdError</a> for <a class='enum' href='hyper/error/enum.Error.html' title='hyper::error::Error'>Error</a>",];implementors['iron'] = ["impl <a class='trait' href='https://doc.rust-lang.org/nightly/std/error/trait.Error.html' title='std::error::Error'>Error</a> for <a class='enum' href='iron/error/enum.HttpError.html' title='iron::error::HttpError'>Error</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/std/error/trait.Error.html' title='std::error::Error'>Error</a> for <a class='struct' href='hyper/http/h2/struct.Http2ConnectError.html' title='hyper::http::h2::Http2ConnectError'>Http2ConnectError</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/std/error/trait.Error.html' title='std::error::Error'>StdError</a> for <a class='struct' href='iron/error/struct.IronError.html' title='iron::error::IronError'>IronError</a>",];implementors['staticdir'] = ["impl <a class='trait' href='https://doc.rust-lang.org/nightly/std/error/trait.Error.html' title='std::error::Error'>Error</a> for <a class='struct' href='staticdir/errors/struct.NotADir.html' title='staticdir::errors::NotADir'>NotADir</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/std/error/trait.Error.html' title='std::error::Error'>Error</a> for <a class='struct' href='staticdir/errors/struct.BadString.html' title='staticdir::errors::BadString'>BadString</a>",];implementors['staticdir'] = ["impl <a class='trait' href='https://doc.rust-lang.org/nightly/std/error/trait.Error.html' title='std::error::Error'>Error</a> for <a class='struct' href='staticdir/errors/struct.NotADir.html' title='staticdir::errors::NotADir'>NotADir</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/std/error/trait.Error.html' title='std::error::Error'>Error</a> for <a class='struct' href='staticdir/errors/struct.BadString.html' title='staticdir::errors::BadString'>BadString</a>",];implementors['staticdir'] = ["impl <a class='trait' href='https://doc.rust-lang.org/nightly/std/error/trait.Error.html' title='std::error::Error'>Error</a> for <a class='struct' href='staticdir/errors/struct.NotADir.html' title='staticdir::errors::NotADir'>NotADir</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/std/error/trait.Error.html' title='std::error::Error'>Error</a> for <a class='struct' href='staticdir/errors/struct.BadString.html' title='staticdir::errors::BadString'>BadString</a>",];implementors['staticdir'] = ["impl <a class='trait' href='https://doc.rust-lang.org/nightly/std/error/trait.Error.html' title='std::error::Error'>Error</a> for <a class='struct' href='staticdir/errors/struct.NotADir.html' title='staticdir::errors::NotADir'>NotADir</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/std/error/trait.Error.html' title='std::error::Error'>Error</a> for <a class='struct' href='staticdir/errors/struct.BadString.html' title='staticdir::errors::BadString'>BadString</a>",];implementors['staticdir'] = ["impl <a class='trait' href='https://doc.rust-lang.org/nightly/std/error/trait.Error.html' title='std::error::Error'>Error</a> for <a class='struct' href='staticdir/errors/struct.NotADir.html' title='staticdir::errors::NotADir'>NotADir</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/std/error/trait.Error.html' title='std::error::Error'>Error</a> for <a class='struct' href='staticdir/errors/struct.BadString.html' title='staticdir::errors::BadString'>BadString</a>",];implementors['staticdir'] = ["impl <a class='trait' href='https://doc.rust-lang.org/nightly/std/error/trait.Error.html' title='std::error::Error'>Error</a> for <a class='struct' href='staticdir/errors/struct.NotADir.html' title='staticdir::errors::NotADir'>NotADir</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/std/error/trait.Error.html' title='std::error::Error'>Error</a> for <a class='struct' href='staticdir/errors/struct.BadString.html' title='staticdir::errors::BadString'>BadString</a>",];implementors['staticdir'] = ["impl <a class='trait' href='https://doc.rust-lang.org/nightly/std/error/trait.Error.html' title='std::error::Error'>Error</a> for <a class='struct' href='staticdir/errors/struct.NotADir.html' title='staticdir::errors::NotADir'>NotADir</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/std/error/trait.Error.html' title='std::error::Error'>Error</a> for <a class='struct' href='staticdir/errors/struct.BadString.html' title='staticdir::errors::BadString'>BadString</a>",];implementors['staticdir'] = ["impl <a class='trait' href='https://doc.rust-lang.org/nightly/std/error/trait.Error.html' title='std::error::Error'>Error</a> for <a class='struct' href='staticdir/errors/struct.NotADir.html' title='staticdir::errors::NotADir'>NotADir</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/std/error/trait.Error.html' title='std::error::Error'>Error</a> for <a class='struct' href='staticdir/errors/struct.BadString.html' title='staticdir::errors::BadString'>BadString</a>",];implementors['staticdir'] = ["impl <a class='trait' href='https://doc.rust-lang.org/nightly/std/error/trait.Error.html' title='std::error::Error'>Error</a> for <a class='struct' href='staticdir/errors/struct.NotADir.html' title='staticdir::errors::NotADir'>NotADir</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/std/error/trait.Error.html' title='std::error::Error'>Error</a> for <a class='struct' href='staticdir/errors/struct.BadString.html' title='staticdir::errors::BadString'>BadString</a>",];implementors['staticdir'] = ["impl <a class='trait' href='https://doc.rust-lang.org/nightly/std/error/trait.Error.html' title='std::error::Error'>Error</a> for <a class='struct' href='staticdir/errors/struct.NotADir.html' title='staticdir::errors::NotADir'>NotADir</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/std/error/trait.Error.html' title='std::error::Error'>Error</a> for <a class='struct' href='staticdir/errors/struct.BadString.html' title='staticdir::errors::BadString'>BadString</a>",];implementors['staticdir'] = ["impl <a class='trait' href='https://doc.rust-lang.org/nightly/std/error/trait.Error.html' title='std::error::Error'>Error</a> for <a class='struct' href='staticdir/errors/struct.NotADir.html' title='staticdir::errors::NotADir'>NotADir</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/std/error/trait.Error.html' title='std::error::Error'>Error</a> for <a class='struct' href='staticdir/errors/struct.BadString.html' title='staticdir::errors::BadString'>BadString</a>",];implementors['staticdir'] = ["impl <a class='trait' href='https://doc.rust-lang.org/nightly/std/error/trait.Error.html' title='std::error::Error'>Error</a> for <a class='struct' href='staticdir/errors/struct.NotADir.html' title='staticdir::errors::NotADir'>NotADir</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/std/error/trait.Error.html' title='std::error::Error'>Error</a> for <a class='struct' href='staticdir/errors/struct.BadString.html' title='staticdir::errors::BadString'>BadString</a>",];implementors['staticdir'] = ["impl <a class='trait' href='https://doc.rust-lang.org/nightly/std/error/trait.Error.html' title='std::error::Error'>Error</a> for <a class='struct' href='staticdir/errors/struct.NotADir.html' title='staticdir::errors::NotADir'>NotADir</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/std/error/trait.Error.html' title='std::error::Error'>Error</a> for <a class='struct' href='staticdir/errors/struct.BadString.html' title='staticdir::errors::BadString'>BadString</a>",];implementors['staticdir'] = ["impl <a class='trait' href='https://doc.rust-lang.org/nightly/std/error/trait.Error.html' title='std::error::Error'>Error</a> for <a class='struct' href='staticdir/errors/struct.NotADir.html' title='staticdir::errors::NotADir'>NotADir</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/std/error/trait.Error.html' title='std::error::Error'>Error</a> for <a class='struct' href='staticdir/errors/struct.BadString.html' title='staticdir::errors::BadString'>BadString</a>",];implementors['staticdir'] = ["impl <a class='trait' href='https://doc.rust-lang.org/nightly/std/error/trait.Error.html' title='std::error::Error'>Error</a> for <a class='struct' href='staticdir/errors/struct.NotADir.html' title='staticdir::errors::NotADir'>NotADir</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/std/error/trait.Error.html' title='std::error::Error'>Error</a> for <a class='struct' href='staticdir/errors/struct.BadString.html' title='staticdir::errors::BadString'>BadString</a>",];implementors['staticdir'] = ["impl <a class='trait' href='https://doc.rust-lang.org/nightly/std/error/trait.Error.html' title='std::error::Error'>Error</a> for <a class='struct' href='staticdir/errors/struct.NotADir.html' title='staticdir::errors::NotADir'>NotADir</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/std/error/trait.Error.html' title='std::error::Error'>Error</a> for <a class='struct' href='staticdir/errors/struct.BadString.html' title='staticdir::errors::BadString'>BadString</a>",];implementors['staticdir'] = ["impl <a class='trait' href='https://doc.rust-lang.org/nightly/std/error/trait.Error.html' title='std::error::Error'>Error</a> for <a class='struct' href='staticdir/errors/struct.NotADir.html' title='staticdir::errors::NotADir'>NotADir</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/std/error/trait.Error.html' title='std::error::Error'>Error</a> for <a class='struct' href='staticdir/errors/struct.BadString.html' title='staticdir::errors::BadString'>BadString</a>",];implementors['staticdir'] = ["impl <a class='trait' href='https://doc.rust-lang.org/nightly/std/error/trait.Error.html' title='std::error::Error'>Error</a> for <a class='struct' href='staticdir/errors/struct.NotADir.html' title='staticdir::errors::NotADir'>NotADir</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/std/error/trait.Error.html' title='std::error::Error'>Error</a> for <a class='struct' href='staticdir/errors/struct.BadString.html' title='staticdir::errors::BadString'>BadString</a>",];implementors['staticdir'] = ["impl <a class='trait' href='https://doc.rust-lang.org/nightly/std/error/trait.Error.html' title='std::error::Error'>Error</a> for <a class='struct' href='staticdir/errors/struct.NotADir.html' title='staticdir::errors::NotADir'>NotADir</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/std/error/trait.Error.html' title='std::error::Error'>Error</a> for <a class='struct' href='staticdir/errors/struct.BadString.html' title='staticdir::errors::BadString'>BadString</a>",];implementors['staticdir'] = ["impl <a class='trait' href='https://doc.rust-lang.org/nightly/std/error/trait.Error.html' title='std::error::Error'>Error</a> for <a class='struct' href='staticdir/errors/struct.NotADir.html' title='staticdir::errors::NotADir'>NotADir</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/std/error/trait.Error.html' title='std::error::Error'>Error</a> for <a class='struct' href='staticdir/errors/struct.BadString.html' title='staticdir::errors::BadString'>BadString</a>",];implementors['staticdir'] = ["impl <a class='trait' href='https://doc.rust-lang.org/nightly/std/error/trait.Error.html' title='std::error::Error'>Error</a> for <a class='struct' href='staticdir/errors/struct.NotADir.html' title='staticdir::errors::NotADir'>NotADir</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/std/error/trait.Error.html' title='std::error::Error'>Error</a> for <a class='struct' href='staticdir/errors/struct.BadString.html' title='staticdir::errors::BadString'>BadString</a>",];implementors['staticdir'] = ["impl <a class='trait' href='https://doc.rust-lang.org/nightly/std/error/trait.Error.html' title='std::error::Error'>Error</a> for <a class='struct' href='staticdir/errors/struct.NotADir.html' title='staticdir::errors::NotADir'>NotADir</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/std/error/trait.Error.html' title='std::error::Error'>Error</a> for <a class='struct' href='staticdir/errors/struct.BadString.html' title='staticdir::errors::BadString'>BadString</a>",];implementors['staticdir'] = ["impl <a class='trait' href='https://doc.rust-lang.org/nightly/std/error/trait.Error.html' title='std::error::Error'>Error</a> for <a class='struct' href='staticdir/errors/struct.NotADir.html' title='staticdir::errors::NotADir'>NotADir</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/std/error/trait.Error.html' title='std::error::Error'>Error</a> for <a class='struct' href='staticdir/errors/struct.BadString.html' title='staticdir::errors::BadString'>BadString</a>",];implementors['staticdir'] = ["impl <a class='trait' href='https://doc.rust-lang.org/nightly/std/error/trait.Error.html' title='std::error::Error'>Error</a> for <a class='struct' href='staticdir/errors/struct.NotADir.html' title='staticdir::errors::NotADir'>NotADir</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/std/error/trait.Error.html' title='std::error::Error'>Error</a> for <a class='struct' href='staticdir/errors/struct.BadString.html' title='staticdir::errors::BadString'>BadString</a>",];implementors['staticdir'] = ["impl <a class='trait' href='https://doc.rust-lang.org/nightly/std/error/trait.Error.html' title='std::error::Error'>Error</a> for <a class='struct' href='staticdir/errors/struct.NotADir.html' title='staticdir::errors::NotADir'>NotADir</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/std/error/trait.Error.html' title='std::error::Error'>Error</a> for <a class='struct' href='staticdir/errors/struct.BadString.html' title='staticdir::errors::BadString'>BadString</a>",];implementors['staticdir'] = ["impl <a class='trait' href='https://doc.rust-lang.org/nightly/std/error/trait.Error.html' title='std::error::Error'>Error</a> for <a class='struct' href='staticdir/errors/struct.NotADir.html' title='staticdir::errors::NotADir'>NotADir</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/std/error/trait.Error.html' title='std::error::Error'>Error</a> for <a class='struct' href='staticdir/errors/struct.BadString.html' title='staticdir::errors::BadString'>BadString</a>",];implementors['staticdir'] = ["impl <a class='trait' href='https://doc.rust-lang.org/nightly/std/error/trait.Error.html' title='std::error::Error'>Error</a> for <a class='struct' href='staticdir/errors/struct.NotADir.html' title='staticdir::errors::NotADir'>NotADir</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/std/error/trait.Error.html' title='std::error::Error'>Error</a> for <a class='struct' href='staticdir/errors/struct.BadString.html' title='staticdir::errors::BadString'>BadString</a>",];implementors['staticdir'] = ["impl <a class='trait' href='https://doc.rust-lang.org/nightly/std/error/trait.Error.html' title='std::error::Error'>Error</a> for <a class='struct' href='staticdir/errors/struct.NotADir.html' title='staticdir::errors::NotADir'>NotADir</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/std/error/trait.Error.html' title='std::error::Error'>Error</a> for <a class='struct' href='staticdir/errors/struct.BadString.html' title='staticdir::errors::BadString'>BadString</a>",];implementors['staticdir'] = ["impl <a class='trait' href='https://doc.rust-lang.org/nightly/std/error/trait.Error.html' title='std::error::Error'>Error</a> for <a class='struct' href='staticdir/errors/struct.NotADir.html' title='staticdir::errors::NotADir'>NotADir</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/std/error/trait.Error.html' title='std::error::Error'>Error</a> for <a class='struct' href='staticdir/errors/struct.BadString.html' title='staticdir::errors::BadString'>BadString</a>",];implementors['staticdir'] = ["impl <a class='trait' href='https://doc.rust-lang.org/nightly/std/error/trait.Error.html' title='std::error::Error'>Error</a> for <a class='struct' href='staticdir/errors/struct.NotADir.html' title='staticdir::errors::NotADir'>NotADir</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/std/error/trait.Error.html' title='std::error::Error'>Error</a> for <a class='struct' href='staticdir/errors/struct.BadString.html' title='staticdir::errors::BadString'>BadString</a>",];implementors['staticdir'] = ["impl <a class='trait' href='https://doc.rust-lang.org/nightly/std/error/trait.Error.html' title='std::error::Error'>Error</a> for <a class='struct' href='staticdir/errors/struct.NotADir.html' title='staticdir::errors::NotADir'>NotADir</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/std/error/trait.Error.html' title='std::error::Error'>Error</a> for <a class='struct' href='staticdir/errors/struct.BadString.html' title='staticdir::errors::BadString'>BadString</a>",];implementors['staticdir'] = ["impl <a class='trait' href='https://doc.rust-lang.org/nightly/std/error/trait.Error.html' title='std::error::Error'>Error</a> for <a class='struct' href='staticdir/errors/struct.NotADir.html' title='staticdir::errors::NotADir'>NotADir</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/std/error/trait.Error.html' title='std::error::Error'>Error</a> for <a class='struct' href='staticdir/errors/struct.BadString.html' title='staticdir::errors::BadString'>BadString</a>",];implementors['staticdir'] = ["impl <a class='trait' href='https://doc.rust-lang.org/nightly/std/error/trait.Error.html' title='std::error::Error'>Error</a> for <a class='struct' href='staticdir/errors/struct.NotADir.html' title='staticdir::errors::NotADir'>NotADir</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/std/error/trait.Error.html' title='std::error::Error'>Error</a> for <a class='struct' href='staticdir/errors/struct.BadString.html' title='staticdir::errors::BadString'>BadString</a>",];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()
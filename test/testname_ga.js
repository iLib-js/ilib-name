/*
 * testname_en.js - test the name object in Gaelic
 *
 * Copyright © 2013-2015,2017,2022 JEDLSoft
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import NameFmt from '../src/NameFmt.js';
import Name from '../src/Name.js';
import { LocaleData } from 'ilib-localedata';
import { getPlatform } from 'ilib-env';

let setUpPerformed = false;


export const testname_ga = {
    setUp: function(callback) {
        if (getPlatform() === "browser" && !setUpPerformed) {
            // does not support sync, so we have to ensure the locale
            // data is loaded before we can do all these sync tests
            setUpPerformed = true;
            return LocaleData.ensureLocale("ga-IE").then(() => {
                callback();
            });
        } else {
            callback();
        }
    },

    testParseSimpleName_ga_IE: function(test) {
        test.expect(2);
        const parsed = new Name("Daniel O'Reilly", {locale: 'ga-IE'});
        test.ok(typeof(parsed) !== "undefined");

        const expected = {
            givenName: "Daniel",
            familyName: "O'Reilly"
        };

        test.contains(parsed, expected);
        test.done();
    },



    testParseSimpleName_ga_IE: function(test) {
        test.expect(2);
        const parsed = new Name("An tUasal. Kertu O'Reilly", {locale: 'ga-IE'});
        test.ok(typeof(parsed) !== "undefined");

        const expected = {
            prefix : "An tUasal.",
            givenName: "Kertu",
            familyName: "O'Reilly"

        };

        test.contains(parsed, expected);
        test.done();
    },



    testParseSingleNameWithPrefixAndAdjunct_ga_IE: function(test) {
        test.expect(2);
        const parsed = new Name("Daniel O'Reilly sóisearach", {locale: 'ga-IE'});
        test.ok(typeof(parsed) !== "undefined");

        const expected = {
             suffix : "sóisearach",
            givenName: "Daniel",
            familyName: "O'Reilly"
        };

        test.contains(parsed, expected);
        test.done();
    },


    testParseTitle_ga_IE1: function(test) {
        test.expect(2);
        const parsed = new Name("príomh-aire Daniel O'Reilly", {locale: 'ga-IE'});
        test.ok(typeof(parsed) !== "undefined");

        const expected = {
            prefix : "príomh-aire",
            givenName: "Daniel",
            familyName: "O'Reilly"
        };

        test.contains(parsed, expected);
        test.done();
    },


    testParseTitle_ga_IE_second: function(test) {
        test.expect(2);
        const parsed = new Name("An tUasal. agus Mrs. O'Reilly", {locale: 'ga-IE'});
        test.ok(typeof(parsed) !== "undefined");

        const expected = {
            prefix : "An tUasal. agus Mrs.",
            familyName: "O'Reilly"
        };

        test.contains(parsed, expected);
        test.done();
    },


    testParseTitleWithFamilyOnlyAndAdjunct_ga_IE: function(test) {
        test.expect(2);

        let name = new Name({
            prefix: "príomh-aire",
            givenName: "Daniel",
            familyName: "O'Reilly",
            suffix: "scor"
        });
        let fmt = new NameFmt({
            style: "full",
            locale: 'ga-IE'
        });
        let formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");

        const expected = "príomh-aire Daniel O'Reilly scor";

        test.equal(formatted, expected);
        test.done();

    },



    testParseCompoundHonorific_ga_IE: function(test) {
        test.expect(2);
        const parsed = new Name("príomh-aire O'Reilly", {locale: 'ga-IE'});
        test.ok(typeof(parsed) !== "undefined");

        const expected = {
            prefix: "príomh-aire",
            familyName: "O'Reilly"
        };

        test.contains(parsed, expected);
        test.done();
    },

    /*
     * Format Tests
     */

    testFormatSimpleNameShort_ga_IE: function(test) {
        test.expect(2);
        let name = new Name({
            givenName: "Daniel",
            familyName: "O'Reilly"
        });
        let fmt = new NameFmt({
            style: "short",
            locale: 'ga-IE'
        });
        let formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");

        const expected = "Daniel O'Reilly";

        test.equal(formatted, expected);
        test.done();
    },

    testFormatSimpleNameMedium_ga_IE: function(test) {
        test.expect(2);
        let name = new Name({
            givenName: "Daniel",
            familyName: "O'Reilly"
        });
        let fmt = new NameFmt({
            style: "medium",
            locale: 'ga-IE'
        });
        let formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");

        const expected = "Daniel O'Reilly";

        test.equal(formatted, expected);
        test.done();
    },

    testFormatSimpleNameFull_ga_IE: function(test) {
        test.expect(2);
        let name = new Name({

            givenName: "Daniel",
            familyName: "O'Reilly",
            suffix: "scor"
        });
        let fmt = new NameFmt({
            style: "full",
            locale: 'ga-IE'
        });
        let formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");

        const expected = "Daniel O'Reilly scor";

        test.equal(formatted, expected);
        test.done();
    },

    testFormatComplexNameShort_ga_IE: function(test) {
        test.expect(2);
        let name = new Name({
            suffix: "scor",
            givenName: "Daniel",
            familyName: "O'Reilly"
        });
        let fmt = new NameFmt({
            style: "short",
            locale: 'ga-IE'
        });
        let formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");

        const expected = "Daniel O'Reilly";

        test.equal(formatted, expected);
        test.done();
    },


    testFormatAsianNameMedium_ga_IE: function(test) {
        test.expect(2);
        let name = new Name({
            prefix: "小",
            givenName: "獸",
            familyName: "地",
            suffix: "太太"
        });
        let fmt = new NameFmt({
            style: "medium",
            locale: 'ga-IE'
        });
        let formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");

        const expected = "地獸";

        test.equal(formatted, expected);
        test.done();
    },

    testFormatAsianNameLong_ga_IE: function(test) {
        test.expect(2);
        let name = new Name({
            prefix: "小",
            givenName: "獸",
            familyName: "地",
            suffix: "太太"
        });
        let fmt = new NameFmt({
            style: "full",
            locale: 'ga-IE'
        });
        let formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");

        const expected = "小地獸太太";

        test.equal(formatted, expected);
        test.done();
    }




};

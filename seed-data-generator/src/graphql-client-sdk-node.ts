/* tslint:disable */
/* eslint-disable */

export type ValueTypes = {
  /** A physical billing/shipping address, attached to a user account


columns and relationships of "address" */
  ["address"]: AliasType<{
    address_line_one?: true;
    address_line_two?: true;
    city?: true;
    created_at?: true;
    id?: true;
    orders_with_billing_address?: [
      {
        /** distinct select on columns */
        distinct_on?: ValueTypes["order_select_column"][] /** limit the number of rows returned */;
        limit?: number /** skip the first n rows. Use only with order_by */;
        offset?: number /** sort the rows by one or more columns */;
        order_by?: ValueTypes["order_order_by"][] /** filter the rows returned */;
        where?: ValueTypes["order_bool_exp"];
      },
      ValueTypes["order"]
    ];
    orders_with_billing_address_aggregate?: [
      {
        /** distinct select on columns */
        distinct_on?: ValueTypes["order_select_column"][] /** limit the number of rows returned */;
        limit?: number /** skip the first n rows. Use only with order_by */;
        offset?: number /** sort the rows by one or more columns */;
        order_by?: ValueTypes["order_order_by"][] /** filter the rows returned */;
        where?: ValueTypes["order_bool_exp"];
      },
      ValueTypes["order_aggregate"]
    ];
    orders_with_shipping_address?: [
      {
        /** distinct select on columns */
        distinct_on?: ValueTypes["order_select_column"][] /** limit the number of rows returned */;
        limit?: number /** skip the first n rows. Use only with order_by */;
        offset?: number /** sort the rows by one or more columns */;
        order_by?: ValueTypes["order_order_by"][] /** filter the rows returned */;
        where?: ValueTypes["order_bool_exp"];
      },
      ValueTypes["order"]
    ];
    orders_with_shipping_address_aggregate?: [
      {
        /** distinct select on columns */
        distinct_on?: ValueTypes["order_select_column"][] /** limit the number of rows returned */;
        limit?: number /** skip the first n rows. Use only with order_by */;
        offset?: number /** sort the rows by one or more columns */;
        order_by?: ValueTypes["order_order_by"][] /** filter the rows returned */;
        where?: ValueTypes["order_bool_exp"];
      },
      ValueTypes["order_aggregate"]
    ];
    state?: true;
    updated_at?: true;
    /** An object relationship */
    user?: ValueTypes["user"];
    user_id?: true;
    zipcode?: true;
    __typename?: true;
  }>;
  /** aggregated selection of "address" */
  ["address_aggregate"]: AliasType<{
    aggregate?: ValueTypes["address_aggregate_fields"];
    nodes?: ValueTypes["address"];
    __typename?: true;
  }>;
  /** aggregate fields of "address" */
  ["address_aggregate_fields"]: AliasType<{
    avg?: ValueTypes["address_avg_fields"];
    count?: [
      { columns?: ValueTypes["address_select_column"][]; distinct?: boolean },
      true
    ];
    max?: ValueTypes["address_max_fields"];
    min?: ValueTypes["address_min_fields"];
    stddev?: ValueTypes["address_stddev_fields"];
    stddev_pop?: ValueTypes["address_stddev_pop_fields"];
    stddev_samp?: ValueTypes["address_stddev_samp_fields"];
    sum?: ValueTypes["address_sum_fields"];
    var_pop?: ValueTypes["address_var_pop_fields"];
    var_samp?: ValueTypes["address_var_samp_fields"];
    variance?: ValueTypes["address_variance_fields"];
    __typename?: true;
  }>;
  /** order by aggregate values of table "address" */
  ["address_aggregate_order_by"]: {
    avg?: ValueTypes["address_avg_order_by"];
    count?: ValueTypes["order_by"];
    max?: ValueTypes["address_max_order_by"];
    min?: ValueTypes["address_min_order_by"];
    stddev?: ValueTypes["address_stddev_order_by"];
    stddev_pop?: ValueTypes["address_stddev_pop_order_by"];
    stddev_samp?: ValueTypes["address_stddev_samp_order_by"];
    sum?: ValueTypes["address_sum_order_by"];
    var_pop?: ValueTypes["address_var_pop_order_by"];
    var_samp?: ValueTypes["address_var_samp_order_by"];
    variance?: ValueTypes["address_variance_order_by"];
  };
  /** input type for inserting array relation for remote table "address" */
  ["address_arr_rel_insert_input"]: {
    data: ValueTypes["address_insert_input"][];
    on_conflict?: ValueTypes["address_on_conflict"];
  };
  /** aggregate avg on columns */
  ["address_avg_fields"]: AliasType<{
    id?: true;
    user_id?: true;
    __typename?: true;
  }>;
  /** order by avg() on columns of table "address" */
  ["address_avg_order_by"]: {
    id?: ValueTypes["order_by"];
    user_id?: ValueTypes["order_by"];
  };
  /** Boolean expression to filter rows from the table "address". All fields are combined with a logical 'AND'. */
  ["address_bool_exp"]: {
    _and?: (ValueTypes["address_bool_exp"] | undefined)[];
    _not?: ValueTypes["address_bool_exp"];
    _or?: (ValueTypes["address_bool_exp"] | undefined)[];
    address_line_one?: ValueTypes["String_comparison_exp"];
    address_line_two?: ValueTypes["String_comparison_exp"];
    city?: ValueTypes["String_comparison_exp"];
    created_at?: ValueTypes["timestamptz_comparison_exp"];
    id?: ValueTypes["Int_comparison_exp"];
    orders_with_billing_address?: ValueTypes["order_bool_exp"];
    orders_with_shipping_address?: ValueTypes["order_bool_exp"];
    state?: ValueTypes["String_comparison_exp"];
    updated_at?: ValueTypes["timestamptz_comparison_exp"];
    user?: ValueTypes["user_bool_exp"];
    user_id?: ValueTypes["Int_comparison_exp"];
    zipcode?: ValueTypes["String_comparison_exp"];
  };
  /** unique or primary key constraints on table "address" */
  ["address_constraint"]: address_constraint;
  /** input type for incrementing integer column in table "address" */
  ["address_inc_input"]: {
    id?: number;
    user_id?: number;
  };
  /** input type for inserting data into table "address" */
  ["address_insert_input"]: {
    address_line_one?: string;
    address_line_two?: string;
    city?: string;
    created_at?: ValueTypes["timestamptz"];
    id?: number;
    orders_with_billing_address?: ValueTypes["order_arr_rel_insert_input"];
    orders_with_shipping_address?: ValueTypes["order_arr_rel_insert_input"];
    state?: string;
    updated_at?: ValueTypes["timestamptz"];
    user?: ValueTypes["user_obj_rel_insert_input"];
    user_id?: number;
    zipcode?: string;
  };
  /** aggregate max on columns */
  ["address_max_fields"]: AliasType<{
    address_line_one?: true;
    address_line_two?: true;
    city?: true;
    created_at?: true;
    id?: true;
    state?: true;
    updated_at?: true;
    user_id?: true;
    zipcode?: true;
    __typename?: true;
  }>;
  /** order by max() on columns of table "address" */
  ["address_max_order_by"]: {
    address_line_one?: ValueTypes["order_by"];
    address_line_two?: ValueTypes["order_by"];
    city?: ValueTypes["order_by"];
    created_at?: ValueTypes["order_by"];
    id?: ValueTypes["order_by"];
    state?: ValueTypes["order_by"];
    updated_at?: ValueTypes["order_by"];
    user_id?: ValueTypes["order_by"];
    zipcode?: ValueTypes["order_by"];
  };
  /** aggregate min on columns */
  ["address_min_fields"]: AliasType<{
    address_line_one?: true;
    address_line_two?: true;
    city?: true;
    created_at?: true;
    id?: true;
    state?: true;
    updated_at?: true;
    user_id?: true;
    zipcode?: true;
    __typename?: true;
  }>;
  /** order by min() on columns of table "address" */
  ["address_min_order_by"]: {
    address_line_one?: ValueTypes["order_by"];
    address_line_two?: ValueTypes["order_by"];
    city?: ValueTypes["order_by"];
    created_at?: ValueTypes["order_by"];
    id?: ValueTypes["order_by"];
    state?: ValueTypes["order_by"];
    updated_at?: ValueTypes["order_by"];
    user_id?: ValueTypes["order_by"];
    zipcode?: ValueTypes["order_by"];
  };
  /** response of any mutation on the table "address" */
  ["address_mutation_response"]: AliasType<{
    /** number of affected rows by the mutation */
    affected_rows?: true;
    /** data of the affected rows by the mutation */
    returning?: ValueTypes["address"];
    __typename?: true;
  }>;
  /** input type for inserting object relation for remote table "address" */
  ["address_obj_rel_insert_input"]: {
    data: ValueTypes["address_insert_input"];
    on_conflict?: ValueTypes["address_on_conflict"];
  };
  /** on conflict condition type for table "address" */
  ["address_on_conflict"]: {
    constraint: ValueTypes["address_constraint"];
    update_columns: ValueTypes["address_update_column"][];
    where?: ValueTypes["address_bool_exp"];
  };
  /** ordering options when selecting data from "address" */
  ["address_order_by"]: {
    address_line_one?: ValueTypes["order_by"];
    address_line_two?: ValueTypes["order_by"];
    city?: ValueTypes["order_by"];
    created_at?: ValueTypes["order_by"];
    id?: ValueTypes["order_by"];
    orders_with_billing_address_aggregate?: ValueTypes["order_aggregate_order_by"];
    orders_with_shipping_address_aggregate?: ValueTypes["order_aggregate_order_by"];
    state?: ValueTypes["order_by"];
    updated_at?: ValueTypes["order_by"];
    user?: ValueTypes["user_order_by"];
    user_id?: ValueTypes["order_by"];
    zipcode?: ValueTypes["order_by"];
  };
  /** primary key columns input for table: "address" */
  ["address_pk_columns_input"]: {
    id: number;
  };
  /** select columns of table "address" */
  ["address_select_column"]: address_select_column;
  /** input type for updating data in table "address" */
  ["address_set_input"]: {
    address_line_one?: string;
    address_line_two?: string;
    city?: string;
    created_at?: ValueTypes["timestamptz"];
    id?: number;
    state?: string;
    updated_at?: ValueTypes["timestamptz"];
    user_id?: number;
    zipcode?: string;
  };
  /** aggregate stddev on columns */
  ["address_stddev_fields"]: AliasType<{
    id?: true;
    user_id?: true;
    __typename?: true;
  }>;
  /** order by stddev() on columns of table "address" */
  ["address_stddev_order_by"]: {
    id?: ValueTypes["order_by"];
    user_id?: ValueTypes["order_by"];
  };
  /** aggregate stddev_pop on columns */
  ["address_stddev_pop_fields"]: AliasType<{
    id?: true;
    user_id?: true;
    __typename?: true;
  }>;
  /** order by stddev_pop() on columns of table "address" */
  ["address_stddev_pop_order_by"]: {
    id?: ValueTypes["order_by"];
    user_id?: ValueTypes["order_by"];
  };
  /** aggregate stddev_samp on columns */
  ["address_stddev_samp_fields"]: AliasType<{
    id?: true;
    user_id?: true;
    __typename?: true;
  }>;
  /** order by stddev_samp() on columns of table "address" */
  ["address_stddev_samp_order_by"]: {
    id?: ValueTypes["order_by"];
    user_id?: ValueTypes["order_by"];
  };
  /** aggregate sum on columns */
  ["address_sum_fields"]: AliasType<{
    id?: true;
    user_id?: true;
    __typename?: true;
  }>;
  /** order by sum() on columns of table "address" */
  ["address_sum_order_by"]: {
    id?: ValueTypes["order_by"];
    user_id?: ValueTypes["order_by"];
  };
  /** update columns of table "address" */
  ["address_update_column"]: address_update_column;
  /** aggregate var_pop on columns */
  ["address_var_pop_fields"]: AliasType<{
    id?: true;
    user_id?: true;
    __typename?: true;
  }>;
  /** order by var_pop() on columns of table "address" */
  ["address_var_pop_order_by"]: {
    id?: ValueTypes["order_by"];
    user_id?: ValueTypes["order_by"];
  };
  /** aggregate var_samp on columns */
  ["address_var_samp_fields"]: AliasType<{
    id?: true;
    user_id?: true;
    __typename?: true;
  }>;
  /** order by var_samp() on columns of table "address" */
  ["address_var_samp_order_by"]: {
    id?: ValueTypes["order_by"];
    user_id?: ValueTypes["order_by"];
  };
  /** aggregate variance on columns */
  ["address_variance_fields"]: AliasType<{
    id?: true;
    user_id?: true;
    __typename?: true;
  }>;
  /** order by variance() on columns of table "address" */
  ["address_variance_order_by"]: {
    id?: ValueTypes["order_by"];
    user_id?: ValueTypes["order_by"];
  };
  ["AdminLoginInput"]: {
    email: string;
    password: string;
  };
  ["AdminSignupInput"]: {
    email: string;
    name: string;
    password: string;
  };
  /** expression to compare columns of type Boolean. All fields are combined with logical 'AND'. */
  ["Boolean_comparison_exp"]: {
    _eq?: boolean;
    _gt?: boolean;
    _gte?: boolean;
    _in?: boolean[];
    _is_null?: boolean;
    _lt?: boolean;
    _lte?: boolean;
    _neq?: boolean;
    _nin?: boolean[];
  };
  ["CreatePaymentIntentInput"]: {
    paymentAmount: number;
  };
  /** expression to compare columns of type Int. All fields are combined with logical 'AND'. */
  ["Int_comparison_exp"]: {
    _eq?: number;
    _gt?: number;
    _gte?: number;
    _in?: number[];
    _is_null?: boolean;
    _lt?: number;
    _lte?: number;
    _neq?: number;
    _nin?: number[];
  };
  ["json"]: unknown;
  /** expression to compare columns of type json. All fields are combined with logical 'AND'. */
  ["json_comparison_exp"]: {
    _eq?: ValueTypes["json"];
    _gt?: ValueTypes["json"];
    _gte?: ValueTypes["json"];
    _in?: ValueTypes["json"][];
    _is_null?: boolean;
    _lt?: ValueTypes["json"];
    _lte?: ValueTypes["json"];
    _neq?: ValueTypes["json"];
    _nin?: ValueTypes["json"][];
  };
  ["jsonb"]: unknown;
  /** expression to compare columns of type jsonb. All fields are combined with logical 'AND'. */
  ["jsonb_comparison_exp"]: {
    /** is the column contained in the given json value */
    _contained_in?: ValueTypes["jsonb"];
    /** does the column contain the given json value at the top level */
    _contains?: ValueTypes["jsonb"];
    _eq?: ValueTypes["jsonb"];
    _gt?: ValueTypes["jsonb"];
    _gte?: ValueTypes["jsonb"];
    /** does the string exist as a top-level key in the column */
    _has_key?: string;
    /** do all of these strings exist as top-level keys in the column */
    _has_keys_all?: string[];
    /** do any of these strings exist as top-level keys in the column */
    _has_keys_any?: string[];
    _in?: ValueTypes["jsonb"][];
    _is_null?: boolean;
    _lt?: ValueTypes["jsonb"];
    _lte?: ValueTypes["jsonb"];
    _neq?: ValueTypes["jsonb"];
    _nin?: ValueTypes["jsonb"][];
  };
  ["JWT"]: AliasType<{
    email?: true;
    name?: true;
    refreshToken?: true;
    token?: true;
    __typename?: true;
  }>;
  ["LoginInput"]: {
    email: string;
    password: string;
  };
  /** mutation root */
  ["mutation_root"]: AliasType<{
    adminSignup?: [
      { params: ValueTypes["AdminSignupInput"] },
      ValueTypes["JWT"]
    ];
    createPaymentIntent?: [
      { params: ValueTypes["CreatePaymentIntentInput"] },
      ValueTypes["PaymentIntentClientSecret"]
    ];
    delete_address?: [
      {
        /** filter the rows which have to be deleted */
        where: ValueTypes["address_bool_exp"];
      },
      ValueTypes["address_mutation_response"]
    ];
    delete_address_by_pk?: [{ id: number }, ValueTypes["address"]];
    delete_order?: [
      {
        /** filter the rows which have to be deleted */
        where: ValueTypes["order_bool_exp"];
      },
      ValueTypes["order_mutation_response"]
    ];
    delete_order_by_pk?: [{ id: number }, ValueTypes["order"]];
    delete_order_product?: [
      {
        /** filter the rows which have to be deleted */
        where: ValueTypes["order_product_bool_exp"];
      },
      ValueTypes["order_product_mutation_response"]
    ];
    delete_order_product_by_pk?: [{ id: number }, ValueTypes["order_product"]];
    delete_product?: [
      {
        /** filter the rows which have to be deleted */
        where: ValueTypes["product_bool_exp"];
      },
      ValueTypes["product_mutation_response"]
    ];
    delete_product_by_pk?: [{ id: number }, ValueTypes["product"]];
    delete_product_category_enum?: [
      {
        /** filter the rows which have to be deleted */
        where: ValueTypes["product_category_enum_bool_exp"];
      },
      ValueTypes["product_category_enum_mutation_response"]
    ];
    delete_product_category_enum_by_pk?: [
      { name: string },
      ValueTypes["product_category_enum"]
    ];
    delete_product_review?: [
      {
        /** filter the rows which have to be deleted */
        where: ValueTypes["product_review_bool_exp"];
      },
      ValueTypes["product_review_mutation_response"]
    ];
    delete_product_review_by_pk?: [
      { id: number },
      ValueTypes["product_review"]
    ];
    delete_site_admin?: [
      {
        /** filter the rows which have to be deleted */
        where: ValueTypes["site_admin_bool_exp"];
      },
      ValueTypes["site_admin_mutation_response"]
    ];
    delete_site_admin_by_pk?: [{ id: number }, ValueTypes["site_admin"]];
    delete_user?: [
      {
        /** filter the rows which have to be deleted */
        where: ValueTypes["user_bool_exp"];
      },
      ValueTypes["user_mutation_response"]
    ];
    delete_user_by_pk?: [{ id: number }, ValueTypes["user"]];
    insert_address?: [
      {
        /** the rows to be inserted */
        objects: ValueTypes["address_insert_input"][] /** on conflict condition */;
        on_conflict?: ValueTypes["address_on_conflict"];
      },
      ValueTypes["address_mutation_response"]
    ];
    insert_address_one?: [
      {
        /** the row to be inserted */
        object: ValueTypes["address_insert_input"] /** on conflict condition */;
        on_conflict?: ValueTypes["address_on_conflict"];
      },
      ValueTypes["address"]
    ];
    insert_order?: [
      {
        /** the rows to be inserted */
        objects: ValueTypes["order_insert_input"][] /** on conflict condition */;
        on_conflict?: ValueTypes["order_on_conflict"];
      },
      ValueTypes["order_mutation_response"]
    ];
    insert_order_one?: [
      {
        /** the row to be inserted */
        object: ValueTypes["order_insert_input"] /** on conflict condition */;
        on_conflict?: ValueTypes["order_on_conflict"];
      },
      ValueTypes["order"]
    ];
    insert_order_product?: [
      {
        /** the rows to be inserted */
        objects: ValueTypes["order_product_insert_input"][] /** on conflict condition */;
        on_conflict?: ValueTypes["order_product_on_conflict"];
      },
      ValueTypes["order_product_mutation_response"]
    ];
    insert_order_product_one?: [
      {
        /** the row to be inserted */
        object: ValueTypes["order_product_insert_input"] /** on conflict condition */;
        on_conflict?: ValueTypes["order_product_on_conflict"];
      },
      ValueTypes["order_product"]
    ];
    insert_product?: [
      {
        /** the rows to be inserted */
        objects: ValueTypes["product_insert_input"][] /** on conflict condition */;
        on_conflict?: ValueTypes["product_on_conflict"];
      },
      ValueTypes["product_mutation_response"]
    ];
    insert_product_category_enum?: [
      {
        /** the rows to be inserted */
        objects: ValueTypes["product_category_enum_insert_input"][] /** on conflict condition */;
        on_conflict?: ValueTypes["product_category_enum_on_conflict"];
      },
      ValueTypes["product_category_enum_mutation_response"]
    ];
    insert_product_category_enum_one?: [
      {
        /** the row to be inserted */
        object: ValueTypes["product_category_enum_insert_input"] /** on conflict condition */;
        on_conflict?: ValueTypes["product_category_enum_on_conflict"];
      },
      ValueTypes["product_category_enum"]
    ];
    insert_product_one?: [
      {
        /** the row to be inserted */
        object: ValueTypes["product_insert_input"] /** on conflict condition */;
        on_conflict?: ValueTypes["product_on_conflict"];
      },
      ValueTypes["product"]
    ];
    insert_product_review?: [
      {
        /** the rows to be inserted */
        objects: ValueTypes["product_review_insert_input"][] /** on conflict condition */;
        on_conflict?: ValueTypes["product_review_on_conflict"];
      },
      ValueTypes["product_review_mutation_response"]
    ];
    insert_product_review_one?: [
      {
        /** the row to be inserted */
        object: ValueTypes["product_review_insert_input"] /** on conflict condition */;
        on_conflict?: ValueTypes["product_review_on_conflict"];
      },
      ValueTypes["product_review"]
    ];
    insert_site_admin?: [
      {
        /** the rows to be inserted */
        objects: ValueTypes["site_admin_insert_input"][] /** on conflict condition */;
        on_conflict?: ValueTypes["site_admin_on_conflict"];
      },
      ValueTypes["site_admin_mutation_response"]
    ];
    insert_site_admin_one?: [
      {
        /** the row to be inserted */
        object: ValueTypes["site_admin_insert_input"] /** on conflict condition */;
        on_conflict?: ValueTypes["site_admin_on_conflict"];
      },
      ValueTypes["site_admin"]
    ];
    insert_user?: [
      {
        /** the rows to be inserted */
        objects: ValueTypes["user_insert_input"][] /** on conflict condition */;
        on_conflict?: ValueTypes["user_on_conflict"];
      },
      ValueTypes["user_mutation_response"]
    ];
    insert_user_one?: [
      {
        /** the row to be inserted */
        object: ValueTypes["user_insert_input"] /** on conflict condition */;
        on_conflict?: ValueTypes["user_on_conflict"];
      },
      ValueTypes["user"]
    ];
    login?: [{ params: ValueTypes["LoginInput"] }, ValueTypes["JWT"]];
    signup?: [{ params: ValueTypes["SignupInput"] }, ValueTypes["JWT"]];
    update_address?: [
      {
        /** increments the integer columns with given value of the filtered values */
        _inc?: ValueTypes["address_inc_input"] /** sets the columns of the filtered rows to the given values */;
        _set?: ValueTypes["address_set_input"] /** filter the rows which have to be updated */;
        where: ValueTypes["address_bool_exp"];
      },
      ValueTypes["address_mutation_response"]
    ];
    update_address_by_pk?: [
      {
        /** increments the integer columns with given value of the filtered values */
        _inc?: ValueTypes["address_inc_input"] /** sets the columns of the filtered rows to the given values */;
        _set?: ValueTypes["address_set_input"];
        pk_columns: ValueTypes["address_pk_columns_input"];
      },
      ValueTypes["address"]
    ];
    update_order?: [
      {
        /** increments the integer columns with given value of the filtered values */
        _inc?: ValueTypes["order_inc_input"] /** sets the columns of the filtered rows to the given values */;
        _set?: ValueTypes["order_set_input"] /** filter the rows which have to be updated */;
        where: ValueTypes["order_bool_exp"];
      },
      ValueTypes["order_mutation_response"]
    ];
    update_order_by_pk?: [
      {
        /** increments the integer columns with given value of the filtered values */
        _inc?: ValueTypes["order_inc_input"] /** sets the columns of the filtered rows to the given values */;
        _set?: ValueTypes["order_set_input"];
        pk_columns: ValueTypes["order_pk_columns_input"];
      },
      ValueTypes["order"]
    ];
    update_order_product?: [
      {
        /** increments the integer columns with given value of the filtered values */
        _inc?: ValueTypes["order_product_inc_input"] /** sets the columns of the filtered rows to the given values */;
        _set?: ValueTypes["order_product_set_input"] /** filter the rows which have to be updated */;
        where: ValueTypes["order_product_bool_exp"];
      },
      ValueTypes["order_product_mutation_response"]
    ];
    update_order_product_by_pk?: [
      {
        /** increments the integer columns with given value of the filtered values */
        _inc?: ValueTypes["order_product_inc_input"] /** sets the columns of the filtered rows to the given values */;
        _set?: ValueTypes["order_product_set_input"];
        pk_columns: ValueTypes["order_product_pk_columns_input"];
      },
      ValueTypes["order_product"]
    ];
    update_product?: [
      {
        /** append existing jsonb value of filtered columns with new jsonb value */
        _append?: ValueTypes["product_append_input"] /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */;
        _delete_at_path?: ValueTypes["product_delete_at_path_input"] /** delete the array element with specified index (negative integers count from
the end). throws an error if top level container is not an array */;
        _delete_elem?: ValueTypes["product_delete_elem_input"] /** delete key/value pair or string element. key/value pairs are matched based on their key value */;
        _delete_key?: ValueTypes["product_delete_key_input"] /** increments the integer columns with given value of the filtered values */;
        _inc?: ValueTypes["product_inc_input"] /** prepend existing jsonb value of filtered columns with new jsonb value */;
        _prepend?: ValueTypes["product_prepend_input"] /** sets the columns of the filtered rows to the given values */;
        _set?: ValueTypes["product_set_input"] /** filter the rows which have to be updated */;
        where: ValueTypes["product_bool_exp"];
      },
      ValueTypes["product_mutation_response"]
    ];
    update_product_by_pk?: [
      {
        /** append existing jsonb value of filtered columns with new jsonb value */
        _append?: ValueTypes["product_append_input"] /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */;
        _delete_at_path?: ValueTypes["product_delete_at_path_input"] /** delete the array element with specified index (negative integers count from
the end). throws an error if top level container is not an array */;
        _delete_elem?: ValueTypes["product_delete_elem_input"] /** delete key/value pair or string element. key/value pairs are matched based on their key value */;
        _delete_key?: ValueTypes["product_delete_key_input"] /** increments the integer columns with given value of the filtered values */;
        _inc?: ValueTypes["product_inc_input"] /** prepend existing jsonb value of filtered columns with new jsonb value */;
        _prepend?: ValueTypes["product_prepend_input"] /** sets the columns of the filtered rows to the given values */;
        _set?: ValueTypes["product_set_input"];
        pk_columns: ValueTypes["product_pk_columns_input"];
      },
      ValueTypes["product"]
    ];
    update_product_category_enum?: [
      {
        /** sets the columns of the filtered rows to the given values */
        _set?: ValueTypes["product_category_enum_set_input"] /** filter the rows which have to be updated */;
        where: ValueTypes["product_category_enum_bool_exp"];
      },
      ValueTypes["product_category_enum_mutation_response"]
    ];
    update_product_category_enum_by_pk?: [
      {
        /** sets the columns of the filtered rows to the given values */
        _set?: ValueTypes["product_category_enum_set_input"];
        pk_columns: ValueTypes["product_category_enum_pk_columns_input"];
      },
      ValueTypes["product_category_enum"]
    ];
    update_product_review?: [
      {
        /** increments the integer columns with given value of the filtered values */
        _inc?: ValueTypes["product_review_inc_input"] /** sets the columns of the filtered rows to the given values */;
        _set?: ValueTypes["product_review_set_input"] /** filter the rows which have to be updated */;
        where: ValueTypes["product_review_bool_exp"];
      },
      ValueTypes["product_review_mutation_response"]
    ];
    update_product_review_by_pk?: [
      {
        /** increments the integer columns with given value of the filtered values */
        _inc?: ValueTypes["product_review_inc_input"] /** sets the columns of the filtered rows to the given values */;
        _set?: ValueTypes["product_review_set_input"];
        pk_columns: ValueTypes["product_review_pk_columns_input"];
      },
      ValueTypes["product_review"]
    ];
    update_site_admin?: [
      {
        /** increments the integer columns with given value of the filtered values */
        _inc?: ValueTypes["site_admin_inc_input"] /** sets the columns of the filtered rows to the given values */;
        _set?: ValueTypes["site_admin_set_input"] /** filter the rows which have to be updated */;
        where: ValueTypes["site_admin_bool_exp"];
      },
      ValueTypes["site_admin_mutation_response"]
    ];
    update_site_admin_by_pk?: [
      {
        /** increments the integer columns with given value of the filtered values */
        _inc?: ValueTypes["site_admin_inc_input"] /** sets the columns of the filtered rows to the given values */;
        _set?: ValueTypes["site_admin_set_input"];
        pk_columns: ValueTypes["site_admin_pk_columns_input"];
      },
      ValueTypes["site_admin"]
    ];
    update_user?: [
      {
        /** increments the integer columns with given value of the filtered values */
        _inc?: ValueTypes["user_inc_input"] /** sets the columns of the filtered rows to the given values */;
        _set?: ValueTypes["user_set_input"] /** filter the rows which have to be updated */;
        where: ValueTypes["user_bool_exp"];
      },
      ValueTypes["user_mutation_response"]
    ];
    update_user_by_pk?: [
      {
        /** increments the integer columns with given value of the filtered values */
        _inc?: ValueTypes["user_inc_input"] /** sets the columns of the filtered rows to the given values */;
        _set?: ValueTypes["user_set_input"];
        pk_columns: ValueTypes["user_pk_columns_input"];
      },
      ValueTypes["user"]
    ];
    __typename?: true;
  }>;
  ["numeric"]: unknown;
  /** expression to compare columns of type numeric. All fields are combined with logical 'AND'. */
  ["numeric_comparison_exp"]: {
    _eq?: ValueTypes["numeric"];
    _gt?: ValueTypes["numeric"];
    _gte?: ValueTypes["numeric"];
    _in?: ValueTypes["numeric"][];
    _is_null?: boolean;
    _lt?: ValueTypes["numeric"];
    _lte?: ValueTypes["numeric"];
    _neq?: ValueTypes["numeric"];
    _nin?: ValueTypes["numeric"][];
  };
  /** An order from a customer, containing one or more products and quantities


columns and relationships of "order" */
  ["order"]: AliasType<{
    /** An object relationship */
    billing_address?: ValueTypes["address"];
    billing_address_id?: true;
    created_at?: true;
    id?: true;
    is_shipped?: true;
    products?: [
      {
        /** distinct select on columns */
        distinct_on?: ValueTypes["order_product_select_column"][] /** limit the number of rows returned */;
        limit?: number /** skip the first n rows. Use only with order_by */;
        offset?: number /** sort the rows by one or more columns */;
        order_by?: ValueTypes["order_product_order_by"][] /** filter the rows returned */;
        where?: ValueTypes["order_product_bool_exp"];
      },
      ValueTypes["order_product"]
    ];
    products_aggregate?: [
      {
        /** distinct select on columns */
        distinct_on?: ValueTypes["order_product_select_column"][] /** limit the number of rows returned */;
        limit?: number /** skip the first n rows. Use only with order_by */;
        offset?: number /** sort the rows by one or more columns */;
        order_by?: ValueTypes["order_product_order_by"][] /** filter the rows returned */;
        where?: ValueTypes["order_product_bool_exp"];
      },
      ValueTypes["order_product_aggregate"]
    ];
    /** An object relationship */
    shipping_address?: ValueTypes["address"];
    shipping_address_id?: true;
    updated_at?: true;
    /** An object relationship */
    user?: ValueTypes["user"];
    user_id?: true;
    __typename?: true;
  }>;
  /** aggregated selection of "order" */
  ["order_aggregate"]: AliasType<{
    aggregate?: ValueTypes["order_aggregate_fields"];
    nodes?: ValueTypes["order"];
    __typename?: true;
  }>;
  /** aggregate fields of "order" */
  ["order_aggregate_fields"]: AliasType<{
    avg?: ValueTypes["order_avg_fields"];
    count?: [
      { columns?: ValueTypes["order_select_column"][]; distinct?: boolean },
      true
    ];
    max?: ValueTypes["order_max_fields"];
    min?: ValueTypes["order_min_fields"];
    stddev?: ValueTypes["order_stddev_fields"];
    stddev_pop?: ValueTypes["order_stddev_pop_fields"];
    stddev_samp?: ValueTypes["order_stddev_samp_fields"];
    sum?: ValueTypes["order_sum_fields"];
    var_pop?: ValueTypes["order_var_pop_fields"];
    var_samp?: ValueTypes["order_var_samp_fields"];
    variance?: ValueTypes["order_variance_fields"];
    __typename?: true;
  }>;
  /** order by aggregate values of table "order" */
  ["order_aggregate_order_by"]: {
    avg?: ValueTypes["order_avg_order_by"];
    count?: ValueTypes["order_by"];
    max?: ValueTypes["order_max_order_by"];
    min?: ValueTypes["order_min_order_by"];
    stddev?: ValueTypes["order_stddev_order_by"];
    stddev_pop?: ValueTypes["order_stddev_pop_order_by"];
    stddev_samp?: ValueTypes["order_stddev_samp_order_by"];
    sum?: ValueTypes["order_sum_order_by"];
    var_pop?: ValueTypes["order_var_pop_order_by"];
    var_samp?: ValueTypes["order_var_samp_order_by"];
    variance?: ValueTypes["order_variance_order_by"];
  };
  /** input type for inserting array relation for remote table "order" */
  ["order_arr_rel_insert_input"]: {
    data: ValueTypes["order_insert_input"][];
    on_conflict?: ValueTypes["order_on_conflict"];
  };
  /** aggregate avg on columns */
  ["order_avg_fields"]: AliasType<{
    billing_address_id?: true;
    id?: true;
    shipping_address_id?: true;
    user_id?: true;
    __typename?: true;
  }>;
  /** order by avg() on columns of table "order" */
  ["order_avg_order_by"]: {
    billing_address_id?: ValueTypes["order_by"];
    id?: ValueTypes["order_by"];
    shipping_address_id?: ValueTypes["order_by"];
    user_id?: ValueTypes["order_by"];
  };
  /** Boolean expression to filter rows from the table "order". All fields are combined with a logical 'AND'. */
  ["order_bool_exp"]: {
    _and?: (ValueTypes["order_bool_exp"] | undefined)[];
    _not?: ValueTypes["order_bool_exp"];
    _or?: (ValueTypes["order_bool_exp"] | undefined)[];
    billing_address?: ValueTypes["address_bool_exp"];
    billing_address_id?: ValueTypes["Int_comparison_exp"];
    created_at?: ValueTypes["timestamptz_comparison_exp"];
    id?: ValueTypes["Int_comparison_exp"];
    is_shipped?: ValueTypes["Boolean_comparison_exp"];
    products?: ValueTypes["order_product_bool_exp"];
    shipping_address?: ValueTypes["address_bool_exp"];
    shipping_address_id?: ValueTypes["Int_comparison_exp"];
    updated_at?: ValueTypes["timestamptz_comparison_exp"];
    user?: ValueTypes["user_bool_exp"];
    user_id?: ValueTypes["Int_comparison_exp"];
  };
  /** column ordering options */
  ["order_by"]: order_by;
  /** unique or primary key constraints on table "order" */
  ["order_constraint"]: order_constraint;
  /** input type for incrementing integer column in table "order" */
  ["order_inc_input"]: {
    billing_address_id?: number;
    id?: number;
    shipping_address_id?: number;
    user_id?: number;
  };
  /** input type for inserting data into table "order" */
  ["order_insert_input"]: {
    billing_address?: ValueTypes["address_obj_rel_insert_input"];
    billing_address_id?: number;
    created_at?: ValueTypes["timestamptz"];
    id?: number;
    is_shipped?: boolean;
    products?: ValueTypes["order_product_arr_rel_insert_input"];
    shipping_address?: ValueTypes["address_obj_rel_insert_input"];
    shipping_address_id?: number;
    updated_at?: ValueTypes["timestamptz"];
    user?: ValueTypes["user_obj_rel_insert_input"];
    user_id?: number;
  };
  /** aggregate max on columns */
  ["order_max_fields"]: AliasType<{
    billing_address_id?: true;
    created_at?: true;
    id?: true;
    shipping_address_id?: true;
    updated_at?: true;
    user_id?: true;
    __typename?: true;
  }>;
  /** order by max() on columns of table "order" */
  ["order_max_order_by"]: {
    billing_address_id?: ValueTypes["order_by"];
    created_at?: ValueTypes["order_by"];
    id?: ValueTypes["order_by"];
    shipping_address_id?: ValueTypes["order_by"];
    updated_at?: ValueTypes["order_by"];
    user_id?: ValueTypes["order_by"];
  };
  /** aggregate min on columns */
  ["order_min_fields"]: AliasType<{
    billing_address_id?: true;
    created_at?: true;
    id?: true;
    shipping_address_id?: true;
    updated_at?: true;
    user_id?: true;
    __typename?: true;
  }>;
  /** order by min() on columns of table "order" */
  ["order_min_order_by"]: {
    billing_address_id?: ValueTypes["order_by"];
    created_at?: ValueTypes["order_by"];
    id?: ValueTypes["order_by"];
    shipping_address_id?: ValueTypes["order_by"];
    updated_at?: ValueTypes["order_by"];
    user_id?: ValueTypes["order_by"];
  };
  /** response of any mutation on the table "order" */
  ["order_mutation_response"]: AliasType<{
    /** number of affected rows by the mutation */
    affected_rows?: true;
    /** data of the affected rows by the mutation */
    returning?: ValueTypes["order"];
    __typename?: true;
  }>;
  /** input type for inserting object relation for remote table "order" */
  ["order_obj_rel_insert_input"]: {
    data: ValueTypes["order_insert_input"];
    on_conflict?: ValueTypes["order_on_conflict"];
  };
  /** on conflict condition type for table "order" */
  ["order_on_conflict"]: {
    constraint: ValueTypes["order_constraint"];
    update_columns: ValueTypes["order_update_column"][];
    where?: ValueTypes["order_bool_exp"];
  };
  /** ordering options when selecting data from "order" */
  ["order_order_by"]: {
    billing_address?: ValueTypes["address_order_by"];
    billing_address_id?: ValueTypes["order_by"];
    created_at?: ValueTypes["order_by"];
    id?: ValueTypes["order_by"];
    is_shipped?: ValueTypes["order_by"];
    products_aggregate?: ValueTypes["order_product_aggregate_order_by"];
    shipping_address?: ValueTypes["address_order_by"];
    shipping_address_id?: ValueTypes["order_by"];
    updated_at?: ValueTypes["order_by"];
    user?: ValueTypes["user_order_by"];
    user_id?: ValueTypes["order_by"];
  };
  /** primary key columns input for table: "order" */
  ["order_pk_columns_input"]: {
    id: number;
  };
  /** A product belonging to a customer order, along with a quantity


columns and relationships of "order_product" */
  ["order_product"]: AliasType<{
    created_at?: true;
    id?: true;
    /** An object relationship */
    order?: ValueTypes["order"];
    order_id?: true;
    /** An object relationship */
    product?: ValueTypes["product"];
    product_id?: true;
    quantity?: true;
    updated_at?: true;
    __typename?: true;
  }>;
  /** aggregated selection of "order_product" */
  ["order_product_aggregate"]: AliasType<{
    aggregate?: ValueTypes["order_product_aggregate_fields"];
    nodes?: ValueTypes["order_product"];
    __typename?: true;
  }>;
  /** aggregate fields of "order_product" */
  ["order_product_aggregate_fields"]: AliasType<{
    avg?: ValueTypes["order_product_avg_fields"];
    count?: [
      {
        columns?: ValueTypes["order_product_select_column"][];
        distinct?: boolean;
      },
      true
    ];
    max?: ValueTypes["order_product_max_fields"];
    min?: ValueTypes["order_product_min_fields"];
    stddev?: ValueTypes["order_product_stddev_fields"];
    stddev_pop?: ValueTypes["order_product_stddev_pop_fields"];
    stddev_samp?: ValueTypes["order_product_stddev_samp_fields"];
    sum?: ValueTypes["order_product_sum_fields"];
    var_pop?: ValueTypes["order_product_var_pop_fields"];
    var_samp?: ValueTypes["order_product_var_samp_fields"];
    variance?: ValueTypes["order_product_variance_fields"];
    __typename?: true;
  }>;
  /** order by aggregate values of table "order_product" */
  ["order_product_aggregate_order_by"]: {
    avg?: ValueTypes["order_product_avg_order_by"];
    count?: ValueTypes["order_by"];
    max?: ValueTypes["order_product_max_order_by"];
    min?: ValueTypes["order_product_min_order_by"];
    stddev?: ValueTypes["order_product_stddev_order_by"];
    stddev_pop?: ValueTypes["order_product_stddev_pop_order_by"];
    stddev_samp?: ValueTypes["order_product_stddev_samp_order_by"];
    sum?: ValueTypes["order_product_sum_order_by"];
    var_pop?: ValueTypes["order_product_var_pop_order_by"];
    var_samp?: ValueTypes["order_product_var_samp_order_by"];
    variance?: ValueTypes["order_product_variance_order_by"];
  };
  /** input type for inserting array relation for remote table "order_product" */
  ["order_product_arr_rel_insert_input"]: {
    data: ValueTypes["order_product_insert_input"][];
    on_conflict?: ValueTypes["order_product_on_conflict"];
  };
  /** aggregate avg on columns */
  ["order_product_avg_fields"]: AliasType<{
    id?: true;
    order_id?: true;
    product_id?: true;
    quantity?: true;
    __typename?: true;
  }>;
  /** order by avg() on columns of table "order_product" */
  ["order_product_avg_order_by"]: {
    id?: ValueTypes["order_by"];
    order_id?: ValueTypes["order_by"];
    product_id?: ValueTypes["order_by"];
    quantity?: ValueTypes["order_by"];
  };
  /** Boolean expression to filter rows from the table "order_product". All fields are combined with a logical 'AND'. */
  ["order_product_bool_exp"]: {
    _and?: (ValueTypes["order_product_bool_exp"] | undefined)[];
    _not?: ValueTypes["order_product_bool_exp"];
    _or?: (ValueTypes["order_product_bool_exp"] | undefined)[];
    created_at?: ValueTypes["timestamptz_comparison_exp"];
    id?: ValueTypes["Int_comparison_exp"];
    order?: ValueTypes["order_bool_exp"];
    order_id?: ValueTypes["Int_comparison_exp"];
    product?: ValueTypes["product_bool_exp"];
    product_id?: ValueTypes["Int_comparison_exp"];
    quantity?: ValueTypes["Int_comparison_exp"];
    updated_at?: ValueTypes["timestamptz_comparison_exp"];
  };
  /** unique or primary key constraints on table "order_product" */
  ["order_product_constraint"]: order_product_constraint;
  /** input type for incrementing integer column in table "order_product" */
  ["order_product_inc_input"]: {
    id?: number;
    order_id?: number;
    product_id?: number;
    quantity?: number;
  };
  /** input type for inserting data into table "order_product" */
  ["order_product_insert_input"]: {
    created_at?: ValueTypes["timestamptz"];
    id?: number;
    order?: ValueTypes["order_obj_rel_insert_input"];
    order_id?: number;
    product?: ValueTypes["product_obj_rel_insert_input"];
    product_id?: number;
    quantity?: number;
    updated_at?: ValueTypes["timestamptz"];
  };
  /** aggregate max on columns */
  ["order_product_max_fields"]: AliasType<{
    created_at?: true;
    id?: true;
    order_id?: true;
    product_id?: true;
    quantity?: true;
    updated_at?: true;
    __typename?: true;
  }>;
  /** order by max() on columns of table "order_product" */
  ["order_product_max_order_by"]: {
    created_at?: ValueTypes["order_by"];
    id?: ValueTypes["order_by"];
    order_id?: ValueTypes["order_by"];
    product_id?: ValueTypes["order_by"];
    quantity?: ValueTypes["order_by"];
    updated_at?: ValueTypes["order_by"];
  };
  /** aggregate min on columns */
  ["order_product_min_fields"]: AliasType<{
    created_at?: true;
    id?: true;
    order_id?: true;
    product_id?: true;
    quantity?: true;
    updated_at?: true;
    __typename?: true;
  }>;
  /** order by min() on columns of table "order_product" */
  ["order_product_min_order_by"]: {
    created_at?: ValueTypes["order_by"];
    id?: ValueTypes["order_by"];
    order_id?: ValueTypes["order_by"];
    product_id?: ValueTypes["order_by"];
    quantity?: ValueTypes["order_by"];
    updated_at?: ValueTypes["order_by"];
  };
  /** response of any mutation on the table "order_product" */
  ["order_product_mutation_response"]: AliasType<{
    /** number of affected rows by the mutation */
    affected_rows?: true;
    /** data of the affected rows by the mutation */
    returning?: ValueTypes["order_product"];
    __typename?: true;
  }>;
  /** input type for inserting object relation for remote table "order_product" */
  ["order_product_obj_rel_insert_input"]: {
    data: ValueTypes["order_product_insert_input"];
    on_conflict?: ValueTypes["order_product_on_conflict"];
  };
  /** on conflict condition type for table "order_product" */
  ["order_product_on_conflict"]: {
    constraint: ValueTypes["order_product_constraint"];
    update_columns: ValueTypes["order_product_update_column"][];
    where?: ValueTypes["order_product_bool_exp"];
  };
  /** ordering options when selecting data from "order_product" */
  ["order_product_order_by"]: {
    created_at?: ValueTypes["order_by"];
    id?: ValueTypes["order_by"];
    order?: ValueTypes["order_order_by"];
    order_id?: ValueTypes["order_by"];
    product?: ValueTypes["product_order_by"];
    product_id?: ValueTypes["order_by"];
    quantity?: ValueTypes["order_by"];
    updated_at?: ValueTypes["order_by"];
  };
  /** primary key columns input for table: "order_product" */
  ["order_product_pk_columns_input"]: {
    id: number;
  };
  /** select columns of table "order_product" */
  ["order_product_select_column"]: order_product_select_column;
  /** input type for updating data in table "order_product" */
  ["order_product_set_input"]: {
    created_at?: ValueTypes["timestamptz"];
    id?: number;
    order_id?: number;
    product_id?: number;
    quantity?: number;
    updated_at?: ValueTypes["timestamptz"];
  };
  /** aggregate stddev on columns */
  ["order_product_stddev_fields"]: AliasType<{
    id?: true;
    order_id?: true;
    product_id?: true;
    quantity?: true;
    __typename?: true;
  }>;
  /** order by stddev() on columns of table "order_product" */
  ["order_product_stddev_order_by"]: {
    id?: ValueTypes["order_by"];
    order_id?: ValueTypes["order_by"];
    product_id?: ValueTypes["order_by"];
    quantity?: ValueTypes["order_by"];
  };
  /** aggregate stddev_pop on columns */
  ["order_product_stddev_pop_fields"]: AliasType<{
    id?: true;
    order_id?: true;
    product_id?: true;
    quantity?: true;
    __typename?: true;
  }>;
  /** order by stddev_pop() on columns of table "order_product" */
  ["order_product_stddev_pop_order_by"]: {
    id?: ValueTypes["order_by"];
    order_id?: ValueTypes["order_by"];
    product_id?: ValueTypes["order_by"];
    quantity?: ValueTypes["order_by"];
  };
  /** aggregate stddev_samp on columns */
  ["order_product_stddev_samp_fields"]: AliasType<{
    id?: true;
    order_id?: true;
    product_id?: true;
    quantity?: true;
    __typename?: true;
  }>;
  /** order by stddev_samp() on columns of table "order_product" */
  ["order_product_stddev_samp_order_by"]: {
    id?: ValueTypes["order_by"];
    order_id?: ValueTypes["order_by"];
    product_id?: ValueTypes["order_by"];
    quantity?: ValueTypes["order_by"];
  };
  /** aggregate sum on columns */
  ["order_product_sum_fields"]: AliasType<{
    id?: true;
    order_id?: true;
    product_id?: true;
    quantity?: true;
    __typename?: true;
  }>;
  /** order by sum() on columns of table "order_product" */
  ["order_product_sum_order_by"]: {
    id?: ValueTypes["order_by"];
    order_id?: ValueTypes["order_by"];
    product_id?: ValueTypes["order_by"];
    quantity?: ValueTypes["order_by"];
  };
  /** update columns of table "order_product" */
  ["order_product_update_column"]: order_product_update_column;
  /** aggregate var_pop on columns */
  ["order_product_var_pop_fields"]: AliasType<{
    id?: true;
    order_id?: true;
    product_id?: true;
    quantity?: true;
    __typename?: true;
  }>;
  /** order by var_pop() on columns of table "order_product" */
  ["order_product_var_pop_order_by"]: {
    id?: ValueTypes["order_by"];
    order_id?: ValueTypes["order_by"];
    product_id?: ValueTypes["order_by"];
    quantity?: ValueTypes["order_by"];
  };
  /** aggregate var_samp on columns */
  ["order_product_var_samp_fields"]: AliasType<{
    id?: true;
    order_id?: true;
    product_id?: true;
    quantity?: true;
    __typename?: true;
  }>;
  /** order by var_samp() on columns of table "order_product" */
  ["order_product_var_samp_order_by"]: {
    id?: ValueTypes["order_by"];
    order_id?: ValueTypes["order_by"];
    product_id?: ValueTypes["order_by"];
    quantity?: ValueTypes["order_by"];
  };
  /** aggregate variance on columns */
  ["order_product_variance_fields"]: AliasType<{
    id?: true;
    order_id?: true;
    product_id?: true;
    quantity?: true;
    __typename?: true;
  }>;
  /** order by variance() on columns of table "order_product" */
  ["order_product_variance_order_by"]: {
    id?: ValueTypes["order_by"];
    order_id?: ValueTypes["order_by"];
    product_id?: ValueTypes["order_by"];
    quantity?: ValueTypes["order_by"];
  };
  /** select columns of table "order" */
  ["order_select_column"]: order_select_column;
  /** input type for updating data in table "order" */
  ["order_set_input"]: {
    billing_address_id?: number;
    created_at?: ValueTypes["timestamptz"];
    id?: number;
    is_shipped?: boolean;
    shipping_address_id?: number;
    updated_at?: ValueTypes["timestamptz"];
    user_id?: number;
  };
  /** aggregate stddev on columns */
  ["order_stddev_fields"]: AliasType<{
    billing_address_id?: true;
    id?: true;
    shipping_address_id?: true;
    user_id?: true;
    __typename?: true;
  }>;
  /** order by stddev() on columns of table "order" */
  ["order_stddev_order_by"]: {
    billing_address_id?: ValueTypes["order_by"];
    id?: ValueTypes["order_by"];
    shipping_address_id?: ValueTypes["order_by"];
    user_id?: ValueTypes["order_by"];
  };
  /** aggregate stddev_pop on columns */
  ["order_stddev_pop_fields"]: AliasType<{
    billing_address_id?: true;
    id?: true;
    shipping_address_id?: true;
    user_id?: true;
    __typename?: true;
  }>;
  /** order by stddev_pop() on columns of table "order" */
  ["order_stddev_pop_order_by"]: {
    billing_address_id?: ValueTypes["order_by"];
    id?: ValueTypes["order_by"];
    shipping_address_id?: ValueTypes["order_by"];
    user_id?: ValueTypes["order_by"];
  };
  /** aggregate stddev_samp on columns */
  ["order_stddev_samp_fields"]: AliasType<{
    billing_address_id?: true;
    id?: true;
    shipping_address_id?: true;
    user_id?: true;
    __typename?: true;
  }>;
  /** order by stddev_samp() on columns of table "order" */
  ["order_stddev_samp_order_by"]: {
    billing_address_id?: ValueTypes["order_by"];
    id?: ValueTypes["order_by"];
    shipping_address_id?: ValueTypes["order_by"];
    user_id?: ValueTypes["order_by"];
  };
  /** aggregate sum on columns */
  ["order_sum_fields"]: AliasType<{
    billing_address_id?: true;
    id?: true;
    shipping_address_id?: true;
    user_id?: true;
    __typename?: true;
  }>;
  /** order by sum() on columns of table "order" */
  ["order_sum_order_by"]: {
    billing_address_id?: ValueTypes["order_by"];
    id?: ValueTypes["order_by"];
    shipping_address_id?: ValueTypes["order_by"];
    user_id?: ValueTypes["order_by"];
  };
  /** update columns of table "order" */
  ["order_update_column"]: order_update_column;
  /** aggregate var_pop on columns */
  ["order_var_pop_fields"]: AliasType<{
    billing_address_id?: true;
    id?: true;
    shipping_address_id?: true;
    user_id?: true;
    __typename?: true;
  }>;
  /** order by var_pop() on columns of table "order" */
  ["order_var_pop_order_by"]: {
    billing_address_id?: ValueTypes["order_by"];
    id?: ValueTypes["order_by"];
    shipping_address_id?: ValueTypes["order_by"];
    user_id?: ValueTypes["order_by"];
  };
  /** aggregate var_samp on columns */
  ["order_var_samp_fields"]: AliasType<{
    billing_address_id?: true;
    id?: true;
    shipping_address_id?: true;
    user_id?: true;
    __typename?: true;
  }>;
  /** order by var_samp() on columns of table "order" */
  ["order_var_samp_order_by"]: {
    billing_address_id?: ValueTypes["order_by"];
    id?: ValueTypes["order_by"];
    shipping_address_id?: ValueTypes["order_by"];
    user_id?: ValueTypes["order_by"];
  };
  /** aggregate variance on columns */
  ["order_variance_fields"]: AliasType<{
    billing_address_id?: true;
    id?: true;
    shipping_address_id?: true;
    user_id?: true;
    __typename?: true;
  }>;
  /** order by variance() on columns of table "order" */
  ["order_variance_order_by"]: {
    billing_address_id?: ValueTypes["order_by"];
    id?: ValueTypes["order_by"];
    shipping_address_id?: ValueTypes["order_by"];
    user_id?: ValueTypes["order_by"];
  };
  ["PaymentIntentClientSecret"]: AliasType<{
    clientSecret?: true;
    __typename?: true;
  }>;
  /** columns and relationships of "product" */
  ["product"]: AliasType<{
    brand?: true;
    /** An object relationship */
    category?: ValueTypes["product_category_enum"];
    category_display_name?: true;
    created_at?: true;
    description?: true;
    id?: true;
    image_urls?: [
      {
        /** JSON select path */ path?: string;
      },
      true
    ];
    name?: true;
    orders?: [
      {
        /** distinct select on columns */
        distinct_on?: ValueTypes["order_product_select_column"][] /** limit the number of rows returned */;
        limit?: number /** skip the first n rows. Use only with order_by */;
        offset?: number /** sort the rows by one or more columns */;
        order_by?: ValueTypes["order_product_order_by"][] /** filter the rows returned */;
        where?: ValueTypes["order_product_bool_exp"];
      },
      ValueTypes["order_product"]
    ];
    orders_aggregate?: [
      {
        /** distinct select on columns */
        distinct_on?: ValueTypes["order_product_select_column"][] /** limit the number of rows returned */;
        limit?: number /** skip the first n rows. Use only with order_by */;
        offset?: number /** sort the rows by one or more columns */;
        order_by?: ValueTypes["order_product_order_by"][] /** filter the rows returned */;
        where?: ValueTypes["order_product_bool_exp"];
      },
      ValueTypes["order_product_aggregate"]
    ];
    price?: true;
    product_reviews?: [
      {
        /** distinct select on columns */
        distinct_on?: ValueTypes["product_review_select_column"][] /** limit the number of rows returned */;
        limit?: number /** skip the first n rows. Use only with order_by */;
        offset?: number /** sort the rows by one or more columns */;
        order_by?: ValueTypes["product_review_order_by"][] /** filter the rows returned */;
        where?: ValueTypes["product_review_bool_exp"];
      },
      ValueTypes["product_review"]
    ];
    product_reviews_aggregate?: [
      {
        /** distinct select on columns */
        distinct_on?: ValueTypes["product_review_select_column"][] /** limit the number of rows returned */;
        limit?: number /** skip the first n rows. Use only with order_by */;
        offset?: number /** sort the rows by one or more columns */;
        order_by?: ValueTypes["product_review_order_by"][] /** filter the rows returned */;
        where?: ValueTypes["product_review_bool_exp"];
      },
      ValueTypes["product_review_aggregate"]
    ];
    updated_at?: true;
    __typename?: true;
  }>;
  /** aggregated selection of "product" */
  ["product_aggregate"]: AliasType<{
    aggregate?: ValueTypes["product_aggregate_fields"];
    nodes?: ValueTypes["product"];
    __typename?: true;
  }>;
  /** aggregate fields of "product" */
  ["product_aggregate_fields"]: AliasType<{
    avg?: ValueTypes["product_avg_fields"];
    count?: [
      { columns?: ValueTypes["product_select_column"][]; distinct?: boolean },
      true
    ];
    max?: ValueTypes["product_max_fields"];
    min?: ValueTypes["product_min_fields"];
    stddev?: ValueTypes["product_stddev_fields"];
    stddev_pop?: ValueTypes["product_stddev_pop_fields"];
    stddev_samp?: ValueTypes["product_stddev_samp_fields"];
    sum?: ValueTypes["product_sum_fields"];
    var_pop?: ValueTypes["product_var_pop_fields"];
    var_samp?: ValueTypes["product_var_samp_fields"];
    variance?: ValueTypes["product_variance_fields"];
    __typename?: true;
  }>;
  /** order by aggregate values of table "product" */
  ["product_aggregate_order_by"]: {
    avg?: ValueTypes["product_avg_order_by"];
    count?: ValueTypes["order_by"];
    max?: ValueTypes["product_max_order_by"];
    min?: ValueTypes["product_min_order_by"];
    stddev?: ValueTypes["product_stddev_order_by"];
    stddev_pop?: ValueTypes["product_stddev_pop_order_by"];
    stddev_samp?: ValueTypes["product_stddev_samp_order_by"];
    sum?: ValueTypes["product_sum_order_by"];
    var_pop?: ValueTypes["product_var_pop_order_by"];
    var_samp?: ValueTypes["product_var_samp_order_by"];
    variance?: ValueTypes["product_variance_order_by"];
  };
  /** append existing jsonb value of filtered columns with new jsonb value */
  ["product_append_input"]: {
    image_urls?: ValueTypes["jsonb"];
  };
  /** input type for inserting array relation for remote table "product" */
  ["product_arr_rel_insert_input"]: {
    data: ValueTypes["product_insert_input"][];
    on_conflict?: ValueTypes["product_on_conflict"];
  };
  /** aggregate avg on columns */
  ["product_avg_fields"]: AliasType<{
    id?: true;
    price?: true;
    __typename?: true;
  }>;
  /** order by avg() on columns of table "product" */
  ["product_avg_order_by"]: {
    id?: ValueTypes["order_by"];
    price?: ValueTypes["order_by"];
  };
  /** Boolean expression to filter rows from the table "product". All fields are combined with a logical 'AND'. */
  ["product_bool_exp"]: {
    _and?: (ValueTypes["product_bool_exp"] | undefined)[];
    _not?: ValueTypes["product_bool_exp"];
    _or?: (ValueTypes["product_bool_exp"] | undefined)[];
    brand?: ValueTypes["String_comparison_exp"];
    category?: ValueTypes["product_category_enum_bool_exp"];
    category_display_name?: ValueTypes["String_comparison_exp"];
    created_at?: ValueTypes["timestamptz_comparison_exp"];
    description?: ValueTypes["String_comparison_exp"];
    id?: ValueTypes["Int_comparison_exp"];
    image_urls?: ValueTypes["jsonb_comparison_exp"];
    name?: ValueTypes["String_comparison_exp"];
    orders?: ValueTypes["order_product_bool_exp"];
    price?: ValueTypes["numeric_comparison_exp"];
    product_reviews?: ValueTypes["product_review_bool_exp"];
    updated_at?: ValueTypes["timestamptz_comparison_exp"];
  };
  /** columns and relationships of "product_category_enum" */
  ["product_category_enum"]: AliasType<{
    display_name?: true;
    name?: true;
    products?: [
      {
        /** distinct select on columns */
        distinct_on?: ValueTypes["product_select_column"][] /** limit the number of rows returned */;
        limit?: number /** skip the first n rows. Use only with order_by */;
        offset?: number /** sort the rows by one or more columns */;
        order_by?: ValueTypes["product_order_by"][] /** filter the rows returned */;
        where?: ValueTypes["product_bool_exp"];
      },
      ValueTypes["product"]
    ];
    products_aggregate?: [
      {
        /** distinct select on columns */
        distinct_on?: ValueTypes["product_select_column"][] /** limit the number of rows returned */;
        limit?: number /** skip the first n rows. Use only with order_by */;
        offset?: number /** sort the rows by one or more columns */;
        order_by?: ValueTypes["product_order_by"][] /** filter the rows returned */;
        where?: ValueTypes["product_bool_exp"];
      },
      ValueTypes["product_aggregate"]
    ];
    __typename?: true;
  }>;
  /** aggregated selection of "product_category_enum" */
  ["product_category_enum_aggregate"]: AliasType<{
    aggregate?: ValueTypes["product_category_enum_aggregate_fields"];
    nodes?: ValueTypes["product_category_enum"];
    __typename?: true;
  }>;
  /** aggregate fields of "product_category_enum" */
  ["product_category_enum_aggregate_fields"]: AliasType<{
    count?: [
      {
        columns?: ValueTypes["product_category_enum_select_column"][];
        distinct?: boolean;
      },
      true
    ];
    max?: ValueTypes["product_category_enum_max_fields"];
    min?: ValueTypes["product_category_enum_min_fields"];
    __typename?: true;
  }>;
  /** order by aggregate values of table "product_category_enum" */
  ["product_category_enum_aggregate_order_by"]: {
    count?: ValueTypes["order_by"];
    max?: ValueTypes["product_category_enum_max_order_by"];
    min?: ValueTypes["product_category_enum_min_order_by"];
  };
  /** input type for inserting array relation for remote table "product_category_enum" */
  ["product_category_enum_arr_rel_insert_input"]: {
    data: ValueTypes["product_category_enum_insert_input"][];
    on_conflict?: ValueTypes["product_category_enum_on_conflict"];
  };
  /** Boolean expression to filter rows from the table "product_category_enum". All fields are combined with a logical 'AND'. */
  ["product_category_enum_bool_exp"]: {
    _and?: (ValueTypes["product_category_enum_bool_exp"] | undefined)[];
    _not?: ValueTypes["product_category_enum_bool_exp"];
    _or?: (ValueTypes["product_category_enum_bool_exp"] | undefined)[];
    display_name?: ValueTypes["String_comparison_exp"];
    name?: ValueTypes["String_comparison_exp"];
    products?: ValueTypes["product_bool_exp"];
  };
  /** unique or primary key constraints on table "product_category_enum" */
  ["product_category_enum_constraint"]: product_category_enum_constraint;
  /** input type for inserting data into table "product_category_enum" */
  ["product_category_enum_insert_input"]: {
    display_name?: string;
    name?: string;
    products?: ValueTypes["product_arr_rel_insert_input"];
  };
  /** aggregate max on columns */
  ["product_category_enum_max_fields"]: AliasType<{
    display_name?: true;
    name?: true;
    __typename?: true;
  }>;
  /** order by max() on columns of table "product_category_enum" */
  ["product_category_enum_max_order_by"]: {
    display_name?: ValueTypes["order_by"];
    name?: ValueTypes["order_by"];
  };
  /** aggregate min on columns */
  ["product_category_enum_min_fields"]: AliasType<{
    display_name?: true;
    name?: true;
    __typename?: true;
  }>;
  /** order by min() on columns of table "product_category_enum" */
  ["product_category_enum_min_order_by"]: {
    display_name?: ValueTypes["order_by"];
    name?: ValueTypes["order_by"];
  };
  /** response of any mutation on the table "product_category_enum" */
  ["product_category_enum_mutation_response"]: AliasType<{
    /** number of affected rows by the mutation */
    affected_rows?: true;
    /** data of the affected rows by the mutation */
    returning?: ValueTypes["product_category_enum"];
    __typename?: true;
  }>;
  /** input type for inserting object relation for remote table "product_category_enum" */
  ["product_category_enum_obj_rel_insert_input"]: {
    data: ValueTypes["product_category_enum_insert_input"];
    on_conflict?: ValueTypes["product_category_enum_on_conflict"];
  };
  /** on conflict condition type for table "product_category_enum" */
  ["product_category_enum_on_conflict"]: {
    constraint: ValueTypes["product_category_enum_constraint"];
    update_columns: ValueTypes["product_category_enum_update_column"][];
    where?: ValueTypes["product_category_enum_bool_exp"];
  };
  /** ordering options when selecting data from "product_category_enum" */
  ["product_category_enum_order_by"]: {
    display_name?: ValueTypes["order_by"];
    name?: ValueTypes["order_by"];
    products_aggregate?: ValueTypes["product_aggregate_order_by"];
  };
  /** primary key columns input for table: "product_category_enum" */
  ["product_category_enum_pk_columns_input"]: {
    name: string;
  };
  /** select columns of table "product_category_enum" */
  ["product_category_enum_select_column"]: product_category_enum_select_column;
  /** input type for updating data in table "product_category_enum" */
  ["product_category_enum_set_input"]: {
    display_name?: string;
    name?: string;
  };
  /** update columns of table "product_category_enum" */
  ["product_category_enum_update_column"]: product_category_enum_update_column;
  /** unique or primary key constraints on table "product" */
  ["product_constraint"]: product_constraint;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  ["product_delete_at_path_input"]: {
    image_urls?: (string | undefined)[];
  };
  /** delete the array element with specified index (negative integers count from the
end). throws an error if top level container is not an array */
  ["product_delete_elem_input"]: {
    image_urls?: number;
  };
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  ["product_delete_key_input"]: {
    image_urls?: string;
  };
  /** input type for incrementing integer column in table "product" */
  ["product_inc_input"]: {
    id?: number;
    price?: ValueTypes["numeric"];
  };
  /** input type for inserting data into table "product" */
  ["product_insert_input"]: {
    brand?: string;
    category?: ValueTypes["product_category_enum_obj_rel_insert_input"];
    category_display_name?: string;
    created_at?: ValueTypes["timestamptz"];
    description?: string;
    id?: number;
    image_urls?: ValueTypes["jsonb"];
    name?: string;
    orders?: ValueTypes["order_product_arr_rel_insert_input"];
    price?: ValueTypes["numeric"];
    product_reviews?: ValueTypes["product_review_arr_rel_insert_input"];
    updated_at?: ValueTypes["timestamptz"];
  };
  /** aggregate max on columns */
  ["product_max_fields"]: AliasType<{
    brand?: true;
    category_display_name?: true;
    created_at?: true;
    description?: true;
    id?: true;
    name?: true;
    price?: true;
    updated_at?: true;
    __typename?: true;
  }>;
  /** order by max() on columns of table "product" */
  ["product_max_order_by"]: {
    brand?: ValueTypes["order_by"];
    category_display_name?: ValueTypes["order_by"];
    created_at?: ValueTypes["order_by"];
    description?: ValueTypes["order_by"];
    id?: ValueTypes["order_by"];
    name?: ValueTypes["order_by"];
    price?: ValueTypes["order_by"];
    updated_at?: ValueTypes["order_by"];
  };
  /** aggregate min on columns */
  ["product_min_fields"]: AliasType<{
    brand?: true;
    category_display_name?: true;
    created_at?: true;
    description?: true;
    id?: true;
    name?: true;
    price?: true;
    updated_at?: true;
    __typename?: true;
  }>;
  /** order by min() on columns of table "product" */
  ["product_min_order_by"]: {
    brand?: ValueTypes["order_by"];
    category_display_name?: ValueTypes["order_by"];
    created_at?: ValueTypes["order_by"];
    description?: ValueTypes["order_by"];
    id?: ValueTypes["order_by"];
    name?: ValueTypes["order_by"];
    price?: ValueTypes["order_by"];
    updated_at?: ValueTypes["order_by"];
  };
  /** response of any mutation on the table "product" */
  ["product_mutation_response"]: AliasType<{
    /** number of affected rows by the mutation */
    affected_rows?: true;
    /** data of the affected rows by the mutation */
    returning?: ValueTypes["product"];
    __typename?: true;
  }>;
  /** input type for inserting object relation for remote table "product" */
  ["product_obj_rel_insert_input"]: {
    data: ValueTypes["product_insert_input"];
    on_conflict?: ValueTypes["product_on_conflict"];
  };
  /** on conflict condition type for table "product" */
  ["product_on_conflict"]: {
    constraint: ValueTypes["product_constraint"];
    update_columns: ValueTypes["product_update_column"][];
    where?: ValueTypes["product_bool_exp"];
  };
  /** ordering options when selecting data from "product" */
  ["product_order_by"]: {
    brand?: ValueTypes["order_by"];
    category?: ValueTypes["product_category_enum_order_by"];
    category_display_name?: ValueTypes["order_by"];
    created_at?: ValueTypes["order_by"];
    description?: ValueTypes["order_by"];
    id?: ValueTypes["order_by"];
    image_urls?: ValueTypes["order_by"];
    name?: ValueTypes["order_by"];
    orders_aggregate?: ValueTypes["order_product_aggregate_order_by"];
    price?: ValueTypes["order_by"];
    product_reviews_aggregate?: ValueTypes["product_review_aggregate_order_by"];
    updated_at?: ValueTypes["order_by"];
  };
  /** primary key columns input for table: "product" */
  ["product_pk_columns_input"]: {
    id: number;
  };
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  ["product_prepend_input"]: {
    image_urls?: ValueTypes["jsonb"];
  };
  /** A review for a product which a customer has purchased before


columns and relationships of "product_review" */
  ["product_review"]: AliasType<{
    comment?: true;
    created_at?: true;
    id?: true;
    /** An object relationship */
    product?: ValueTypes["product"];
    product_id?: true;
    rating?: true;
    updated_at?: true;
    /** An object relationship */
    user?: ValueTypes["user"];
    user_id?: true;
    __typename?: true;
  }>;
  /** aggregated selection of "product_review" */
  ["product_review_aggregate"]: AliasType<{
    aggregate?: ValueTypes["product_review_aggregate_fields"];
    nodes?: ValueTypes["product_review"];
    __typename?: true;
  }>;
  /** aggregate fields of "product_review" */
  ["product_review_aggregate_fields"]: AliasType<{
    avg?: ValueTypes["product_review_avg_fields"];
    count?: [
      {
        columns?: ValueTypes["product_review_select_column"][];
        distinct?: boolean;
      },
      true
    ];
    max?: ValueTypes["product_review_max_fields"];
    min?: ValueTypes["product_review_min_fields"];
    stddev?: ValueTypes["product_review_stddev_fields"];
    stddev_pop?: ValueTypes["product_review_stddev_pop_fields"];
    stddev_samp?: ValueTypes["product_review_stddev_samp_fields"];
    sum?: ValueTypes["product_review_sum_fields"];
    var_pop?: ValueTypes["product_review_var_pop_fields"];
    var_samp?: ValueTypes["product_review_var_samp_fields"];
    variance?: ValueTypes["product_review_variance_fields"];
    __typename?: true;
  }>;
  /** order by aggregate values of table "product_review" */
  ["product_review_aggregate_order_by"]: {
    avg?: ValueTypes["product_review_avg_order_by"];
    count?: ValueTypes["order_by"];
    max?: ValueTypes["product_review_max_order_by"];
    min?: ValueTypes["product_review_min_order_by"];
    stddev?: ValueTypes["product_review_stddev_order_by"];
    stddev_pop?: ValueTypes["product_review_stddev_pop_order_by"];
    stddev_samp?: ValueTypes["product_review_stddev_samp_order_by"];
    sum?: ValueTypes["product_review_sum_order_by"];
    var_pop?: ValueTypes["product_review_var_pop_order_by"];
    var_samp?: ValueTypes["product_review_var_samp_order_by"];
    variance?: ValueTypes["product_review_variance_order_by"];
  };
  /** input type for inserting array relation for remote table "product_review" */
  ["product_review_arr_rel_insert_input"]: {
    data: ValueTypes["product_review_insert_input"][];
    on_conflict?: ValueTypes["product_review_on_conflict"];
  };
  /** aggregate avg on columns */
  ["product_review_avg_fields"]: AliasType<{
    id?: true;
    product_id?: true;
    rating?: true;
    user_id?: true;
    __typename?: true;
  }>;
  /** order by avg() on columns of table "product_review" */
  ["product_review_avg_order_by"]: {
    id?: ValueTypes["order_by"];
    product_id?: ValueTypes["order_by"];
    rating?: ValueTypes["order_by"];
    user_id?: ValueTypes["order_by"];
  };
  /** Boolean expression to filter rows from the table "product_review". All fields are combined with a logical 'AND'. */
  ["product_review_bool_exp"]: {
    _and?: (ValueTypes["product_review_bool_exp"] | undefined)[];
    _not?: ValueTypes["product_review_bool_exp"];
    _or?: (ValueTypes["product_review_bool_exp"] | undefined)[];
    comment?: ValueTypes["String_comparison_exp"];
    created_at?: ValueTypes["timestamptz_comparison_exp"];
    id?: ValueTypes["Int_comparison_exp"];
    product?: ValueTypes["product_bool_exp"];
    product_id?: ValueTypes["Int_comparison_exp"];
    rating?: ValueTypes["Int_comparison_exp"];
    updated_at?: ValueTypes["timestamptz_comparison_exp"];
    user?: ValueTypes["user_bool_exp"];
    user_id?: ValueTypes["Int_comparison_exp"];
  };
  /** unique or primary key constraints on table "product_review" */
  ["product_review_constraint"]: product_review_constraint;
  /** input type for incrementing integer column in table "product_review" */
  ["product_review_inc_input"]: {
    id?: number;
    product_id?: number;
    rating?: number;
    user_id?: number;
  };
  /** input type for inserting data into table "product_review" */
  ["product_review_insert_input"]: {
    comment?: string;
    created_at?: ValueTypes["timestamptz"];
    id?: number;
    product?: ValueTypes["product_obj_rel_insert_input"];
    product_id?: number;
    rating?: number;
    updated_at?: ValueTypes["timestamptz"];
    user?: ValueTypes["user_obj_rel_insert_input"];
    user_id?: number;
  };
  /** aggregate max on columns */
  ["product_review_max_fields"]: AliasType<{
    comment?: true;
    created_at?: true;
    id?: true;
    product_id?: true;
    rating?: true;
    updated_at?: true;
    user_id?: true;
    __typename?: true;
  }>;
  /** order by max() on columns of table "product_review" */
  ["product_review_max_order_by"]: {
    comment?: ValueTypes["order_by"];
    created_at?: ValueTypes["order_by"];
    id?: ValueTypes["order_by"];
    product_id?: ValueTypes["order_by"];
    rating?: ValueTypes["order_by"];
    updated_at?: ValueTypes["order_by"];
    user_id?: ValueTypes["order_by"];
  };
  /** aggregate min on columns */
  ["product_review_min_fields"]: AliasType<{
    comment?: true;
    created_at?: true;
    id?: true;
    product_id?: true;
    rating?: true;
    updated_at?: true;
    user_id?: true;
    __typename?: true;
  }>;
  /** order by min() on columns of table "product_review" */
  ["product_review_min_order_by"]: {
    comment?: ValueTypes["order_by"];
    created_at?: ValueTypes["order_by"];
    id?: ValueTypes["order_by"];
    product_id?: ValueTypes["order_by"];
    rating?: ValueTypes["order_by"];
    updated_at?: ValueTypes["order_by"];
    user_id?: ValueTypes["order_by"];
  };
  /** response of any mutation on the table "product_review" */
  ["product_review_mutation_response"]: AliasType<{
    /** number of affected rows by the mutation */
    affected_rows?: true;
    /** data of the affected rows by the mutation */
    returning?: ValueTypes["product_review"];
    __typename?: true;
  }>;
  /** input type for inserting object relation for remote table "product_review" */
  ["product_review_obj_rel_insert_input"]: {
    data: ValueTypes["product_review_insert_input"];
    on_conflict?: ValueTypes["product_review_on_conflict"];
  };
  /** on conflict condition type for table "product_review" */
  ["product_review_on_conflict"]: {
    constraint: ValueTypes["product_review_constraint"];
    update_columns: ValueTypes["product_review_update_column"][];
    where?: ValueTypes["product_review_bool_exp"];
  };
  /** ordering options when selecting data from "product_review" */
  ["product_review_order_by"]: {
    comment?: ValueTypes["order_by"];
    created_at?: ValueTypes["order_by"];
    id?: ValueTypes["order_by"];
    product?: ValueTypes["product_order_by"];
    product_id?: ValueTypes["order_by"];
    rating?: ValueTypes["order_by"];
    updated_at?: ValueTypes["order_by"];
    user?: ValueTypes["user_order_by"];
    user_id?: ValueTypes["order_by"];
  };
  /** primary key columns input for table: "product_review" */
  ["product_review_pk_columns_input"]: {
    id: number;
  };
  /** select columns of table "product_review" */
  ["product_review_select_column"]: product_review_select_column;
  /** input type for updating data in table "product_review" */
  ["product_review_set_input"]: {
    comment?: string;
    created_at?: ValueTypes["timestamptz"];
    id?: number;
    product_id?: number;
    rating?: number;
    updated_at?: ValueTypes["timestamptz"];
    user_id?: number;
  };
  /** aggregate stddev on columns */
  ["product_review_stddev_fields"]: AliasType<{
    id?: true;
    product_id?: true;
    rating?: true;
    user_id?: true;
    __typename?: true;
  }>;
  /** order by stddev() on columns of table "product_review" */
  ["product_review_stddev_order_by"]: {
    id?: ValueTypes["order_by"];
    product_id?: ValueTypes["order_by"];
    rating?: ValueTypes["order_by"];
    user_id?: ValueTypes["order_by"];
  };
  /** aggregate stddev_pop on columns */
  ["product_review_stddev_pop_fields"]: AliasType<{
    id?: true;
    product_id?: true;
    rating?: true;
    user_id?: true;
    __typename?: true;
  }>;
  /** order by stddev_pop() on columns of table "product_review" */
  ["product_review_stddev_pop_order_by"]: {
    id?: ValueTypes["order_by"];
    product_id?: ValueTypes["order_by"];
    rating?: ValueTypes["order_by"];
    user_id?: ValueTypes["order_by"];
  };
  /** aggregate stddev_samp on columns */
  ["product_review_stddev_samp_fields"]: AliasType<{
    id?: true;
    product_id?: true;
    rating?: true;
    user_id?: true;
    __typename?: true;
  }>;
  /** order by stddev_samp() on columns of table "product_review" */
  ["product_review_stddev_samp_order_by"]: {
    id?: ValueTypes["order_by"];
    product_id?: ValueTypes["order_by"];
    rating?: ValueTypes["order_by"];
    user_id?: ValueTypes["order_by"];
  };
  /** aggregate sum on columns */
  ["product_review_sum_fields"]: AliasType<{
    id?: true;
    product_id?: true;
    rating?: true;
    user_id?: true;
    __typename?: true;
  }>;
  /** order by sum() on columns of table "product_review" */
  ["product_review_sum_order_by"]: {
    id?: ValueTypes["order_by"];
    product_id?: ValueTypes["order_by"];
    rating?: ValueTypes["order_by"];
    user_id?: ValueTypes["order_by"];
  };
  /** update columns of table "product_review" */
  ["product_review_update_column"]: product_review_update_column;
  /** aggregate var_pop on columns */
  ["product_review_var_pop_fields"]: AliasType<{
    id?: true;
    product_id?: true;
    rating?: true;
    user_id?: true;
    __typename?: true;
  }>;
  /** order by var_pop() on columns of table "product_review" */
  ["product_review_var_pop_order_by"]: {
    id?: ValueTypes["order_by"];
    product_id?: ValueTypes["order_by"];
    rating?: ValueTypes["order_by"];
    user_id?: ValueTypes["order_by"];
  };
  /** aggregate var_samp on columns */
  ["product_review_var_samp_fields"]: AliasType<{
    id?: true;
    product_id?: true;
    rating?: true;
    user_id?: true;
    __typename?: true;
  }>;
  /** order by var_samp() on columns of table "product_review" */
  ["product_review_var_samp_order_by"]: {
    id?: ValueTypes["order_by"];
    product_id?: ValueTypes["order_by"];
    rating?: ValueTypes["order_by"];
    user_id?: ValueTypes["order_by"];
  };
  /** aggregate variance on columns */
  ["product_review_variance_fields"]: AliasType<{
    id?: true;
    product_id?: true;
    rating?: true;
    user_id?: true;
    __typename?: true;
  }>;
  /** order by variance() on columns of table "product_review" */
  ["product_review_variance_order_by"]: {
    id?: ValueTypes["order_by"];
    product_id?: ValueTypes["order_by"];
    rating?: ValueTypes["order_by"];
    user_id?: ValueTypes["order_by"];
  };
  /** select columns of table "product" */
  ["product_select_column"]: product_select_column;
  /** input type for updating data in table "product" */
  ["product_set_input"]: {
    brand?: string;
    category_display_name?: string;
    created_at?: ValueTypes["timestamptz"];
    description?: string;
    id?: number;
    image_urls?: ValueTypes["jsonb"];
    name?: string;
    price?: ValueTypes["numeric"];
    updated_at?: ValueTypes["timestamptz"];
  };
  /** aggregate stddev on columns */
  ["product_stddev_fields"]: AliasType<{
    id?: true;
    price?: true;
    __typename?: true;
  }>;
  /** order by stddev() on columns of table "product" */
  ["product_stddev_order_by"]: {
    id?: ValueTypes["order_by"];
    price?: ValueTypes["order_by"];
  };
  /** aggregate stddev_pop on columns */
  ["product_stddev_pop_fields"]: AliasType<{
    id?: true;
    price?: true;
    __typename?: true;
  }>;
  /** order by stddev_pop() on columns of table "product" */
  ["product_stddev_pop_order_by"]: {
    id?: ValueTypes["order_by"];
    price?: ValueTypes["order_by"];
  };
  /** aggregate stddev_samp on columns */
  ["product_stddev_samp_fields"]: AliasType<{
    id?: true;
    price?: true;
    __typename?: true;
  }>;
  /** order by stddev_samp() on columns of table "product" */
  ["product_stddev_samp_order_by"]: {
    id?: ValueTypes["order_by"];
    price?: ValueTypes["order_by"];
  };
  /** aggregate sum on columns */
  ["product_sum_fields"]: AliasType<{
    id?: true;
    price?: true;
    __typename?: true;
  }>;
  /** order by sum() on columns of table "product" */
  ["product_sum_order_by"]: {
    id?: ValueTypes["order_by"];
    price?: ValueTypes["order_by"];
  };
  /** update columns of table "product" */
  ["product_update_column"]: product_update_column;
  /** aggregate var_pop on columns */
  ["product_var_pop_fields"]: AliasType<{
    id?: true;
    price?: true;
    __typename?: true;
  }>;
  /** order by var_pop() on columns of table "product" */
  ["product_var_pop_order_by"]: {
    id?: ValueTypes["order_by"];
    price?: ValueTypes["order_by"];
  };
  /** aggregate var_samp on columns */
  ["product_var_samp_fields"]: AliasType<{
    id?: true;
    price?: true;
    __typename?: true;
  }>;
  /** order by var_samp() on columns of table "product" */
  ["product_var_samp_order_by"]: {
    id?: ValueTypes["order_by"];
    price?: ValueTypes["order_by"];
  };
  /** aggregate variance on columns */
  ["product_variance_fields"]: AliasType<{
    id?: true;
    price?: true;
    __typename?: true;
  }>;
  /** order by variance() on columns of table "product" */
  ["product_variance_order_by"]: {
    id?: ValueTypes["order_by"];
    price?: ValueTypes["order_by"];
  };
  /** query root */
  ["query_root"]: AliasType<{
    address?: [
      {
        /** distinct select on columns */
        distinct_on?: ValueTypes["address_select_column"][] /** limit the number of rows returned */;
        limit?: number /** skip the first n rows. Use only with order_by */;
        offset?: number /** sort the rows by one or more columns */;
        order_by?: ValueTypes["address_order_by"][] /** filter the rows returned */;
        where?: ValueTypes["address_bool_exp"];
      },
      ValueTypes["address"]
    ];
    address_aggregate?: [
      {
        /** distinct select on columns */
        distinct_on?: ValueTypes["address_select_column"][] /** limit the number of rows returned */;
        limit?: number /** skip the first n rows. Use only with order_by */;
        offset?: number /** sort the rows by one or more columns */;
        order_by?: ValueTypes["address_order_by"][] /** filter the rows returned */;
        where?: ValueTypes["address_bool_exp"];
      },
      ValueTypes["address_aggregate"]
    ];
    address_by_pk?: [{ id: number }, ValueTypes["address"]];
    adminLogin?: [{ params: ValueTypes["AdminLoginInput"] }, ValueTypes["JWT"]];
    order?: [
      {
        /** distinct select on columns */
        distinct_on?: ValueTypes["order_select_column"][] /** limit the number of rows returned */;
        limit?: number /** skip the first n rows. Use only with order_by */;
        offset?: number /** sort the rows by one or more columns */;
        order_by?: ValueTypes["order_order_by"][] /** filter the rows returned */;
        where?: ValueTypes["order_bool_exp"];
      },
      ValueTypes["order"]
    ];
    order_aggregate?: [
      {
        /** distinct select on columns */
        distinct_on?: ValueTypes["order_select_column"][] /** limit the number of rows returned */;
        limit?: number /** skip the first n rows. Use only with order_by */;
        offset?: number /** sort the rows by one or more columns */;
        order_by?: ValueTypes["order_order_by"][] /** filter the rows returned */;
        where?: ValueTypes["order_bool_exp"];
      },
      ValueTypes["order_aggregate"]
    ];
    order_by_pk?: [{ id: number }, ValueTypes["order"]];
    order_product?: [
      {
        /** distinct select on columns */
        distinct_on?: ValueTypes["order_product_select_column"][] /** limit the number of rows returned */;
        limit?: number /** skip the first n rows. Use only with order_by */;
        offset?: number /** sort the rows by one or more columns */;
        order_by?: ValueTypes["order_product_order_by"][] /** filter the rows returned */;
        where?: ValueTypes["order_product_bool_exp"];
      },
      ValueTypes["order_product"]
    ];
    order_product_aggregate?: [
      {
        /** distinct select on columns */
        distinct_on?: ValueTypes["order_product_select_column"][] /** limit the number of rows returned */;
        limit?: number /** skip the first n rows. Use only with order_by */;
        offset?: number /** sort the rows by one or more columns */;
        order_by?: ValueTypes["order_product_order_by"][] /** filter the rows returned */;
        where?: ValueTypes["order_product_bool_exp"];
      },
      ValueTypes["order_product_aggregate"]
    ];
    order_product_by_pk?: [{ id: number }, ValueTypes["order_product"]];
    product?: [
      {
        /** distinct select on columns */
        distinct_on?: ValueTypes["product_select_column"][] /** limit the number of rows returned */;
        limit?: number /** skip the first n rows. Use only with order_by */;
        offset?: number /** sort the rows by one or more columns */;
        order_by?: ValueTypes["product_order_by"][] /** filter the rows returned */;
        where?: ValueTypes["product_bool_exp"];
      },
      ValueTypes["product"]
    ];
    product_aggregate?: [
      {
        /** distinct select on columns */
        distinct_on?: ValueTypes["product_select_column"][] /** limit the number of rows returned */;
        limit?: number /** skip the first n rows. Use only with order_by */;
        offset?: number /** sort the rows by one or more columns */;
        order_by?: ValueTypes["product_order_by"][] /** filter the rows returned */;
        where?: ValueTypes["product_bool_exp"];
      },
      ValueTypes["product_aggregate"]
    ];
    product_by_pk?: [{ id: number }, ValueTypes["product"]];
    product_category_enum?: [
      {
        /** distinct select on columns */
        distinct_on?: ValueTypes["product_category_enum_select_column"][] /** limit the number of rows returned */;
        limit?: number /** skip the first n rows. Use only with order_by */;
        offset?: number /** sort the rows by one or more columns */;
        order_by?: ValueTypes["product_category_enum_order_by"][] /** filter the rows returned */;
        where?: ValueTypes["product_category_enum_bool_exp"];
      },
      ValueTypes["product_category_enum"]
    ];
    product_category_enum_aggregate?: [
      {
        /** distinct select on columns */
        distinct_on?: ValueTypes["product_category_enum_select_column"][] /** limit the number of rows returned */;
        limit?: number /** skip the first n rows. Use only with order_by */;
        offset?: number /** sort the rows by one or more columns */;
        order_by?: ValueTypes["product_category_enum_order_by"][] /** filter the rows returned */;
        where?: ValueTypes["product_category_enum_bool_exp"];
      },
      ValueTypes["product_category_enum_aggregate"]
    ];
    product_category_enum_by_pk?: [
      { name: string },
      ValueTypes["product_category_enum"]
    ];
    product_review?: [
      {
        /** distinct select on columns */
        distinct_on?: ValueTypes["product_review_select_column"][] /** limit the number of rows returned */;
        limit?: number /** skip the first n rows. Use only with order_by */;
        offset?: number /** sort the rows by one or more columns */;
        order_by?: ValueTypes["product_review_order_by"][] /** filter the rows returned */;
        where?: ValueTypes["product_review_bool_exp"];
      },
      ValueTypes["product_review"]
    ];
    product_review_aggregate?: [
      {
        /** distinct select on columns */
        distinct_on?: ValueTypes["product_review_select_column"][] /** limit the number of rows returned */;
        limit?: number /** skip the first n rows. Use only with order_by */;
        offset?: number /** sort the rows by one or more columns */;
        order_by?: ValueTypes["product_review_order_by"][] /** filter the rows returned */;
        where?: ValueTypes["product_review_bool_exp"];
      },
      ValueTypes["product_review_aggregate"]
    ];
    product_review_by_pk?: [{ id: number }, ValueTypes["product_review"]];
    refreshToken?: [
      { params: ValueTypes["RefreshTokenInput"] },
      ValueTypes["RefreshTokenJWT"]
    ];
    site_admin?: [
      {
        /** distinct select on columns */
        distinct_on?: ValueTypes["site_admin_select_column"][] /** limit the number of rows returned */;
        limit?: number /** skip the first n rows. Use only with order_by */;
        offset?: number /** sort the rows by one or more columns */;
        order_by?: ValueTypes["site_admin_order_by"][] /** filter the rows returned */;
        where?: ValueTypes["site_admin_bool_exp"];
      },
      ValueTypes["site_admin"]
    ];
    site_admin_aggregate?: [
      {
        /** distinct select on columns */
        distinct_on?: ValueTypes["site_admin_select_column"][] /** limit the number of rows returned */;
        limit?: number /** skip the first n rows. Use only with order_by */;
        offset?: number /** sort the rows by one or more columns */;
        order_by?: ValueTypes["site_admin_order_by"][] /** filter the rows returned */;
        where?: ValueTypes["site_admin_bool_exp"];
      },
      ValueTypes["site_admin_aggregate"]
    ];
    site_admin_by_pk?: [{ id: number }, ValueTypes["site_admin"]];
    user?: [
      {
        /** distinct select on columns */
        distinct_on?: ValueTypes["user_select_column"][] /** limit the number of rows returned */;
        limit?: number /** skip the first n rows. Use only with order_by */;
        offset?: number /** sort the rows by one or more columns */;
        order_by?: ValueTypes["user_order_by"][] /** filter the rows returned */;
        where?: ValueTypes["user_bool_exp"];
      },
      ValueTypes["user"]
    ];
    user_aggregate?: [
      {
        /** distinct select on columns */
        distinct_on?: ValueTypes["user_select_column"][] /** limit the number of rows returned */;
        limit?: number /** skip the first n rows. Use only with order_by */;
        offset?: number /** sort the rows by one or more columns */;
        order_by?: ValueTypes["user_order_by"][] /** filter the rows returned */;
        where?: ValueTypes["user_bool_exp"];
      },
      ValueTypes["user_aggregate"]
    ];
    user_by_pk?: [{ id: number }, ValueTypes["user"]];
    __typename?: true;
  }>;
  ["RefreshTokenInput"]: {
    refreshToken: string;
  };
  ["RefreshTokenJWT"]: AliasType<{
    token?: true;
    __typename?: true;
  }>;
  ["SignupInput"]: {
    email: string;
    name: string;
    password: string;
  };
  /** Someone administrative capabilities on the site


columns and relationships of "site_admin" */
  ["site_admin"]: AliasType<{
    created_at?: true;
    email?: true;
    id?: true;
    /** A bcrypt-hashed version of the admin password, compared against securely in the JWT Auth API handler for sign-in */
    password?: true;
    updated_at?: true;
    __typename?: true;
  }>;
  /** aggregated selection of "site_admin" */
  ["site_admin_aggregate"]: AliasType<{
    aggregate?: ValueTypes["site_admin_aggregate_fields"];
    nodes?: ValueTypes["site_admin"];
    __typename?: true;
  }>;
  /** aggregate fields of "site_admin" */
  ["site_admin_aggregate_fields"]: AliasType<{
    avg?: ValueTypes["site_admin_avg_fields"];
    count?: [
      {
        columns?: ValueTypes["site_admin_select_column"][];
        distinct?: boolean;
      },
      true
    ];
    max?: ValueTypes["site_admin_max_fields"];
    min?: ValueTypes["site_admin_min_fields"];
    stddev?: ValueTypes["site_admin_stddev_fields"];
    stddev_pop?: ValueTypes["site_admin_stddev_pop_fields"];
    stddev_samp?: ValueTypes["site_admin_stddev_samp_fields"];
    sum?: ValueTypes["site_admin_sum_fields"];
    var_pop?: ValueTypes["site_admin_var_pop_fields"];
    var_samp?: ValueTypes["site_admin_var_samp_fields"];
    variance?: ValueTypes["site_admin_variance_fields"];
    __typename?: true;
  }>;
  /** order by aggregate values of table "site_admin" */
  ["site_admin_aggregate_order_by"]: {
    avg?: ValueTypes["site_admin_avg_order_by"];
    count?: ValueTypes["order_by"];
    max?: ValueTypes["site_admin_max_order_by"];
    min?: ValueTypes["site_admin_min_order_by"];
    stddev?: ValueTypes["site_admin_stddev_order_by"];
    stddev_pop?: ValueTypes["site_admin_stddev_pop_order_by"];
    stddev_samp?: ValueTypes["site_admin_stddev_samp_order_by"];
    sum?: ValueTypes["site_admin_sum_order_by"];
    var_pop?: ValueTypes["site_admin_var_pop_order_by"];
    var_samp?: ValueTypes["site_admin_var_samp_order_by"];
    variance?: ValueTypes["site_admin_variance_order_by"];
  };
  /** input type for inserting array relation for remote table "site_admin" */
  ["site_admin_arr_rel_insert_input"]: {
    data: ValueTypes["site_admin_insert_input"][];
    on_conflict?: ValueTypes["site_admin_on_conflict"];
  };
  /** aggregate avg on columns */
  ["site_admin_avg_fields"]: AliasType<{
    id?: true;
    __typename?: true;
  }>;
  /** order by avg() on columns of table "site_admin" */
  ["site_admin_avg_order_by"]: {
    id?: ValueTypes["order_by"];
  };
  /** Boolean expression to filter rows from the table "site_admin". All fields are combined with a logical 'AND'. */
  ["site_admin_bool_exp"]: {
    _and?: (ValueTypes["site_admin_bool_exp"] | undefined)[];
    _not?: ValueTypes["site_admin_bool_exp"];
    _or?: (ValueTypes["site_admin_bool_exp"] | undefined)[];
    created_at?: ValueTypes["timestamptz_comparison_exp"];
    email?: ValueTypes["String_comparison_exp"];
    id?: ValueTypes["Int_comparison_exp"];
    password?: ValueTypes["String_comparison_exp"];
    updated_at?: ValueTypes["timestamptz_comparison_exp"];
  };
  /** unique or primary key constraints on table "site_admin" */
  ["site_admin_constraint"]: site_admin_constraint;
  /** input type for incrementing integer column in table "site_admin" */
  ["site_admin_inc_input"]: {
    id?: number;
  };
  /** input type for inserting data into table "site_admin" */
  ["site_admin_insert_input"]: {
    created_at?: ValueTypes["timestamptz"];
    email?: string;
    id?: number;
    password?: string;
    updated_at?: ValueTypes["timestamptz"];
  };
  /** aggregate max on columns */
  ["site_admin_max_fields"]: AliasType<{
    created_at?: true;
    email?: true;
    id?: true;
    password?: true;
    updated_at?: true;
    __typename?: true;
  }>;
  /** order by max() on columns of table "site_admin" */
  ["site_admin_max_order_by"]: {
    created_at?: ValueTypes["order_by"];
    email?: ValueTypes["order_by"];
    id?: ValueTypes["order_by"];
    password?: ValueTypes["order_by"];
    updated_at?: ValueTypes["order_by"];
  };
  /** aggregate min on columns */
  ["site_admin_min_fields"]: AliasType<{
    created_at?: true;
    email?: true;
    id?: true;
    password?: true;
    updated_at?: true;
    __typename?: true;
  }>;
  /** order by min() on columns of table "site_admin" */
  ["site_admin_min_order_by"]: {
    created_at?: ValueTypes["order_by"];
    email?: ValueTypes["order_by"];
    id?: ValueTypes["order_by"];
    password?: ValueTypes["order_by"];
    updated_at?: ValueTypes["order_by"];
  };
  /** response of any mutation on the table "site_admin" */
  ["site_admin_mutation_response"]: AliasType<{
    /** number of affected rows by the mutation */
    affected_rows?: true;
    /** data of the affected rows by the mutation */
    returning?: ValueTypes["site_admin"];
    __typename?: true;
  }>;
  /** input type for inserting object relation for remote table "site_admin" */
  ["site_admin_obj_rel_insert_input"]: {
    data: ValueTypes["site_admin_insert_input"];
    on_conflict?: ValueTypes["site_admin_on_conflict"];
  };
  /** on conflict condition type for table "site_admin" */
  ["site_admin_on_conflict"]: {
    constraint: ValueTypes["site_admin_constraint"];
    update_columns: ValueTypes["site_admin_update_column"][];
    where?: ValueTypes["site_admin_bool_exp"];
  };
  /** ordering options when selecting data from "site_admin" */
  ["site_admin_order_by"]: {
    created_at?: ValueTypes["order_by"];
    email?: ValueTypes["order_by"];
    id?: ValueTypes["order_by"];
    password?: ValueTypes["order_by"];
    updated_at?: ValueTypes["order_by"];
  };
  /** primary key columns input for table: "site_admin" */
  ["site_admin_pk_columns_input"]: {
    id: number;
  };
  /** select columns of table "site_admin" */
  ["site_admin_select_column"]: site_admin_select_column;
  /** input type for updating data in table "site_admin" */
  ["site_admin_set_input"]: {
    created_at?: ValueTypes["timestamptz"];
    email?: string;
    id?: number;
    password?: string;
    updated_at?: ValueTypes["timestamptz"];
  };
  /** aggregate stddev on columns */
  ["site_admin_stddev_fields"]: AliasType<{
    id?: true;
    __typename?: true;
  }>;
  /** order by stddev() on columns of table "site_admin" */
  ["site_admin_stddev_order_by"]: {
    id?: ValueTypes["order_by"];
  };
  /** aggregate stddev_pop on columns */
  ["site_admin_stddev_pop_fields"]: AliasType<{
    id?: true;
    __typename?: true;
  }>;
  /** order by stddev_pop() on columns of table "site_admin" */
  ["site_admin_stddev_pop_order_by"]: {
    id?: ValueTypes["order_by"];
  };
  /** aggregate stddev_samp on columns */
  ["site_admin_stddev_samp_fields"]: AliasType<{
    id?: true;
    __typename?: true;
  }>;
  /** order by stddev_samp() on columns of table "site_admin" */
  ["site_admin_stddev_samp_order_by"]: {
    id?: ValueTypes["order_by"];
  };
  /** aggregate sum on columns */
  ["site_admin_sum_fields"]: AliasType<{
    id?: true;
    __typename?: true;
  }>;
  /** order by sum() on columns of table "site_admin" */
  ["site_admin_sum_order_by"]: {
    id?: ValueTypes["order_by"];
  };
  /** update columns of table "site_admin" */
  ["site_admin_update_column"]: site_admin_update_column;
  /** aggregate var_pop on columns */
  ["site_admin_var_pop_fields"]: AliasType<{
    id?: true;
    __typename?: true;
  }>;
  /** order by var_pop() on columns of table "site_admin" */
  ["site_admin_var_pop_order_by"]: {
    id?: ValueTypes["order_by"];
  };
  /** aggregate var_samp on columns */
  ["site_admin_var_samp_fields"]: AliasType<{
    id?: true;
    __typename?: true;
  }>;
  /** order by var_samp() on columns of table "site_admin" */
  ["site_admin_var_samp_order_by"]: {
    id?: ValueTypes["order_by"];
  };
  /** aggregate variance on columns */
  ["site_admin_variance_fields"]: AliasType<{
    id?: true;
    __typename?: true;
  }>;
  /** order by variance() on columns of table "site_admin" */
  ["site_admin_variance_order_by"]: {
    id?: ValueTypes["order_by"];
  };
  /** expression to compare columns of type String. All fields are combined with logical 'AND'. */
  ["String_comparison_exp"]: {
    _eq?: string;
    _gt?: string;
    _gte?: string;
    _ilike?: string;
    _in?: string[];
    _is_null?: boolean;
    _like?: string;
    _lt?: string;
    _lte?: string;
    _neq?: string;
    _nilike?: string;
    _nin?: string[];
    _nlike?: string;
    _nsimilar?: string;
    _similar?: string;
  };
  /** subscription root */
  ["subscription_root"]: AliasType<{
    address?: [
      {
        /** distinct select on columns */
        distinct_on?: ValueTypes["address_select_column"][] /** limit the number of rows returned */;
        limit?: number /** skip the first n rows. Use only with order_by */;
        offset?: number /** sort the rows by one or more columns */;
        order_by?: ValueTypes["address_order_by"][] /** filter the rows returned */;
        where?: ValueTypes["address_bool_exp"];
      },
      ValueTypes["address"]
    ];
    address_aggregate?: [
      {
        /** distinct select on columns */
        distinct_on?: ValueTypes["address_select_column"][] /** limit the number of rows returned */;
        limit?: number /** skip the first n rows. Use only with order_by */;
        offset?: number /** sort the rows by one or more columns */;
        order_by?: ValueTypes["address_order_by"][] /** filter the rows returned */;
        where?: ValueTypes["address_bool_exp"];
      },
      ValueTypes["address_aggregate"]
    ];
    address_by_pk?: [{ id: number }, ValueTypes["address"]];
    adminLogin?: [{ params: ValueTypes["AdminLoginInput"] }, ValueTypes["JWT"]];
    order?: [
      {
        /** distinct select on columns */
        distinct_on?: ValueTypes["order_select_column"][] /** limit the number of rows returned */;
        limit?: number /** skip the first n rows. Use only with order_by */;
        offset?: number /** sort the rows by one or more columns */;
        order_by?: ValueTypes["order_order_by"][] /** filter the rows returned */;
        where?: ValueTypes["order_bool_exp"];
      },
      ValueTypes["order"]
    ];
    order_aggregate?: [
      {
        /** distinct select on columns */
        distinct_on?: ValueTypes["order_select_column"][] /** limit the number of rows returned */;
        limit?: number /** skip the first n rows. Use only with order_by */;
        offset?: number /** sort the rows by one or more columns */;
        order_by?: ValueTypes["order_order_by"][] /** filter the rows returned */;
        where?: ValueTypes["order_bool_exp"];
      },
      ValueTypes["order_aggregate"]
    ];
    order_by_pk?: [{ id: number }, ValueTypes["order"]];
    order_product?: [
      {
        /** distinct select on columns */
        distinct_on?: ValueTypes["order_product_select_column"][] /** limit the number of rows returned */;
        limit?: number /** skip the first n rows. Use only with order_by */;
        offset?: number /** sort the rows by one or more columns */;
        order_by?: ValueTypes["order_product_order_by"][] /** filter the rows returned */;
        where?: ValueTypes["order_product_bool_exp"];
      },
      ValueTypes["order_product"]
    ];
    order_product_aggregate?: [
      {
        /** distinct select on columns */
        distinct_on?: ValueTypes["order_product_select_column"][] /** limit the number of rows returned */;
        limit?: number /** skip the first n rows. Use only with order_by */;
        offset?: number /** sort the rows by one or more columns */;
        order_by?: ValueTypes["order_product_order_by"][] /** filter the rows returned */;
        where?: ValueTypes["order_product_bool_exp"];
      },
      ValueTypes["order_product_aggregate"]
    ];
    order_product_by_pk?: [{ id: number }, ValueTypes["order_product"]];
    product?: [
      {
        /** distinct select on columns */
        distinct_on?: ValueTypes["product_select_column"][] /** limit the number of rows returned */;
        limit?: number /** skip the first n rows. Use only with order_by */;
        offset?: number /** sort the rows by one or more columns */;
        order_by?: ValueTypes["product_order_by"][] /** filter the rows returned */;
        where?: ValueTypes["product_bool_exp"];
      },
      ValueTypes["product"]
    ];
    product_aggregate?: [
      {
        /** distinct select on columns */
        distinct_on?: ValueTypes["product_select_column"][] /** limit the number of rows returned */;
        limit?: number /** skip the first n rows. Use only with order_by */;
        offset?: number /** sort the rows by one or more columns */;
        order_by?: ValueTypes["product_order_by"][] /** filter the rows returned */;
        where?: ValueTypes["product_bool_exp"];
      },
      ValueTypes["product_aggregate"]
    ];
    product_by_pk?: [{ id: number }, ValueTypes["product"]];
    product_category_enum?: [
      {
        /** distinct select on columns */
        distinct_on?: ValueTypes["product_category_enum_select_column"][] /** limit the number of rows returned */;
        limit?: number /** skip the first n rows. Use only with order_by */;
        offset?: number /** sort the rows by one or more columns */;
        order_by?: ValueTypes["product_category_enum_order_by"][] /** filter the rows returned */;
        where?: ValueTypes["product_category_enum_bool_exp"];
      },
      ValueTypes["product_category_enum"]
    ];
    product_category_enum_aggregate?: [
      {
        /** distinct select on columns */
        distinct_on?: ValueTypes["product_category_enum_select_column"][] /** limit the number of rows returned */;
        limit?: number /** skip the first n rows. Use only with order_by */;
        offset?: number /** sort the rows by one or more columns */;
        order_by?: ValueTypes["product_category_enum_order_by"][] /** filter the rows returned */;
        where?: ValueTypes["product_category_enum_bool_exp"];
      },
      ValueTypes["product_category_enum_aggregate"]
    ];
    product_category_enum_by_pk?: [
      { name: string },
      ValueTypes["product_category_enum"]
    ];
    product_review?: [
      {
        /** distinct select on columns */
        distinct_on?: ValueTypes["product_review_select_column"][] /** limit the number of rows returned */;
        limit?: number /** skip the first n rows. Use only with order_by */;
        offset?: number /** sort the rows by one or more columns */;
        order_by?: ValueTypes["product_review_order_by"][] /** filter the rows returned */;
        where?: ValueTypes["product_review_bool_exp"];
      },
      ValueTypes["product_review"]
    ];
    product_review_aggregate?: [
      {
        /** distinct select on columns */
        distinct_on?: ValueTypes["product_review_select_column"][] /** limit the number of rows returned */;
        limit?: number /** skip the first n rows. Use only with order_by */;
        offset?: number /** sort the rows by one or more columns */;
        order_by?: ValueTypes["product_review_order_by"][] /** filter the rows returned */;
        where?: ValueTypes["product_review_bool_exp"];
      },
      ValueTypes["product_review_aggregate"]
    ];
    product_review_by_pk?: [{ id: number }, ValueTypes["product_review"]];
    refreshToken?: [
      { params: ValueTypes["RefreshTokenInput"] },
      ValueTypes["RefreshTokenJWT"]
    ];
    site_admin?: [
      {
        /** distinct select on columns */
        distinct_on?: ValueTypes["site_admin_select_column"][] /** limit the number of rows returned */;
        limit?: number /** skip the first n rows. Use only with order_by */;
        offset?: number /** sort the rows by one or more columns */;
        order_by?: ValueTypes["site_admin_order_by"][] /** filter the rows returned */;
        where?: ValueTypes["site_admin_bool_exp"];
      },
      ValueTypes["site_admin"]
    ];
    site_admin_aggregate?: [
      {
        /** distinct select on columns */
        distinct_on?: ValueTypes["site_admin_select_column"][] /** limit the number of rows returned */;
        limit?: number /** skip the first n rows. Use only with order_by */;
        offset?: number /** sort the rows by one or more columns */;
        order_by?: ValueTypes["site_admin_order_by"][] /** filter the rows returned */;
        where?: ValueTypes["site_admin_bool_exp"];
      },
      ValueTypes["site_admin_aggregate"]
    ];
    site_admin_by_pk?: [{ id: number }, ValueTypes["site_admin"]];
    user?: [
      {
        /** distinct select on columns */
        distinct_on?: ValueTypes["user_select_column"][] /** limit the number of rows returned */;
        limit?: number /** skip the first n rows. Use only with order_by */;
        offset?: number /** sort the rows by one or more columns */;
        order_by?: ValueTypes["user_order_by"][] /** filter the rows returned */;
        where?: ValueTypes["user_bool_exp"];
      },
      ValueTypes["user"]
    ];
    user_aggregate?: [
      {
        /** distinct select on columns */
        distinct_on?: ValueTypes["user_select_column"][] /** limit the number of rows returned */;
        limit?: number /** skip the first n rows. Use only with order_by */;
        offset?: number /** sort the rows by one or more columns */;
        order_by?: ValueTypes["user_order_by"][] /** filter the rows returned */;
        where?: ValueTypes["user_bool_exp"];
      },
      ValueTypes["user_aggregate"]
    ];
    user_by_pk?: [{ id: number }, ValueTypes["user"]];
    __typename?: true;
  }>;
  ["timestamptz"]: unknown;
  /** expression to compare columns of type timestamptz. All fields are combined with logical 'AND'. */
  ["timestamptz_comparison_exp"]: {
    _eq?: ValueTypes["timestamptz"];
    _gt?: ValueTypes["timestamptz"];
    _gte?: ValueTypes["timestamptz"];
    _in?: ValueTypes["timestamptz"][];
    _is_null?: boolean;
    _lt?: ValueTypes["timestamptz"];
    _lte?: ValueTypes["timestamptz"];
    _neq?: ValueTypes["timestamptz"];
    _nin?: ValueTypes["timestamptz"][];
  };
  /** Someone with an account on the site, who uses it to make purchases


columns and relationships of "user" */
  ["user"]: AliasType<{
    addresses?: [
      {
        /** distinct select on columns */
        distinct_on?: ValueTypes["address_select_column"][] /** limit the number of rows returned */;
        limit?: number /** skip the first n rows. Use only with order_by */;
        offset?: number /** sort the rows by one or more columns */;
        order_by?: ValueTypes["address_order_by"][] /** filter the rows returned */;
        where?: ValueTypes["address_bool_exp"];
      },
      ValueTypes["address"]
    ];
    addresses_aggregate?: [
      {
        /** distinct select on columns */
        distinct_on?: ValueTypes["address_select_column"][] /** limit the number of rows returned */;
        limit?: number /** skip the first n rows. Use only with order_by */;
        offset?: number /** sort the rows by one or more columns */;
        order_by?: ValueTypes["address_order_by"][] /** filter the rows returned */;
        where?: ValueTypes["address_bool_exp"];
      },
      ValueTypes["address_aggregate"]
    ];
    created_at?: true;
    email?: true;
    id?: true;
    name?: true;
    orders?: [
      {
        /** distinct select on columns */
        distinct_on?: ValueTypes["order_select_column"][] /** limit the number of rows returned */;
        limit?: number /** skip the first n rows. Use only with order_by */;
        offset?: number /** sort the rows by one or more columns */;
        order_by?: ValueTypes["order_order_by"][] /** filter the rows returned */;
        where?: ValueTypes["order_bool_exp"];
      },
      ValueTypes["order"]
    ];
    orders_aggregate?: [
      {
        /** distinct select on columns */
        distinct_on?: ValueTypes["order_select_column"][] /** limit the number of rows returned */;
        limit?: number /** skip the first n rows. Use only with order_by */;
        offset?: number /** sort the rows by one or more columns */;
        order_by?: ValueTypes["order_order_by"][] /** filter the rows returned */;
        where?: ValueTypes["order_bool_exp"];
      },
      ValueTypes["order_aggregate"]
    ];
    /** A bcrypt-hashed version of the user password, compared against securely in the JWT Auth API handler for sign-in */
    password?: true;
    product_reviews?: [
      {
        /** distinct select on columns */
        distinct_on?: ValueTypes["product_review_select_column"][] /** limit the number of rows returned */;
        limit?: number /** skip the first n rows. Use only with order_by */;
        offset?: number /** sort the rows by one or more columns */;
        order_by?: ValueTypes["product_review_order_by"][] /** filter the rows returned */;
        where?: ValueTypes["product_review_bool_exp"];
      },
      ValueTypes["product_review"]
    ];
    product_reviews_aggregate?: [
      {
        /** distinct select on columns */
        distinct_on?: ValueTypes["product_review_select_column"][] /** limit the number of rows returned */;
        limit?: number /** skip the first n rows. Use only with order_by */;
        offset?: number /** sort the rows by one or more columns */;
        order_by?: ValueTypes["product_review_order_by"][] /** filter the rows returned */;
        where?: ValueTypes["product_review_bool_exp"];
      },
      ValueTypes["product_review_aggregate"]
    ];
    refresh_token?: true;
    updated_at?: true;
    __typename?: true;
  }>;
  /** aggregated selection of "user" */
  ["user_aggregate"]: AliasType<{
    aggregate?: ValueTypes["user_aggregate_fields"];
    nodes?: ValueTypes["user"];
    __typename?: true;
  }>;
  /** aggregate fields of "user" */
  ["user_aggregate_fields"]: AliasType<{
    avg?: ValueTypes["user_avg_fields"];
    count?: [
      { columns?: ValueTypes["user_select_column"][]; distinct?: boolean },
      true
    ];
    max?: ValueTypes["user_max_fields"];
    min?: ValueTypes["user_min_fields"];
    stddev?: ValueTypes["user_stddev_fields"];
    stddev_pop?: ValueTypes["user_stddev_pop_fields"];
    stddev_samp?: ValueTypes["user_stddev_samp_fields"];
    sum?: ValueTypes["user_sum_fields"];
    var_pop?: ValueTypes["user_var_pop_fields"];
    var_samp?: ValueTypes["user_var_samp_fields"];
    variance?: ValueTypes["user_variance_fields"];
    __typename?: true;
  }>;
  /** order by aggregate values of table "user" */
  ["user_aggregate_order_by"]: {
    avg?: ValueTypes["user_avg_order_by"];
    count?: ValueTypes["order_by"];
    max?: ValueTypes["user_max_order_by"];
    min?: ValueTypes["user_min_order_by"];
    stddev?: ValueTypes["user_stddev_order_by"];
    stddev_pop?: ValueTypes["user_stddev_pop_order_by"];
    stddev_samp?: ValueTypes["user_stddev_samp_order_by"];
    sum?: ValueTypes["user_sum_order_by"];
    var_pop?: ValueTypes["user_var_pop_order_by"];
    var_samp?: ValueTypes["user_var_samp_order_by"];
    variance?: ValueTypes["user_variance_order_by"];
  };
  /** input type for inserting array relation for remote table "user" */
  ["user_arr_rel_insert_input"]: {
    data: ValueTypes["user_insert_input"][];
    on_conflict?: ValueTypes["user_on_conflict"];
  };
  /** aggregate avg on columns */
  ["user_avg_fields"]: AliasType<{
    id?: true;
    __typename?: true;
  }>;
  /** order by avg() on columns of table "user" */
  ["user_avg_order_by"]: {
    id?: ValueTypes["order_by"];
  };
  /** Boolean expression to filter rows from the table "user". All fields are combined with a logical 'AND'. */
  ["user_bool_exp"]: {
    _and?: (ValueTypes["user_bool_exp"] | undefined)[];
    _not?: ValueTypes["user_bool_exp"];
    _or?: (ValueTypes["user_bool_exp"] | undefined)[];
    addresses?: ValueTypes["address_bool_exp"];
    created_at?: ValueTypes["timestamptz_comparison_exp"];
    email?: ValueTypes["String_comparison_exp"];
    id?: ValueTypes["Int_comparison_exp"];
    name?: ValueTypes["String_comparison_exp"];
    orders?: ValueTypes["order_bool_exp"];
    password?: ValueTypes["String_comparison_exp"];
    product_reviews?: ValueTypes["product_review_bool_exp"];
    refresh_token?: ValueTypes["String_comparison_exp"];
    updated_at?: ValueTypes["timestamptz_comparison_exp"];
  };
  /** unique or primary key constraints on table "user" */
  ["user_constraint"]: user_constraint;
  /** input type for incrementing integer column in table "user" */
  ["user_inc_input"]: {
    id?: number;
  };
  /** input type for inserting data into table "user" */
  ["user_insert_input"]: {
    addresses?: ValueTypes["address_arr_rel_insert_input"];
    created_at?: ValueTypes["timestamptz"];
    email?: string;
    id?: number;
    name?: string;
    orders?: ValueTypes["order_arr_rel_insert_input"];
    password?: string;
    product_reviews?: ValueTypes["product_review_arr_rel_insert_input"];
    refresh_token?: string;
    updated_at?: ValueTypes["timestamptz"];
  };
  /** aggregate max on columns */
  ["user_max_fields"]: AliasType<{
    created_at?: true;
    email?: true;
    id?: true;
    name?: true;
    password?: true;
    refresh_token?: true;
    updated_at?: true;
    __typename?: true;
  }>;
  /** order by max() on columns of table "user" */
  ["user_max_order_by"]: {
    created_at?: ValueTypes["order_by"];
    email?: ValueTypes["order_by"];
    id?: ValueTypes["order_by"];
    name?: ValueTypes["order_by"];
    password?: ValueTypes["order_by"];
    refresh_token?: ValueTypes["order_by"];
    updated_at?: ValueTypes["order_by"];
  };
  /** aggregate min on columns */
  ["user_min_fields"]: AliasType<{
    created_at?: true;
    email?: true;
    id?: true;
    name?: true;
    password?: true;
    refresh_token?: true;
    updated_at?: true;
    __typename?: true;
  }>;
  /** order by min() on columns of table "user" */
  ["user_min_order_by"]: {
    created_at?: ValueTypes["order_by"];
    email?: ValueTypes["order_by"];
    id?: ValueTypes["order_by"];
    name?: ValueTypes["order_by"];
    password?: ValueTypes["order_by"];
    refresh_token?: ValueTypes["order_by"];
    updated_at?: ValueTypes["order_by"];
  };
  /** response of any mutation on the table "user" */
  ["user_mutation_response"]: AliasType<{
    /** number of affected rows by the mutation */
    affected_rows?: true;
    /** data of the affected rows by the mutation */
    returning?: ValueTypes["user"];
    __typename?: true;
  }>;
  /** input type for inserting object relation for remote table "user" */
  ["user_obj_rel_insert_input"]: {
    data: ValueTypes["user_insert_input"];
    on_conflict?: ValueTypes["user_on_conflict"];
  };
  /** on conflict condition type for table "user" */
  ["user_on_conflict"]: {
    constraint: ValueTypes["user_constraint"];
    update_columns: ValueTypes["user_update_column"][];
    where?: ValueTypes["user_bool_exp"];
  };
  /** ordering options when selecting data from "user" */
  ["user_order_by"]: {
    addresses_aggregate?: ValueTypes["address_aggregate_order_by"];
    created_at?: ValueTypes["order_by"];
    email?: ValueTypes["order_by"];
    id?: ValueTypes["order_by"];
    name?: ValueTypes["order_by"];
    orders_aggregate?: ValueTypes["order_aggregate_order_by"];
    password?: ValueTypes["order_by"];
    product_reviews_aggregate?: ValueTypes["product_review_aggregate_order_by"];
    refresh_token?: ValueTypes["order_by"];
    updated_at?: ValueTypes["order_by"];
  };
  /** primary key columns input for table: "user" */
  ["user_pk_columns_input"]: {
    id: number;
  };
  /** select columns of table "user" */
  ["user_select_column"]: user_select_column;
  /** input type for updating data in table "user" */
  ["user_set_input"]: {
    created_at?: ValueTypes["timestamptz"];
    email?: string;
    id?: number;
    name?: string;
    password?: string;
    refresh_token?: string;
    updated_at?: ValueTypes["timestamptz"];
  };
  /** aggregate stddev on columns */
  ["user_stddev_fields"]: AliasType<{
    id?: true;
    __typename?: true;
  }>;
  /** order by stddev() on columns of table "user" */
  ["user_stddev_order_by"]: {
    id?: ValueTypes["order_by"];
  };
  /** aggregate stddev_pop on columns */
  ["user_stddev_pop_fields"]: AliasType<{
    id?: true;
    __typename?: true;
  }>;
  /** order by stddev_pop() on columns of table "user" */
  ["user_stddev_pop_order_by"]: {
    id?: ValueTypes["order_by"];
  };
  /** aggregate stddev_samp on columns */
  ["user_stddev_samp_fields"]: AliasType<{
    id?: true;
    __typename?: true;
  }>;
  /** order by stddev_samp() on columns of table "user" */
  ["user_stddev_samp_order_by"]: {
    id?: ValueTypes["order_by"];
  };
  /** aggregate sum on columns */
  ["user_sum_fields"]: AliasType<{
    id?: true;
    __typename?: true;
  }>;
  /** order by sum() on columns of table "user" */
  ["user_sum_order_by"]: {
    id?: ValueTypes["order_by"];
  };
  /** update columns of table "user" */
  ["user_update_column"]: user_update_column;
  /** aggregate var_pop on columns */
  ["user_var_pop_fields"]: AliasType<{
    id?: true;
    __typename?: true;
  }>;
  /** order by var_pop() on columns of table "user" */
  ["user_var_pop_order_by"]: {
    id?: ValueTypes["order_by"];
  };
  /** aggregate var_samp on columns */
  ["user_var_samp_fields"]: AliasType<{
    id?: true;
    __typename?: true;
  }>;
  /** order by var_samp() on columns of table "user" */
  ["user_var_samp_order_by"]: {
    id?: ValueTypes["order_by"];
  };
  /** aggregate variance on columns */
  ["user_variance_fields"]: AliasType<{
    id?: true;
    __typename?: true;
  }>;
  /** order by variance() on columns of table "user" */
  ["user_variance_order_by"]: {
    id?: ValueTypes["order_by"];
  };
  ["uuid"]: unknown;
};

export type PartialObjects = {
  /** A physical billing/shipping address, attached to a user account


columns and relationships of "address" */
  ["address"]: {
    __typename?: "address";
    address_line_one?: string;
    address_line_two?: string;
    city?: string;
    created_at?: PartialObjects["timestamptz"];
    id?: number;
    /** An array relationship */
    orders_with_billing_address?: PartialObjects["order"][];
    /** An aggregated array relationship */
    orders_with_billing_address_aggregate?: PartialObjects["order_aggregate"];
    /** An array relationship */
    orders_with_shipping_address?: PartialObjects["order"][];
    /** An aggregated array relationship */
    orders_with_shipping_address_aggregate?: PartialObjects["order_aggregate"];
    state?: string;
    updated_at?: PartialObjects["timestamptz"];
    /** An object relationship */
    user?: PartialObjects["user"];
    user_id?: number;
    zipcode?: string;
  };
  /** aggregated selection of "address" */
  ["address_aggregate"]: {
    __typename?: "address_aggregate";
    aggregate?: PartialObjects["address_aggregate_fields"];
    nodes?: PartialObjects["address"][];
  };
  /** aggregate fields of "address" */
  ["address_aggregate_fields"]: {
    __typename?: "address_aggregate_fields";
    avg?: PartialObjects["address_avg_fields"];
    count?: number;
    max?: PartialObjects["address_max_fields"];
    min?: PartialObjects["address_min_fields"];
    stddev?: PartialObjects["address_stddev_fields"];
    stddev_pop?: PartialObjects["address_stddev_pop_fields"];
    stddev_samp?: PartialObjects["address_stddev_samp_fields"];
    sum?: PartialObjects["address_sum_fields"];
    var_pop?: PartialObjects["address_var_pop_fields"];
    var_samp?: PartialObjects["address_var_samp_fields"];
    variance?: PartialObjects["address_variance_fields"];
  };
  /** order by aggregate values of table "address" */
  ["address_aggregate_order_by"]: {
    avg?: PartialObjects["address_avg_order_by"];
    count?: PartialObjects["order_by"];
    max?: PartialObjects["address_max_order_by"];
    min?: PartialObjects["address_min_order_by"];
    stddev?: PartialObjects["address_stddev_order_by"];
    stddev_pop?: PartialObjects["address_stddev_pop_order_by"];
    stddev_samp?: PartialObjects["address_stddev_samp_order_by"];
    sum?: PartialObjects["address_sum_order_by"];
    var_pop?: PartialObjects["address_var_pop_order_by"];
    var_samp?: PartialObjects["address_var_samp_order_by"];
    variance?: PartialObjects["address_variance_order_by"];
  };
  /** input type for inserting array relation for remote table "address" */
  ["address_arr_rel_insert_input"]: {
    data: PartialObjects["address_insert_input"][];
    on_conflict?: PartialObjects["address_on_conflict"];
  };
  /** aggregate avg on columns */
  ["address_avg_fields"]: {
    __typename?: "address_avg_fields";
    id?: number;
    user_id?: number;
  };
  /** order by avg() on columns of table "address" */
  ["address_avg_order_by"]: {
    id?: PartialObjects["order_by"];
    user_id?: PartialObjects["order_by"];
  };
  /** Boolean expression to filter rows from the table "address". All fields are combined with a logical 'AND'. */
  ["address_bool_exp"]: {
    _and?: (PartialObjects["address_bool_exp"] | undefined)[];
    _not?: PartialObjects["address_bool_exp"];
    _or?: (PartialObjects["address_bool_exp"] | undefined)[];
    address_line_one?: PartialObjects["String_comparison_exp"];
    address_line_two?: PartialObjects["String_comparison_exp"];
    city?: PartialObjects["String_comparison_exp"];
    created_at?: PartialObjects["timestamptz_comparison_exp"];
    id?: PartialObjects["Int_comparison_exp"];
    orders_with_billing_address?: PartialObjects["order_bool_exp"];
    orders_with_shipping_address?: PartialObjects["order_bool_exp"];
    state?: PartialObjects["String_comparison_exp"];
    updated_at?: PartialObjects["timestamptz_comparison_exp"];
    user?: PartialObjects["user_bool_exp"];
    user_id?: PartialObjects["Int_comparison_exp"];
    zipcode?: PartialObjects["String_comparison_exp"];
  };
  /** unique or primary key constraints on table "address" */
  ["address_constraint"]: address_constraint;
  /** input type for incrementing integer column in table "address" */
  ["address_inc_input"]: {
    id?: number;
    user_id?: number;
  };
  /** input type for inserting data into table "address" */
  ["address_insert_input"]: {
    address_line_one?: string;
    address_line_two?: string;
    city?: string;
    created_at?: PartialObjects["timestamptz"];
    id?: number;
    orders_with_billing_address?: PartialObjects["order_arr_rel_insert_input"];
    orders_with_shipping_address?: PartialObjects["order_arr_rel_insert_input"];
    state?: string;
    updated_at?: PartialObjects["timestamptz"];
    user?: PartialObjects["user_obj_rel_insert_input"];
    user_id?: number;
    zipcode?: string;
  };
  /** aggregate max on columns */
  ["address_max_fields"]: {
    __typename?: "address_max_fields";
    address_line_one?: string;
    address_line_two?: string;
    city?: string;
    created_at?: PartialObjects["timestamptz"];
    id?: number;
    state?: string;
    updated_at?: PartialObjects["timestamptz"];
    user_id?: number;
    zipcode?: string;
  };
  /** order by max() on columns of table "address" */
  ["address_max_order_by"]: {
    address_line_one?: PartialObjects["order_by"];
    address_line_two?: PartialObjects["order_by"];
    city?: PartialObjects["order_by"];
    created_at?: PartialObjects["order_by"];
    id?: PartialObjects["order_by"];
    state?: PartialObjects["order_by"];
    updated_at?: PartialObjects["order_by"];
    user_id?: PartialObjects["order_by"];
    zipcode?: PartialObjects["order_by"];
  };
  /** aggregate min on columns */
  ["address_min_fields"]: {
    __typename?: "address_min_fields";
    address_line_one?: string;
    address_line_two?: string;
    city?: string;
    created_at?: PartialObjects["timestamptz"];
    id?: number;
    state?: string;
    updated_at?: PartialObjects["timestamptz"];
    user_id?: number;
    zipcode?: string;
  };
  /** order by min() on columns of table "address" */
  ["address_min_order_by"]: {
    address_line_one?: PartialObjects["order_by"];
    address_line_two?: PartialObjects["order_by"];
    city?: PartialObjects["order_by"];
    created_at?: PartialObjects["order_by"];
    id?: PartialObjects["order_by"];
    state?: PartialObjects["order_by"];
    updated_at?: PartialObjects["order_by"];
    user_id?: PartialObjects["order_by"];
    zipcode?: PartialObjects["order_by"];
  };
  /** response of any mutation on the table "address" */
  ["address_mutation_response"]: {
    __typename?: "address_mutation_response";
    /** number of affected rows by the mutation */
    affected_rows?: number;
    /** data of the affected rows by the mutation */
    returning?: PartialObjects["address"][];
  };
  /** input type for inserting object relation for remote table "address" */
  ["address_obj_rel_insert_input"]: {
    data: PartialObjects["address_insert_input"];
    on_conflict?: PartialObjects["address_on_conflict"];
  };
  /** on conflict condition type for table "address" */
  ["address_on_conflict"]: {
    constraint: PartialObjects["address_constraint"];
    update_columns: PartialObjects["address_update_column"][];
    where?: PartialObjects["address_bool_exp"];
  };
  /** ordering options when selecting data from "address" */
  ["address_order_by"]: {
    address_line_one?: PartialObjects["order_by"];
    address_line_two?: PartialObjects["order_by"];
    city?: PartialObjects["order_by"];
    created_at?: PartialObjects["order_by"];
    id?: PartialObjects["order_by"];
    orders_with_billing_address_aggregate?: PartialObjects["order_aggregate_order_by"];
    orders_with_shipping_address_aggregate?: PartialObjects["order_aggregate_order_by"];
    state?: PartialObjects["order_by"];
    updated_at?: PartialObjects["order_by"];
    user?: PartialObjects["user_order_by"];
    user_id?: PartialObjects["order_by"];
    zipcode?: PartialObjects["order_by"];
  };
  /** primary key columns input for table: "address" */
  ["address_pk_columns_input"]: {
    id: number;
  };
  /** select columns of table "address" */
  ["address_select_column"]: address_select_column;
  /** input type for updating data in table "address" */
  ["address_set_input"]: {
    address_line_one?: string;
    address_line_two?: string;
    city?: string;
    created_at?: PartialObjects["timestamptz"];
    id?: number;
    state?: string;
    updated_at?: PartialObjects["timestamptz"];
    user_id?: number;
    zipcode?: string;
  };
  /** aggregate stddev on columns */
  ["address_stddev_fields"]: {
    __typename?: "address_stddev_fields";
    id?: number;
    user_id?: number;
  };
  /** order by stddev() on columns of table "address" */
  ["address_stddev_order_by"]: {
    id?: PartialObjects["order_by"];
    user_id?: PartialObjects["order_by"];
  };
  /** aggregate stddev_pop on columns */
  ["address_stddev_pop_fields"]: {
    __typename?: "address_stddev_pop_fields";
    id?: number;
    user_id?: number;
  };
  /** order by stddev_pop() on columns of table "address" */
  ["address_stddev_pop_order_by"]: {
    id?: PartialObjects["order_by"];
    user_id?: PartialObjects["order_by"];
  };
  /** aggregate stddev_samp on columns */
  ["address_stddev_samp_fields"]: {
    __typename?: "address_stddev_samp_fields";
    id?: number;
    user_id?: number;
  };
  /** order by stddev_samp() on columns of table "address" */
  ["address_stddev_samp_order_by"]: {
    id?: PartialObjects["order_by"];
    user_id?: PartialObjects["order_by"];
  };
  /** aggregate sum on columns */
  ["address_sum_fields"]: {
    __typename?: "address_sum_fields";
    id?: number;
    user_id?: number;
  };
  /** order by sum() on columns of table "address" */
  ["address_sum_order_by"]: {
    id?: PartialObjects["order_by"];
    user_id?: PartialObjects["order_by"];
  };
  /** update columns of table "address" */
  ["address_update_column"]: address_update_column;
  /** aggregate var_pop on columns */
  ["address_var_pop_fields"]: {
    __typename?: "address_var_pop_fields";
    id?: number;
    user_id?: number;
  };
  /** order by var_pop() on columns of table "address" */
  ["address_var_pop_order_by"]: {
    id?: PartialObjects["order_by"];
    user_id?: PartialObjects["order_by"];
  };
  /** aggregate var_samp on columns */
  ["address_var_samp_fields"]: {
    __typename?: "address_var_samp_fields";
    id?: number;
    user_id?: number;
  };
  /** order by var_samp() on columns of table "address" */
  ["address_var_samp_order_by"]: {
    id?: PartialObjects["order_by"];
    user_id?: PartialObjects["order_by"];
  };
  /** aggregate variance on columns */
  ["address_variance_fields"]: {
    __typename?: "address_variance_fields";
    id?: number;
    user_id?: number;
  };
  /** order by variance() on columns of table "address" */
  ["address_variance_order_by"]: {
    id?: PartialObjects["order_by"];
    user_id?: PartialObjects["order_by"];
  };
  ["AdminLoginInput"]: {
    email: string;
    password: string;
  };
  ["AdminSignupInput"]: {
    email: string;
    name: string;
    password: string;
  };
  /** expression to compare columns of type Boolean. All fields are combined with logical 'AND'. */
  ["Boolean_comparison_exp"]: {
    _eq?: boolean;
    _gt?: boolean;
    _gte?: boolean;
    _in?: boolean[];
    _is_null?: boolean;
    _lt?: boolean;
    _lte?: boolean;
    _neq?: boolean;
    _nin?: boolean[];
  };
  ["CreatePaymentIntentInput"]: {
    paymentAmount: number;
  };
  /** expression to compare columns of type Int. All fields are combined with logical 'AND'. */
  ["Int_comparison_exp"]: {
    _eq?: number;
    _gt?: number;
    _gte?: number;
    _in?: number[];
    _is_null?: boolean;
    _lt?: number;
    _lte?: number;
    _neq?: number;
    _nin?: number[];
  };
  ["json"]: any;
  /** expression to compare columns of type json. All fields are combined with logical 'AND'. */
  ["json_comparison_exp"]: {
    _eq?: PartialObjects["json"];
    _gt?: PartialObjects["json"];
    _gte?: PartialObjects["json"];
    _in?: PartialObjects["json"][];
    _is_null?: boolean;
    _lt?: PartialObjects["json"];
    _lte?: PartialObjects["json"];
    _neq?: PartialObjects["json"];
    _nin?: PartialObjects["json"][];
  };
  ["jsonb"]: any;
  /** expression to compare columns of type jsonb. All fields are combined with logical 'AND'. */
  ["jsonb_comparison_exp"]: {
    /** is the column contained in the given json value */
    _contained_in?: PartialObjects["jsonb"];
    /** does the column contain the given json value at the top level */
    _contains?: PartialObjects["jsonb"];
    _eq?: PartialObjects["jsonb"];
    _gt?: PartialObjects["jsonb"];
    _gte?: PartialObjects["jsonb"];
    /** does the string exist as a top-level key in the column */
    _has_key?: string;
    /** do all of these strings exist as top-level keys in the column */
    _has_keys_all?: string[];
    /** do any of these strings exist as top-level keys in the column */
    _has_keys_any?: string[];
    _in?: PartialObjects["jsonb"][];
    _is_null?: boolean;
    _lt?: PartialObjects["jsonb"];
    _lte?: PartialObjects["jsonb"];
    _neq?: PartialObjects["jsonb"];
    _nin?: PartialObjects["jsonb"][];
  };
  ["JWT"]: {
    __typename?: "JWT";
    email?: string;
    name?: string;
    refreshToken?: string;
    token?: string;
  };
  ["LoginInput"]: {
    email: string;
    password: string;
  };
  /** mutation root */
  ["mutation_root"]: {
    __typename?: "mutation_root";
    /** perform the action: "adminSignup" */
    adminSignup?: PartialObjects["JWT"];
    /** perform the action: "createPaymentIntent" */
    createPaymentIntent?: PartialObjects["PaymentIntentClientSecret"];
    /** delete data from the table: "address" */
    delete_address?: PartialObjects["address_mutation_response"];
    /** delete single row from the table: "address" */
    delete_address_by_pk?: PartialObjects["address"];
    /** delete data from the table: "order" */
    delete_order?: PartialObjects["order_mutation_response"];
    /** delete single row from the table: "order" */
    delete_order_by_pk?: PartialObjects["order"];
    /** delete data from the table: "order_product" */
    delete_order_product?: PartialObjects["order_product_mutation_response"];
    /** delete single row from the table: "order_product" */
    delete_order_product_by_pk?: PartialObjects["order_product"];
    /** delete data from the table: "product" */
    delete_product?: PartialObjects["product_mutation_response"];
    /** delete single row from the table: "product" */
    delete_product_by_pk?: PartialObjects["product"];
    /** delete data from the table: "product_category_enum" */
    delete_product_category_enum?: PartialObjects["product_category_enum_mutation_response"];
    /** delete single row from the table: "product_category_enum" */
    delete_product_category_enum_by_pk?: PartialObjects["product_category_enum"];
    /** delete data from the table: "product_review" */
    delete_product_review?: PartialObjects["product_review_mutation_response"];
    /** delete single row from the table: "product_review" */
    delete_product_review_by_pk?: PartialObjects["product_review"];
    /** delete data from the table: "site_admin" */
    delete_site_admin?: PartialObjects["site_admin_mutation_response"];
    /** delete single row from the table: "site_admin" */
    delete_site_admin_by_pk?: PartialObjects["site_admin"];
    /** delete data from the table: "user" */
    delete_user?: PartialObjects["user_mutation_response"];
    /** delete single row from the table: "user" */
    delete_user_by_pk?: PartialObjects["user"];
    /** insert data into the table: "address" */
    insert_address?: PartialObjects["address_mutation_response"];
    /** insert a single row into the table: "address" */
    insert_address_one?: PartialObjects["address"];
    /** insert data into the table: "order" */
    insert_order?: PartialObjects["order_mutation_response"];
    /** insert a single row into the table: "order" */
    insert_order_one?: PartialObjects["order"];
    /** insert data into the table: "order_product" */
    insert_order_product?: PartialObjects["order_product_mutation_response"];
    /** insert a single row into the table: "order_product" */
    insert_order_product_one?: PartialObjects["order_product"];
    /** insert data into the table: "product" */
    insert_product?: PartialObjects["product_mutation_response"];
    /** insert data into the table: "product_category_enum" */
    insert_product_category_enum?: PartialObjects["product_category_enum_mutation_response"];
    /** insert a single row into the table: "product_category_enum" */
    insert_product_category_enum_one?: PartialObjects["product_category_enum"];
    /** insert a single row into the table: "product" */
    insert_product_one?: PartialObjects["product"];
    /** insert data into the table: "product_review" */
    insert_product_review?: PartialObjects["product_review_mutation_response"];
    /** insert a single row into the table: "product_review" */
    insert_product_review_one?: PartialObjects["product_review"];
    /** insert data into the table: "site_admin" */
    insert_site_admin?: PartialObjects["site_admin_mutation_response"];
    /** insert a single row into the table: "site_admin" */
    insert_site_admin_one?: PartialObjects["site_admin"];
    /** insert data into the table: "user" */
    insert_user?: PartialObjects["user_mutation_response"];
    /** insert a single row into the table: "user" */
    insert_user_one?: PartialObjects["user"];
    /** perform the action: "login" */
    login?: PartialObjects["JWT"];
    /** perform the action: "signup" */
    signup?: PartialObjects["JWT"];
    /** update data of the table: "address" */
    update_address?: PartialObjects["address_mutation_response"];
    /** update single row of the table: "address" */
    update_address_by_pk?: PartialObjects["address"];
    /** update data of the table: "order" */
    update_order?: PartialObjects["order_mutation_response"];
    /** update single row of the table: "order" */
    update_order_by_pk?: PartialObjects["order"];
    /** update data of the table: "order_product" */
    update_order_product?: PartialObjects["order_product_mutation_response"];
    /** update single row of the table: "order_product" */
    update_order_product_by_pk?: PartialObjects["order_product"];
    /** update data of the table: "product" */
    update_product?: PartialObjects["product_mutation_response"];
    /** update single row of the table: "product" */
    update_product_by_pk?: PartialObjects["product"];
    /** update data of the table: "product_category_enum" */
    update_product_category_enum?: PartialObjects["product_category_enum_mutation_response"];
    /** update single row of the table: "product_category_enum" */
    update_product_category_enum_by_pk?: PartialObjects["product_category_enum"];
    /** update data of the table: "product_review" */
    update_product_review?: PartialObjects["product_review_mutation_response"];
    /** update single row of the table: "product_review" */
    update_product_review_by_pk?: PartialObjects["product_review"];
    /** update data of the table: "site_admin" */
    update_site_admin?: PartialObjects["site_admin_mutation_response"];
    /** update single row of the table: "site_admin" */
    update_site_admin_by_pk?: PartialObjects["site_admin"];
    /** update data of the table: "user" */
    update_user?: PartialObjects["user_mutation_response"];
    /** update single row of the table: "user" */
    update_user_by_pk?: PartialObjects["user"];
  };
  ["numeric"]: any;
  /** expression to compare columns of type numeric. All fields are combined with logical 'AND'. */
  ["numeric_comparison_exp"]: {
    _eq?: PartialObjects["numeric"];
    _gt?: PartialObjects["numeric"];
    _gte?: PartialObjects["numeric"];
    _in?: PartialObjects["numeric"][];
    _is_null?: boolean;
    _lt?: PartialObjects["numeric"];
    _lte?: PartialObjects["numeric"];
    _neq?: PartialObjects["numeric"];
    _nin?: PartialObjects["numeric"][];
  };
  /** An order from a customer, containing one or more products and quantities


columns and relationships of "order" */
  ["order"]: {
    __typename?: "order";
    /** An object relationship */
    billing_address?: PartialObjects["address"];
    billing_address_id?: number;
    created_at?: PartialObjects["timestamptz"];
    id?: number;
    is_shipped?: boolean;
    /** An array relationship */
    products?: PartialObjects["order_product"][];
    /** An aggregated array relationship */
    products_aggregate?: PartialObjects["order_product_aggregate"];
    /** An object relationship */
    shipping_address?: PartialObjects["address"];
    shipping_address_id?: number;
    updated_at?: PartialObjects["timestamptz"];
    /** An object relationship */
    user?: PartialObjects["user"];
    user_id?: number;
  };
  /** aggregated selection of "order" */
  ["order_aggregate"]: {
    __typename?: "order_aggregate";
    aggregate?: PartialObjects["order_aggregate_fields"];
    nodes?: PartialObjects["order"][];
  };
  /** aggregate fields of "order" */
  ["order_aggregate_fields"]: {
    __typename?: "order_aggregate_fields";
    avg?: PartialObjects["order_avg_fields"];
    count?: number;
    max?: PartialObjects["order_max_fields"];
    min?: PartialObjects["order_min_fields"];
    stddev?: PartialObjects["order_stddev_fields"];
    stddev_pop?: PartialObjects["order_stddev_pop_fields"];
    stddev_samp?: PartialObjects["order_stddev_samp_fields"];
    sum?: PartialObjects["order_sum_fields"];
    var_pop?: PartialObjects["order_var_pop_fields"];
    var_samp?: PartialObjects["order_var_samp_fields"];
    variance?: PartialObjects["order_variance_fields"];
  };
  /** order by aggregate values of table "order" */
  ["order_aggregate_order_by"]: {
    avg?: PartialObjects["order_avg_order_by"];
    count?: PartialObjects["order_by"];
    max?: PartialObjects["order_max_order_by"];
    min?: PartialObjects["order_min_order_by"];
    stddev?: PartialObjects["order_stddev_order_by"];
    stddev_pop?: PartialObjects["order_stddev_pop_order_by"];
    stddev_samp?: PartialObjects["order_stddev_samp_order_by"];
    sum?: PartialObjects["order_sum_order_by"];
    var_pop?: PartialObjects["order_var_pop_order_by"];
    var_samp?: PartialObjects["order_var_samp_order_by"];
    variance?: PartialObjects["order_variance_order_by"];
  };
  /** input type for inserting array relation for remote table "order" */
  ["order_arr_rel_insert_input"]: {
    data: PartialObjects["order_insert_input"][];
    on_conflict?: PartialObjects["order_on_conflict"];
  };
  /** aggregate avg on columns */
  ["order_avg_fields"]: {
    __typename?: "order_avg_fields";
    billing_address_id?: number;
    id?: number;
    shipping_address_id?: number;
    user_id?: number;
  };
  /** order by avg() on columns of table "order" */
  ["order_avg_order_by"]: {
    billing_address_id?: PartialObjects["order_by"];
    id?: PartialObjects["order_by"];
    shipping_address_id?: PartialObjects["order_by"];
    user_id?: PartialObjects["order_by"];
  };
  /** Boolean expression to filter rows from the table "order". All fields are combined with a logical 'AND'. */
  ["order_bool_exp"]: {
    _and?: (PartialObjects["order_bool_exp"] | undefined)[];
    _not?: PartialObjects["order_bool_exp"];
    _or?: (PartialObjects["order_bool_exp"] | undefined)[];
    billing_address?: PartialObjects["address_bool_exp"];
    billing_address_id?: PartialObjects["Int_comparison_exp"];
    created_at?: PartialObjects["timestamptz_comparison_exp"];
    id?: PartialObjects["Int_comparison_exp"];
    is_shipped?: PartialObjects["Boolean_comparison_exp"];
    products?: PartialObjects["order_product_bool_exp"];
    shipping_address?: PartialObjects["address_bool_exp"];
    shipping_address_id?: PartialObjects["Int_comparison_exp"];
    updated_at?: PartialObjects["timestamptz_comparison_exp"];
    user?: PartialObjects["user_bool_exp"];
    user_id?: PartialObjects["Int_comparison_exp"];
  };
  /** column ordering options */
  ["order_by"]: order_by;
  /** unique or primary key constraints on table "order" */
  ["order_constraint"]: order_constraint;
  /** input type for incrementing integer column in table "order" */
  ["order_inc_input"]: {
    billing_address_id?: number;
    id?: number;
    shipping_address_id?: number;
    user_id?: number;
  };
  /** input type for inserting data into table "order" */
  ["order_insert_input"]: {
    billing_address?: PartialObjects["address_obj_rel_insert_input"];
    billing_address_id?: number;
    created_at?: PartialObjects["timestamptz"];
    id?: number;
    is_shipped?: boolean;
    products?: PartialObjects["order_product_arr_rel_insert_input"];
    shipping_address?: PartialObjects["address_obj_rel_insert_input"];
    shipping_address_id?: number;
    updated_at?: PartialObjects["timestamptz"];
    user?: PartialObjects["user_obj_rel_insert_input"];
    user_id?: number;
  };
  /** aggregate max on columns */
  ["order_max_fields"]: {
    __typename?: "order_max_fields";
    billing_address_id?: number;
    created_at?: PartialObjects["timestamptz"];
    id?: number;
    shipping_address_id?: number;
    updated_at?: PartialObjects["timestamptz"];
    user_id?: number;
  };
  /** order by max() on columns of table "order" */
  ["order_max_order_by"]: {
    billing_address_id?: PartialObjects["order_by"];
    created_at?: PartialObjects["order_by"];
    id?: PartialObjects["order_by"];
    shipping_address_id?: PartialObjects["order_by"];
    updated_at?: PartialObjects["order_by"];
    user_id?: PartialObjects["order_by"];
  };
  /** aggregate min on columns */
  ["order_min_fields"]: {
    __typename?: "order_min_fields";
    billing_address_id?: number;
    created_at?: PartialObjects["timestamptz"];
    id?: number;
    shipping_address_id?: number;
    updated_at?: PartialObjects["timestamptz"];
    user_id?: number;
  };
  /** order by min() on columns of table "order" */
  ["order_min_order_by"]: {
    billing_address_id?: PartialObjects["order_by"];
    created_at?: PartialObjects["order_by"];
    id?: PartialObjects["order_by"];
    shipping_address_id?: PartialObjects["order_by"];
    updated_at?: PartialObjects["order_by"];
    user_id?: PartialObjects["order_by"];
  };
  /** response of any mutation on the table "order" */
  ["order_mutation_response"]: {
    __typename?: "order_mutation_response";
    /** number of affected rows by the mutation */
    affected_rows?: number;
    /** data of the affected rows by the mutation */
    returning?: PartialObjects["order"][];
  };
  /** input type for inserting object relation for remote table "order" */
  ["order_obj_rel_insert_input"]: {
    data: PartialObjects["order_insert_input"];
    on_conflict?: PartialObjects["order_on_conflict"];
  };
  /** on conflict condition type for table "order" */
  ["order_on_conflict"]: {
    constraint: PartialObjects["order_constraint"];
    update_columns: PartialObjects["order_update_column"][];
    where?: PartialObjects["order_bool_exp"];
  };
  /** ordering options when selecting data from "order" */
  ["order_order_by"]: {
    billing_address?: PartialObjects["address_order_by"];
    billing_address_id?: PartialObjects["order_by"];
    created_at?: PartialObjects["order_by"];
    id?: PartialObjects["order_by"];
    is_shipped?: PartialObjects["order_by"];
    products_aggregate?: PartialObjects["order_product_aggregate_order_by"];
    shipping_address?: PartialObjects["address_order_by"];
    shipping_address_id?: PartialObjects["order_by"];
    updated_at?: PartialObjects["order_by"];
    user?: PartialObjects["user_order_by"];
    user_id?: PartialObjects["order_by"];
  };
  /** primary key columns input for table: "order" */
  ["order_pk_columns_input"]: {
    id: number;
  };
  /** A product belonging to a customer order, along with a quantity


columns and relationships of "order_product" */
  ["order_product"]: {
    __typename?: "order_product";
    created_at?: PartialObjects["timestamptz"];
    id?: number;
    /** An object relationship */
    order?: PartialObjects["order"];
    order_id?: number;
    /** An object relationship */
    product?: PartialObjects["product"];
    product_id?: number;
    quantity?: number;
    updated_at?: PartialObjects["timestamptz"];
  };
  /** aggregated selection of "order_product" */
  ["order_product_aggregate"]: {
    __typename?: "order_product_aggregate";
    aggregate?: PartialObjects["order_product_aggregate_fields"];
    nodes?: PartialObjects["order_product"][];
  };
  /** aggregate fields of "order_product" */
  ["order_product_aggregate_fields"]: {
    __typename?: "order_product_aggregate_fields";
    avg?: PartialObjects["order_product_avg_fields"];
    count?: number;
    max?: PartialObjects["order_product_max_fields"];
    min?: PartialObjects["order_product_min_fields"];
    stddev?: PartialObjects["order_product_stddev_fields"];
    stddev_pop?: PartialObjects["order_product_stddev_pop_fields"];
    stddev_samp?: PartialObjects["order_product_stddev_samp_fields"];
    sum?: PartialObjects["order_product_sum_fields"];
    var_pop?: PartialObjects["order_product_var_pop_fields"];
    var_samp?: PartialObjects["order_product_var_samp_fields"];
    variance?: PartialObjects["order_product_variance_fields"];
  };
  /** order by aggregate values of table "order_product" */
  ["order_product_aggregate_order_by"]: {
    avg?: PartialObjects["order_product_avg_order_by"];
    count?: PartialObjects["order_by"];
    max?: PartialObjects["order_product_max_order_by"];
    min?: PartialObjects["order_product_min_order_by"];
    stddev?: PartialObjects["order_product_stddev_order_by"];
    stddev_pop?: PartialObjects["order_product_stddev_pop_order_by"];
    stddev_samp?: PartialObjects["order_product_stddev_samp_order_by"];
    sum?: PartialObjects["order_product_sum_order_by"];
    var_pop?: PartialObjects["order_product_var_pop_order_by"];
    var_samp?: PartialObjects["order_product_var_samp_order_by"];
    variance?: PartialObjects["order_product_variance_order_by"];
  };
  /** input type for inserting array relation for remote table "order_product" */
  ["order_product_arr_rel_insert_input"]: {
    data: PartialObjects["order_product_insert_input"][];
    on_conflict?: PartialObjects["order_product_on_conflict"];
  };
  /** aggregate avg on columns */
  ["order_product_avg_fields"]: {
    __typename?: "order_product_avg_fields";
    id?: number;
    order_id?: number;
    product_id?: number;
    quantity?: number;
  };
  /** order by avg() on columns of table "order_product" */
  ["order_product_avg_order_by"]: {
    id?: PartialObjects["order_by"];
    order_id?: PartialObjects["order_by"];
    product_id?: PartialObjects["order_by"];
    quantity?: PartialObjects["order_by"];
  };
  /** Boolean expression to filter rows from the table "order_product". All fields are combined with a logical 'AND'. */
  ["order_product_bool_exp"]: {
    _and?: (PartialObjects["order_product_bool_exp"] | undefined)[];
    _not?: PartialObjects["order_product_bool_exp"];
    _or?: (PartialObjects["order_product_bool_exp"] | undefined)[];
    created_at?: PartialObjects["timestamptz_comparison_exp"];
    id?: PartialObjects["Int_comparison_exp"];
    order?: PartialObjects["order_bool_exp"];
    order_id?: PartialObjects["Int_comparison_exp"];
    product?: PartialObjects["product_bool_exp"];
    product_id?: PartialObjects["Int_comparison_exp"];
    quantity?: PartialObjects["Int_comparison_exp"];
    updated_at?: PartialObjects["timestamptz_comparison_exp"];
  };
  /** unique or primary key constraints on table "order_product" */
  ["order_product_constraint"]: order_product_constraint;
  /** input type for incrementing integer column in table "order_product" */
  ["order_product_inc_input"]: {
    id?: number;
    order_id?: number;
    product_id?: number;
    quantity?: number;
  };
  /** input type for inserting data into table "order_product" */
  ["order_product_insert_input"]: {
    created_at?: PartialObjects["timestamptz"];
    id?: number;
    order?: PartialObjects["order_obj_rel_insert_input"];
    order_id?: number;
    product?: PartialObjects["product_obj_rel_insert_input"];
    product_id?: number;
    quantity?: number;
    updated_at?: PartialObjects["timestamptz"];
  };
  /** aggregate max on columns */
  ["order_product_max_fields"]: {
    __typename?: "order_product_max_fields";
    created_at?: PartialObjects["timestamptz"];
    id?: number;
    order_id?: number;
    product_id?: number;
    quantity?: number;
    updated_at?: PartialObjects["timestamptz"];
  };
  /** order by max() on columns of table "order_product" */
  ["order_product_max_order_by"]: {
    created_at?: PartialObjects["order_by"];
    id?: PartialObjects["order_by"];
    order_id?: PartialObjects["order_by"];
    product_id?: PartialObjects["order_by"];
    quantity?: PartialObjects["order_by"];
    updated_at?: PartialObjects["order_by"];
  };
  /** aggregate min on columns */
  ["order_product_min_fields"]: {
    __typename?: "order_product_min_fields";
    created_at?: PartialObjects["timestamptz"];
    id?: number;
    order_id?: number;
    product_id?: number;
    quantity?: number;
    updated_at?: PartialObjects["timestamptz"];
  };
  /** order by min() on columns of table "order_product" */
  ["order_product_min_order_by"]: {
    created_at?: PartialObjects["order_by"];
    id?: PartialObjects["order_by"];
    order_id?: PartialObjects["order_by"];
    product_id?: PartialObjects["order_by"];
    quantity?: PartialObjects["order_by"];
    updated_at?: PartialObjects["order_by"];
  };
  /** response of any mutation on the table "order_product" */
  ["order_product_mutation_response"]: {
    __typename?: "order_product_mutation_response";
    /** number of affected rows by the mutation */
    affected_rows?: number;
    /** data of the affected rows by the mutation */
    returning?: PartialObjects["order_product"][];
  };
  /** input type for inserting object relation for remote table "order_product" */
  ["order_product_obj_rel_insert_input"]: {
    data: PartialObjects["order_product_insert_input"];
    on_conflict?: PartialObjects["order_product_on_conflict"];
  };
  /** on conflict condition type for table "order_product" */
  ["order_product_on_conflict"]: {
    constraint: PartialObjects["order_product_constraint"];
    update_columns: PartialObjects["order_product_update_column"][];
    where?: PartialObjects["order_product_bool_exp"];
  };
  /** ordering options when selecting data from "order_product" */
  ["order_product_order_by"]: {
    created_at?: PartialObjects["order_by"];
    id?: PartialObjects["order_by"];
    order?: PartialObjects["order_order_by"];
    order_id?: PartialObjects["order_by"];
    product?: PartialObjects["product_order_by"];
    product_id?: PartialObjects["order_by"];
    quantity?: PartialObjects["order_by"];
    updated_at?: PartialObjects["order_by"];
  };
  /** primary key columns input for table: "order_product" */
  ["order_product_pk_columns_input"]: {
    id: number;
  };
  /** select columns of table "order_product" */
  ["order_product_select_column"]: order_product_select_column;
  /** input type for updating data in table "order_product" */
  ["order_product_set_input"]: {
    created_at?: PartialObjects["timestamptz"];
    id?: number;
    order_id?: number;
    product_id?: number;
    quantity?: number;
    updated_at?: PartialObjects["timestamptz"];
  };
  /** aggregate stddev on columns */
  ["order_product_stddev_fields"]: {
    __typename?: "order_product_stddev_fields";
    id?: number;
    order_id?: number;
    product_id?: number;
    quantity?: number;
  };
  /** order by stddev() on columns of table "order_product" */
  ["order_product_stddev_order_by"]: {
    id?: PartialObjects["order_by"];
    order_id?: PartialObjects["order_by"];
    product_id?: PartialObjects["order_by"];
    quantity?: PartialObjects["order_by"];
  };
  /** aggregate stddev_pop on columns */
  ["order_product_stddev_pop_fields"]: {
    __typename?: "order_product_stddev_pop_fields";
    id?: number;
    order_id?: number;
    product_id?: number;
    quantity?: number;
  };
  /** order by stddev_pop() on columns of table "order_product" */
  ["order_product_stddev_pop_order_by"]: {
    id?: PartialObjects["order_by"];
    order_id?: PartialObjects["order_by"];
    product_id?: PartialObjects["order_by"];
    quantity?: PartialObjects["order_by"];
  };
  /** aggregate stddev_samp on columns */
  ["order_product_stddev_samp_fields"]: {
    __typename?: "order_product_stddev_samp_fields";
    id?: number;
    order_id?: number;
    product_id?: number;
    quantity?: number;
  };
  /** order by stddev_samp() on columns of table "order_product" */
  ["order_product_stddev_samp_order_by"]: {
    id?: PartialObjects["order_by"];
    order_id?: PartialObjects["order_by"];
    product_id?: PartialObjects["order_by"];
    quantity?: PartialObjects["order_by"];
  };
  /** aggregate sum on columns */
  ["order_product_sum_fields"]: {
    __typename?: "order_product_sum_fields";
    id?: number;
    order_id?: number;
    product_id?: number;
    quantity?: number;
  };
  /** order by sum() on columns of table "order_product" */
  ["order_product_sum_order_by"]: {
    id?: PartialObjects["order_by"];
    order_id?: PartialObjects["order_by"];
    product_id?: PartialObjects["order_by"];
    quantity?: PartialObjects["order_by"];
  };
  /** update columns of table "order_product" */
  ["order_product_update_column"]: order_product_update_column;
  /** aggregate var_pop on columns */
  ["order_product_var_pop_fields"]: {
    __typename?: "order_product_var_pop_fields";
    id?: number;
    order_id?: number;
    product_id?: number;
    quantity?: number;
  };
  /** order by var_pop() on columns of table "order_product" */
  ["order_product_var_pop_order_by"]: {
    id?: PartialObjects["order_by"];
    order_id?: PartialObjects["order_by"];
    product_id?: PartialObjects["order_by"];
    quantity?: PartialObjects["order_by"];
  };
  /** aggregate var_samp on columns */
  ["order_product_var_samp_fields"]: {
    __typename?: "order_product_var_samp_fields";
    id?: number;
    order_id?: number;
    product_id?: number;
    quantity?: number;
  };
  /** order by var_samp() on columns of table "order_product" */
  ["order_product_var_samp_order_by"]: {
    id?: PartialObjects["order_by"];
    order_id?: PartialObjects["order_by"];
    product_id?: PartialObjects["order_by"];
    quantity?: PartialObjects["order_by"];
  };
  /** aggregate variance on columns */
  ["order_product_variance_fields"]: {
    __typename?: "order_product_variance_fields";
    id?: number;
    order_id?: number;
    product_id?: number;
    quantity?: number;
  };
  /** order by variance() on columns of table "order_product" */
  ["order_product_variance_order_by"]: {
    id?: PartialObjects["order_by"];
    order_id?: PartialObjects["order_by"];
    product_id?: PartialObjects["order_by"];
    quantity?: PartialObjects["order_by"];
  };
  /** select columns of table "order" */
  ["order_select_column"]: order_select_column;
  /** input type for updating data in table "order" */
  ["order_set_input"]: {
    billing_address_id?: number;
    created_at?: PartialObjects["timestamptz"];
    id?: number;
    is_shipped?: boolean;
    shipping_address_id?: number;
    updated_at?: PartialObjects["timestamptz"];
    user_id?: number;
  };
  /** aggregate stddev on columns */
  ["order_stddev_fields"]: {
    __typename?: "order_stddev_fields";
    billing_address_id?: number;
    id?: number;
    shipping_address_id?: number;
    user_id?: number;
  };
  /** order by stddev() on columns of table "order" */
  ["order_stddev_order_by"]: {
    billing_address_id?: PartialObjects["order_by"];
    id?: PartialObjects["order_by"];
    shipping_address_id?: PartialObjects["order_by"];
    user_id?: PartialObjects["order_by"];
  };
  /** aggregate stddev_pop on columns */
  ["order_stddev_pop_fields"]: {
    __typename?: "order_stddev_pop_fields";
    billing_address_id?: number;
    id?: number;
    shipping_address_id?: number;
    user_id?: number;
  };
  /** order by stddev_pop() on columns of table "order" */
  ["order_stddev_pop_order_by"]: {
    billing_address_id?: PartialObjects["order_by"];
    id?: PartialObjects["order_by"];
    shipping_address_id?: PartialObjects["order_by"];
    user_id?: PartialObjects["order_by"];
  };
  /** aggregate stddev_samp on columns */
  ["order_stddev_samp_fields"]: {
    __typename?: "order_stddev_samp_fields";
    billing_address_id?: number;
    id?: number;
    shipping_address_id?: number;
    user_id?: number;
  };
  /** order by stddev_samp() on columns of table "order" */
  ["order_stddev_samp_order_by"]: {
    billing_address_id?: PartialObjects["order_by"];
    id?: PartialObjects["order_by"];
    shipping_address_id?: PartialObjects["order_by"];
    user_id?: PartialObjects["order_by"];
  };
  /** aggregate sum on columns */
  ["order_sum_fields"]: {
    __typename?: "order_sum_fields";
    billing_address_id?: number;
    id?: number;
    shipping_address_id?: number;
    user_id?: number;
  };
  /** order by sum() on columns of table "order" */
  ["order_sum_order_by"]: {
    billing_address_id?: PartialObjects["order_by"];
    id?: PartialObjects["order_by"];
    shipping_address_id?: PartialObjects["order_by"];
    user_id?: PartialObjects["order_by"];
  };
  /** update columns of table "order" */
  ["order_update_column"]: order_update_column;
  /** aggregate var_pop on columns */
  ["order_var_pop_fields"]: {
    __typename?: "order_var_pop_fields";
    billing_address_id?: number;
    id?: number;
    shipping_address_id?: number;
    user_id?: number;
  };
  /** order by var_pop() on columns of table "order" */
  ["order_var_pop_order_by"]: {
    billing_address_id?: PartialObjects["order_by"];
    id?: PartialObjects["order_by"];
    shipping_address_id?: PartialObjects["order_by"];
    user_id?: PartialObjects["order_by"];
  };
  /** aggregate var_samp on columns */
  ["order_var_samp_fields"]: {
    __typename?: "order_var_samp_fields";
    billing_address_id?: number;
    id?: number;
    shipping_address_id?: number;
    user_id?: number;
  };
  /** order by var_samp() on columns of table "order" */
  ["order_var_samp_order_by"]: {
    billing_address_id?: PartialObjects["order_by"];
    id?: PartialObjects["order_by"];
    shipping_address_id?: PartialObjects["order_by"];
    user_id?: PartialObjects["order_by"];
  };
  /** aggregate variance on columns */
  ["order_variance_fields"]: {
    __typename?: "order_variance_fields";
    billing_address_id?: number;
    id?: number;
    shipping_address_id?: number;
    user_id?: number;
  };
  /** order by variance() on columns of table "order" */
  ["order_variance_order_by"]: {
    billing_address_id?: PartialObjects["order_by"];
    id?: PartialObjects["order_by"];
    shipping_address_id?: PartialObjects["order_by"];
    user_id?: PartialObjects["order_by"];
  };
  ["PaymentIntentClientSecret"]: {
    __typename?: "PaymentIntentClientSecret";
    clientSecret?: string;
  };
  /** columns and relationships of "product" */
  ["product"]: {
    __typename?: "product";
    brand?: string;
    /** An object relationship */
    category?: PartialObjects["product_category_enum"];
    category_display_name?: string;
    created_at?: PartialObjects["timestamptz"];
    description?: string;
    id?: number;
    image_urls?: PartialObjects["jsonb"];
    name?: string;
    /** An array relationship */
    orders?: PartialObjects["order_product"][];
    /** An aggregated array relationship */
    orders_aggregate?: PartialObjects["order_product_aggregate"];
    price?: PartialObjects["numeric"];
    /** An array relationship */
    product_reviews?: PartialObjects["product_review"][];
    /** An aggregated array relationship */
    product_reviews_aggregate?: PartialObjects["product_review_aggregate"];
    updated_at?: PartialObjects["timestamptz"];
  };
  /** aggregated selection of "product" */
  ["product_aggregate"]: {
    __typename?: "product_aggregate";
    aggregate?: PartialObjects["product_aggregate_fields"];
    nodes?: PartialObjects["product"][];
  };
  /** aggregate fields of "product" */
  ["product_aggregate_fields"]: {
    __typename?: "product_aggregate_fields";
    avg?: PartialObjects["product_avg_fields"];
    count?: number;
    max?: PartialObjects["product_max_fields"];
    min?: PartialObjects["product_min_fields"];
    stddev?: PartialObjects["product_stddev_fields"];
    stddev_pop?: PartialObjects["product_stddev_pop_fields"];
    stddev_samp?: PartialObjects["product_stddev_samp_fields"];
    sum?: PartialObjects["product_sum_fields"];
    var_pop?: PartialObjects["product_var_pop_fields"];
    var_samp?: PartialObjects["product_var_samp_fields"];
    variance?: PartialObjects["product_variance_fields"];
  };
  /** order by aggregate values of table "product" */
  ["product_aggregate_order_by"]: {
    avg?: PartialObjects["product_avg_order_by"];
    count?: PartialObjects["order_by"];
    max?: PartialObjects["product_max_order_by"];
    min?: PartialObjects["product_min_order_by"];
    stddev?: PartialObjects["product_stddev_order_by"];
    stddev_pop?: PartialObjects["product_stddev_pop_order_by"];
    stddev_samp?: PartialObjects["product_stddev_samp_order_by"];
    sum?: PartialObjects["product_sum_order_by"];
    var_pop?: PartialObjects["product_var_pop_order_by"];
    var_samp?: PartialObjects["product_var_samp_order_by"];
    variance?: PartialObjects["product_variance_order_by"];
  };
  /** append existing jsonb value of filtered columns with new jsonb value */
  ["product_append_input"]: {
    image_urls?: PartialObjects["jsonb"];
  };
  /** input type for inserting array relation for remote table "product" */
  ["product_arr_rel_insert_input"]: {
    data: PartialObjects["product_insert_input"][];
    on_conflict?: PartialObjects["product_on_conflict"];
  };
  /** aggregate avg on columns */
  ["product_avg_fields"]: {
    __typename?: "product_avg_fields";
    id?: number;
    price?: number;
  };
  /** order by avg() on columns of table "product" */
  ["product_avg_order_by"]: {
    id?: PartialObjects["order_by"];
    price?: PartialObjects["order_by"];
  };
  /** Boolean expression to filter rows from the table "product". All fields are combined with a logical 'AND'. */
  ["product_bool_exp"]: {
    _and?: (PartialObjects["product_bool_exp"] | undefined)[];
    _not?: PartialObjects["product_bool_exp"];
    _or?: (PartialObjects["product_bool_exp"] | undefined)[];
    brand?: PartialObjects["String_comparison_exp"];
    category?: PartialObjects["product_category_enum_bool_exp"];
    category_display_name?: PartialObjects["String_comparison_exp"];
    created_at?: PartialObjects["timestamptz_comparison_exp"];
    description?: PartialObjects["String_comparison_exp"];
    id?: PartialObjects["Int_comparison_exp"];
    image_urls?: PartialObjects["jsonb_comparison_exp"];
    name?: PartialObjects["String_comparison_exp"];
    orders?: PartialObjects["order_product_bool_exp"];
    price?: PartialObjects["numeric_comparison_exp"];
    product_reviews?: PartialObjects["product_review_bool_exp"];
    updated_at?: PartialObjects["timestamptz_comparison_exp"];
  };
  /** columns and relationships of "product_category_enum" */
  ["product_category_enum"]: {
    __typename?: "product_category_enum";
    display_name?: string;
    name?: string;
    /** An array relationship */
    products?: PartialObjects["product"][];
    /** An aggregated array relationship */
    products_aggregate?: PartialObjects["product_aggregate"];
  };
  /** aggregated selection of "product_category_enum" */
  ["product_category_enum_aggregate"]: {
    __typename?: "product_category_enum_aggregate";
    aggregate?: PartialObjects["product_category_enum_aggregate_fields"];
    nodes?: PartialObjects["product_category_enum"][];
  };
  /** aggregate fields of "product_category_enum" */
  ["product_category_enum_aggregate_fields"]: {
    __typename?: "product_category_enum_aggregate_fields";
    count?: number;
    max?: PartialObjects["product_category_enum_max_fields"];
    min?: PartialObjects["product_category_enum_min_fields"];
  };
  /** order by aggregate values of table "product_category_enum" */
  ["product_category_enum_aggregate_order_by"]: {
    count?: PartialObjects["order_by"];
    max?: PartialObjects["product_category_enum_max_order_by"];
    min?: PartialObjects["product_category_enum_min_order_by"];
  };
  /** input type for inserting array relation for remote table "product_category_enum" */
  ["product_category_enum_arr_rel_insert_input"]: {
    data: PartialObjects["product_category_enum_insert_input"][];
    on_conflict?: PartialObjects["product_category_enum_on_conflict"];
  };
  /** Boolean expression to filter rows from the table "product_category_enum". All fields are combined with a logical 'AND'. */
  ["product_category_enum_bool_exp"]: {
    _and?: (PartialObjects["product_category_enum_bool_exp"] | undefined)[];
    _not?: PartialObjects["product_category_enum_bool_exp"];
    _or?: (PartialObjects["product_category_enum_bool_exp"] | undefined)[];
    display_name?: PartialObjects["String_comparison_exp"];
    name?: PartialObjects["String_comparison_exp"];
    products?: PartialObjects["product_bool_exp"];
  };
  /** unique or primary key constraints on table "product_category_enum" */
  ["product_category_enum_constraint"]: product_category_enum_constraint;
  /** input type for inserting data into table "product_category_enum" */
  ["product_category_enum_insert_input"]: {
    display_name?: string;
    name?: string;
    products?: PartialObjects["product_arr_rel_insert_input"];
  };
  /** aggregate max on columns */
  ["product_category_enum_max_fields"]: {
    __typename?: "product_category_enum_max_fields";
    display_name?: string;
    name?: string;
  };
  /** order by max() on columns of table "product_category_enum" */
  ["product_category_enum_max_order_by"]: {
    display_name?: PartialObjects["order_by"];
    name?: PartialObjects["order_by"];
  };
  /** aggregate min on columns */
  ["product_category_enum_min_fields"]: {
    __typename?: "product_category_enum_min_fields";
    display_name?: string;
    name?: string;
  };
  /** order by min() on columns of table "product_category_enum" */
  ["product_category_enum_min_order_by"]: {
    display_name?: PartialObjects["order_by"];
    name?: PartialObjects["order_by"];
  };
  /** response of any mutation on the table "product_category_enum" */
  ["product_category_enum_mutation_response"]: {
    __typename?: "product_category_enum_mutation_response";
    /** number of affected rows by the mutation */
    affected_rows?: number;
    /** data of the affected rows by the mutation */
    returning?: PartialObjects["product_category_enum"][];
  };
  /** input type for inserting object relation for remote table "product_category_enum" */
  ["product_category_enum_obj_rel_insert_input"]: {
    data: PartialObjects["product_category_enum_insert_input"];
    on_conflict?: PartialObjects["product_category_enum_on_conflict"];
  };
  /** on conflict condition type for table "product_category_enum" */
  ["product_category_enum_on_conflict"]: {
    constraint: PartialObjects["product_category_enum_constraint"];
    update_columns: PartialObjects["product_category_enum_update_column"][];
    where?: PartialObjects["product_category_enum_bool_exp"];
  };
  /** ordering options when selecting data from "product_category_enum" */
  ["product_category_enum_order_by"]: {
    display_name?: PartialObjects["order_by"];
    name?: PartialObjects["order_by"];
    products_aggregate?: PartialObjects["product_aggregate_order_by"];
  };
  /** primary key columns input for table: "product_category_enum" */
  ["product_category_enum_pk_columns_input"]: {
    name: string;
  };
  /** select columns of table "product_category_enum" */
  ["product_category_enum_select_column"]: product_category_enum_select_column;
  /** input type for updating data in table "product_category_enum" */
  ["product_category_enum_set_input"]: {
    display_name?: string;
    name?: string;
  };
  /** update columns of table "product_category_enum" */
  ["product_category_enum_update_column"]: product_category_enum_update_column;
  /** unique or primary key constraints on table "product" */
  ["product_constraint"]: product_constraint;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  ["product_delete_at_path_input"]: {
    image_urls?: (string | undefined)[];
  };
  /** delete the array element with specified index (negative integers count from the
end). throws an error if top level container is not an array */
  ["product_delete_elem_input"]: {
    image_urls?: number;
  };
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  ["product_delete_key_input"]: {
    image_urls?: string;
  };
  /** input type for incrementing integer column in table "product" */
  ["product_inc_input"]: {
    id?: number;
    price?: PartialObjects["numeric"];
  };
  /** input type for inserting data into table "product" */
  ["product_insert_input"]: {
    brand?: string;
    category?: PartialObjects["product_category_enum_obj_rel_insert_input"];
    category_display_name?: string;
    created_at?: PartialObjects["timestamptz"];
    description?: string;
    id?: number;
    image_urls?: PartialObjects["jsonb"];
    name?: string;
    orders?: PartialObjects["order_product_arr_rel_insert_input"];
    price?: PartialObjects["numeric"];
    product_reviews?: PartialObjects["product_review_arr_rel_insert_input"];
    updated_at?: PartialObjects["timestamptz"];
  };
  /** aggregate max on columns */
  ["product_max_fields"]: {
    __typename?: "product_max_fields";
    brand?: string;
    category_display_name?: string;
    created_at?: PartialObjects["timestamptz"];
    description?: string;
    id?: number;
    name?: string;
    price?: PartialObjects["numeric"];
    updated_at?: PartialObjects["timestamptz"];
  };
  /** order by max() on columns of table "product" */
  ["product_max_order_by"]: {
    brand?: PartialObjects["order_by"];
    category_display_name?: PartialObjects["order_by"];
    created_at?: PartialObjects["order_by"];
    description?: PartialObjects["order_by"];
    id?: PartialObjects["order_by"];
    name?: PartialObjects["order_by"];
    price?: PartialObjects["order_by"];
    updated_at?: PartialObjects["order_by"];
  };
  /** aggregate min on columns */
  ["product_min_fields"]: {
    __typename?: "product_min_fields";
    brand?: string;
    category_display_name?: string;
    created_at?: PartialObjects["timestamptz"];
    description?: string;
    id?: number;
    name?: string;
    price?: PartialObjects["numeric"];
    updated_at?: PartialObjects["timestamptz"];
  };
  /** order by min() on columns of table "product" */
  ["product_min_order_by"]: {
    brand?: PartialObjects["order_by"];
    category_display_name?: PartialObjects["order_by"];
    created_at?: PartialObjects["order_by"];
    description?: PartialObjects["order_by"];
    id?: PartialObjects["order_by"];
    name?: PartialObjects["order_by"];
    price?: PartialObjects["order_by"];
    updated_at?: PartialObjects["order_by"];
  };
  /** response of any mutation on the table "product" */
  ["product_mutation_response"]: {
    __typename?: "product_mutation_response";
    /** number of affected rows by the mutation */
    affected_rows?: number;
    /** data of the affected rows by the mutation */
    returning?: PartialObjects["product"][];
  };
  /** input type for inserting object relation for remote table "product" */
  ["product_obj_rel_insert_input"]: {
    data: PartialObjects["product_insert_input"];
    on_conflict?: PartialObjects["product_on_conflict"];
  };
  /** on conflict condition type for table "product" */
  ["product_on_conflict"]: {
    constraint: PartialObjects["product_constraint"];
    update_columns: PartialObjects["product_update_column"][];
    where?: PartialObjects["product_bool_exp"];
  };
  /** ordering options when selecting data from "product" */
  ["product_order_by"]: {
    brand?: PartialObjects["order_by"];
    category?: PartialObjects["product_category_enum_order_by"];
    category_display_name?: PartialObjects["order_by"];
    created_at?: PartialObjects["order_by"];
    description?: PartialObjects["order_by"];
    id?: PartialObjects["order_by"];
    image_urls?: PartialObjects["order_by"];
    name?: PartialObjects["order_by"];
    orders_aggregate?: PartialObjects["order_product_aggregate_order_by"];
    price?: PartialObjects["order_by"];
    product_reviews_aggregate?: PartialObjects["product_review_aggregate_order_by"];
    updated_at?: PartialObjects["order_by"];
  };
  /** primary key columns input for table: "product" */
  ["product_pk_columns_input"]: {
    id: number;
  };
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  ["product_prepend_input"]: {
    image_urls?: PartialObjects["jsonb"];
  };
  /** A review for a product which a customer has purchased before


columns and relationships of "product_review" */
  ["product_review"]: {
    __typename?: "product_review";
    comment?: string;
    created_at?: PartialObjects["timestamptz"];
    id?: number;
    /** An object relationship */
    product?: PartialObjects["product"];
    product_id?: number;
    rating?: number;
    updated_at?: PartialObjects["timestamptz"];
    /** An object relationship */
    user?: PartialObjects["user"];
    user_id?: number;
  };
  /** aggregated selection of "product_review" */
  ["product_review_aggregate"]: {
    __typename?: "product_review_aggregate";
    aggregate?: PartialObjects["product_review_aggregate_fields"];
    nodes?: PartialObjects["product_review"][];
  };
  /** aggregate fields of "product_review" */
  ["product_review_aggregate_fields"]: {
    __typename?: "product_review_aggregate_fields";
    avg?: PartialObjects["product_review_avg_fields"];
    count?: number;
    max?: PartialObjects["product_review_max_fields"];
    min?: PartialObjects["product_review_min_fields"];
    stddev?: PartialObjects["product_review_stddev_fields"];
    stddev_pop?: PartialObjects["product_review_stddev_pop_fields"];
    stddev_samp?: PartialObjects["product_review_stddev_samp_fields"];
    sum?: PartialObjects["product_review_sum_fields"];
    var_pop?: PartialObjects["product_review_var_pop_fields"];
    var_samp?: PartialObjects["product_review_var_samp_fields"];
    variance?: PartialObjects["product_review_variance_fields"];
  };
  /** order by aggregate values of table "product_review" */
  ["product_review_aggregate_order_by"]: {
    avg?: PartialObjects["product_review_avg_order_by"];
    count?: PartialObjects["order_by"];
    max?: PartialObjects["product_review_max_order_by"];
    min?: PartialObjects["product_review_min_order_by"];
    stddev?: PartialObjects["product_review_stddev_order_by"];
    stddev_pop?: PartialObjects["product_review_stddev_pop_order_by"];
    stddev_samp?: PartialObjects["product_review_stddev_samp_order_by"];
    sum?: PartialObjects["product_review_sum_order_by"];
    var_pop?: PartialObjects["product_review_var_pop_order_by"];
    var_samp?: PartialObjects["product_review_var_samp_order_by"];
    variance?: PartialObjects["product_review_variance_order_by"];
  };
  /** input type for inserting array relation for remote table "product_review" */
  ["product_review_arr_rel_insert_input"]: {
    data: PartialObjects["product_review_insert_input"][];
    on_conflict?: PartialObjects["product_review_on_conflict"];
  };
  /** aggregate avg on columns */
  ["product_review_avg_fields"]: {
    __typename?: "product_review_avg_fields";
    id?: number;
    product_id?: number;
    rating?: number;
    user_id?: number;
  };
  /** order by avg() on columns of table "product_review" */
  ["product_review_avg_order_by"]: {
    id?: PartialObjects["order_by"];
    product_id?: PartialObjects["order_by"];
    rating?: PartialObjects["order_by"];
    user_id?: PartialObjects["order_by"];
  };
  /** Boolean expression to filter rows from the table "product_review". All fields are combined with a logical 'AND'. */
  ["product_review_bool_exp"]: {
    _and?: (PartialObjects["product_review_bool_exp"] | undefined)[];
    _not?: PartialObjects["product_review_bool_exp"];
    _or?: (PartialObjects["product_review_bool_exp"] | undefined)[];
    comment?: PartialObjects["String_comparison_exp"];
    created_at?: PartialObjects["timestamptz_comparison_exp"];
    id?: PartialObjects["Int_comparison_exp"];
    product?: PartialObjects["product_bool_exp"];
    product_id?: PartialObjects["Int_comparison_exp"];
    rating?: PartialObjects["Int_comparison_exp"];
    updated_at?: PartialObjects["timestamptz_comparison_exp"];
    user?: PartialObjects["user_bool_exp"];
    user_id?: PartialObjects["Int_comparison_exp"];
  };
  /** unique or primary key constraints on table "product_review" */
  ["product_review_constraint"]: product_review_constraint;
  /** input type for incrementing integer column in table "product_review" */
  ["product_review_inc_input"]: {
    id?: number;
    product_id?: number;
    rating?: number;
    user_id?: number;
  };
  /** input type for inserting data into table "product_review" */
  ["product_review_insert_input"]: {
    comment?: string;
    created_at?: PartialObjects["timestamptz"];
    id?: number;
    product?: PartialObjects["product_obj_rel_insert_input"];
    product_id?: number;
    rating?: number;
    updated_at?: PartialObjects["timestamptz"];
    user?: PartialObjects["user_obj_rel_insert_input"];
    user_id?: number;
  };
  /** aggregate max on columns */
  ["product_review_max_fields"]: {
    __typename?: "product_review_max_fields";
    comment?: string;
    created_at?: PartialObjects["timestamptz"];
    id?: number;
    product_id?: number;
    rating?: number;
    updated_at?: PartialObjects["timestamptz"];
    user_id?: number;
  };
  /** order by max() on columns of table "product_review" */
  ["product_review_max_order_by"]: {
    comment?: PartialObjects["order_by"];
    created_at?: PartialObjects["order_by"];
    id?: PartialObjects["order_by"];
    product_id?: PartialObjects["order_by"];
    rating?: PartialObjects["order_by"];
    updated_at?: PartialObjects["order_by"];
    user_id?: PartialObjects["order_by"];
  };
  /** aggregate min on columns */
  ["product_review_min_fields"]: {
    __typename?: "product_review_min_fields";
    comment?: string;
    created_at?: PartialObjects["timestamptz"];
    id?: number;
    product_id?: number;
    rating?: number;
    updated_at?: PartialObjects["timestamptz"];
    user_id?: number;
  };
  /** order by min() on columns of table "product_review" */
  ["product_review_min_order_by"]: {
    comment?: PartialObjects["order_by"];
    created_at?: PartialObjects["order_by"];
    id?: PartialObjects["order_by"];
    product_id?: PartialObjects["order_by"];
    rating?: PartialObjects["order_by"];
    updated_at?: PartialObjects["order_by"];
    user_id?: PartialObjects["order_by"];
  };
  /** response of any mutation on the table "product_review" */
  ["product_review_mutation_response"]: {
    __typename?: "product_review_mutation_response";
    /** number of affected rows by the mutation */
    affected_rows?: number;
    /** data of the affected rows by the mutation */
    returning?: PartialObjects["product_review"][];
  };
  /** input type for inserting object relation for remote table "product_review" */
  ["product_review_obj_rel_insert_input"]: {
    data: PartialObjects["product_review_insert_input"];
    on_conflict?: PartialObjects["product_review_on_conflict"];
  };
  /** on conflict condition type for table "product_review" */
  ["product_review_on_conflict"]: {
    constraint: PartialObjects["product_review_constraint"];
    update_columns: PartialObjects["product_review_update_column"][];
    where?: PartialObjects["product_review_bool_exp"];
  };
  /** ordering options when selecting data from "product_review" */
  ["product_review_order_by"]: {
    comment?: PartialObjects["order_by"];
    created_at?: PartialObjects["order_by"];
    id?: PartialObjects["order_by"];
    product?: PartialObjects["product_order_by"];
    product_id?: PartialObjects["order_by"];
    rating?: PartialObjects["order_by"];
    updated_at?: PartialObjects["order_by"];
    user?: PartialObjects["user_order_by"];
    user_id?: PartialObjects["order_by"];
  };
  /** primary key columns input for table: "product_review" */
  ["product_review_pk_columns_input"]: {
    id: number;
  };
  /** select columns of table "product_review" */
  ["product_review_select_column"]: product_review_select_column;
  /** input type for updating data in table "product_review" */
  ["product_review_set_input"]: {
    comment?: string;
    created_at?: PartialObjects["timestamptz"];
    id?: number;
    product_id?: number;
    rating?: number;
    updated_at?: PartialObjects["timestamptz"];
    user_id?: number;
  };
  /** aggregate stddev on columns */
  ["product_review_stddev_fields"]: {
    __typename?: "product_review_stddev_fields";
    id?: number;
    product_id?: number;
    rating?: number;
    user_id?: number;
  };
  /** order by stddev() on columns of table "product_review" */
  ["product_review_stddev_order_by"]: {
    id?: PartialObjects["order_by"];
    product_id?: PartialObjects["order_by"];
    rating?: PartialObjects["order_by"];
    user_id?: PartialObjects["order_by"];
  };
  /** aggregate stddev_pop on columns */
  ["product_review_stddev_pop_fields"]: {
    __typename?: "product_review_stddev_pop_fields";
    id?: number;
    product_id?: number;
    rating?: number;
    user_id?: number;
  };
  /** order by stddev_pop() on columns of table "product_review" */
  ["product_review_stddev_pop_order_by"]: {
    id?: PartialObjects["order_by"];
    product_id?: PartialObjects["order_by"];
    rating?: PartialObjects["order_by"];
    user_id?: PartialObjects["order_by"];
  };
  /** aggregate stddev_samp on columns */
  ["product_review_stddev_samp_fields"]: {
    __typename?: "product_review_stddev_samp_fields";
    id?: number;
    product_id?: number;
    rating?: number;
    user_id?: number;
  };
  /** order by stddev_samp() on columns of table "product_review" */
  ["product_review_stddev_samp_order_by"]: {
    id?: PartialObjects["order_by"];
    product_id?: PartialObjects["order_by"];
    rating?: PartialObjects["order_by"];
    user_id?: PartialObjects["order_by"];
  };
  /** aggregate sum on columns */
  ["product_review_sum_fields"]: {
    __typename?: "product_review_sum_fields";
    id?: number;
    product_id?: number;
    rating?: number;
    user_id?: number;
  };
  /** order by sum() on columns of table "product_review" */
  ["product_review_sum_order_by"]: {
    id?: PartialObjects["order_by"];
    product_id?: PartialObjects["order_by"];
    rating?: PartialObjects["order_by"];
    user_id?: PartialObjects["order_by"];
  };
  /** update columns of table "product_review" */
  ["product_review_update_column"]: product_review_update_column;
  /** aggregate var_pop on columns */
  ["product_review_var_pop_fields"]: {
    __typename?: "product_review_var_pop_fields";
    id?: number;
    product_id?: number;
    rating?: number;
    user_id?: number;
  };
  /** order by var_pop() on columns of table "product_review" */
  ["product_review_var_pop_order_by"]: {
    id?: PartialObjects["order_by"];
    product_id?: PartialObjects["order_by"];
    rating?: PartialObjects["order_by"];
    user_id?: PartialObjects["order_by"];
  };
  /** aggregate var_samp on columns */
  ["product_review_var_samp_fields"]: {
    __typename?: "product_review_var_samp_fields";
    id?: number;
    product_id?: number;
    rating?: number;
    user_id?: number;
  };
  /** order by var_samp() on columns of table "product_review" */
  ["product_review_var_samp_order_by"]: {
    id?: PartialObjects["order_by"];
    product_id?: PartialObjects["order_by"];
    rating?: PartialObjects["order_by"];
    user_id?: PartialObjects["order_by"];
  };
  /** aggregate variance on columns */
  ["product_review_variance_fields"]: {
    __typename?: "product_review_variance_fields";
    id?: number;
    product_id?: number;
    rating?: number;
    user_id?: number;
  };
  /** order by variance() on columns of table "product_review" */
  ["product_review_variance_order_by"]: {
    id?: PartialObjects["order_by"];
    product_id?: PartialObjects["order_by"];
    rating?: PartialObjects["order_by"];
    user_id?: PartialObjects["order_by"];
  };
  /** select columns of table "product" */
  ["product_select_column"]: product_select_column;
  /** input type for updating data in table "product" */
  ["product_set_input"]: {
    brand?: string;
    category_display_name?: string;
    created_at?: PartialObjects["timestamptz"];
    description?: string;
    id?: number;
    image_urls?: PartialObjects["jsonb"];
    name?: string;
    price?: PartialObjects["numeric"];
    updated_at?: PartialObjects["timestamptz"];
  };
  /** aggregate stddev on columns */
  ["product_stddev_fields"]: {
    __typename?: "product_stddev_fields";
    id?: number;
    price?: number;
  };
  /** order by stddev() on columns of table "product" */
  ["product_stddev_order_by"]: {
    id?: PartialObjects["order_by"];
    price?: PartialObjects["order_by"];
  };
  /** aggregate stddev_pop on columns */
  ["product_stddev_pop_fields"]: {
    __typename?: "product_stddev_pop_fields";
    id?: number;
    price?: number;
  };
  /** order by stddev_pop() on columns of table "product" */
  ["product_stddev_pop_order_by"]: {
    id?: PartialObjects["order_by"];
    price?: PartialObjects["order_by"];
  };
  /** aggregate stddev_samp on columns */
  ["product_stddev_samp_fields"]: {
    __typename?: "product_stddev_samp_fields";
    id?: number;
    price?: number;
  };
  /** order by stddev_samp() on columns of table "product" */
  ["product_stddev_samp_order_by"]: {
    id?: PartialObjects["order_by"];
    price?: PartialObjects["order_by"];
  };
  /** aggregate sum on columns */
  ["product_sum_fields"]: {
    __typename?: "product_sum_fields";
    id?: number;
    price?: PartialObjects["numeric"];
  };
  /** order by sum() on columns of table "product" */
  ["product_sum_order_by"]: {
    id?: PartialObjects["order_by"];
    price?: PartialObjects["order_by"];
  };
  /** update columns of table "product" */
  ["product_update_column"]: product_update_column;
  /** aggregate var_pop on columns */
  ["product_var_pop_fields"]: {
    __typename?: "product_var_pop_fields";
    id?: number;
    price?: number;
  };
  /** order by var_pop() on columns of table "product" */
  ["product_var_pop_order_by"]: {
    id?: PartialObjects["order_by"];
    price?: PartialObjects["order_by"];
  };
  /** aggregate var_samp on columns */
  ["product_var_samp_fields"]: {
    __typename?: "product_var_samp_fields";
    id?: number;
    price?: number;
  };
  /** order by var_samp() on columns of table "product" */
  ["product_var_samp_order_by"]: {
    id?: PartialObjects["order_by"];
    price?: PartialObjects["order_by"];
  };
  /** aggregate variance on columns */
  ["product_variance_fields"]: {
    __typename?: "product_variance_fields";
    id?: number;
    price?: number;
  };
  /** order by variance() on columns of table "product" */
  ["product_variance_order_by"]: {
    id?: PartialObjects["order_by"];
    price?: PartialObjects["order_by"];
  };
  /** query root */
  ["query_root"]: {
    __typename?: "query_root";
    /** fetch data from the table: "address" */
    address?: PartialObjects["address"][];
    /** fetch aggregated fields from the table: "address" */
    address_aggregate?: PartialObjects["address_aggregate"];
    /** fetch data from the table: "address" using primary key columns */
    address_by_pk?: PartialObjects["address"];
    /** perform the action: "adminLogin" */
    adminLogin?: PartialObjects["JWT"];
    /** fetch data from the table: "order" */
    order?: PartialObjects["order"][];
    /** fetch aggregated fields from the table: "order" */
    order_aggregate?: PartialObjects["order_aggregate"];
    /** fetch data from the table: "order" using primary key columns */
    order_by_pk?: PartialObjects["order"];
    /** fetch data from the table: "order_product" */
    order_product?: PartialObjects["order_product"][];
    /** fetch aggregated fields from the table: "order_product" */
    order_product_aggregate?: PartialObjects["order_product_aggregate"];
    /** fetch data from the table: "order_product" using primary key columns */
    order_product_by_pk?: PartialObjects["order_product"];
    /** fetch data from the table: "product" */
    product?: PartialObjects["product"][];
    /** fetch aggregated fields from the table: "product" */
    product_aggregate?: PartialObjects["product_aggregate"];
    /** fetch data from the table: "product" using primary key columns */
    product_by_pk?: PartialObjects["product"];
    /** fetch data from the table: "product_category_enum" */
    product_category_enum?: PartialObjects["product_category_enum"][];
    /** fetch aggregated fields from the table: "product_category_enum" */
    product_category_enum_aggregate?: PartialObjects["product_category_enum_aggregate"];
    /** fetch data from the table: "product_category_enum" using primary key columns */
    product_category_enum_by_pk?: PartialObjects["product_category_enum"];
    /** fetch data from the table: "product_review" */
    product_review?: PartialObjects["product_review"][];
    /** fetch aggregated fields from the table: "product_review" */
    product_review_aggregate?: PartialObjects["product_review_aggregate"];
    /** fetch data from the table: "product_review" using primary key columns */
    product_review_by_pk?: PartialObjects["product_review"];
    /** perform the action: "refreshToken" */
    refreshToken?: PartialObjects["RefreshTokenJWT"];
    /** fetch data from the table: "site_admin" */
    site_admin?: PartialObjects["site_admin"][];
    /** fetch aggregated fields from the table: "site_admin" */
    site_admin_aggregate?: PartialObjects["site_admin_aggregate"];
    /** fetch data from the table: "site_admin" using primary key columns */
    site_admin_by_pk?: PartialObjects["site_admin"];
    /** fetch data from the table: "user" */
    user?: PartialObjects["user"][];
    /** fetch aggregated fields from the table: "user" */
    user_aggregate?: PartialObjects["user_aggregate"];
    /** fetch data from the table: "user" using primary key columns */
    user_by_pk?: PartialObjects["user"];
  };
  ["RefreshTokenInput"]: {
    refreshToken: string;
  };
  ["RefreshTokenJWT"]: {
    __typename?: "RefreshTokenJWT";
    token?: string;
  };
  ["SignupInput"]: {
    email: string;
    name: string;
    password: string;
  };
  /** Someone administrative capabilities on the site


columns and relationships of "site_admin" */
  ["site_admin"]: {
    __typename?: "site_admin";
    created_at?: PartialObjects["timestamptz"];
    email?: string;
    id?: number;
    /** A bcrypt-hashed version of the admin password, compared against securely in the JWT Auth API handler for sign-in */
    password?: string;
    updated_at?: PartialObjects["timestamptz"];
  };
  /** aggregated selection of "site_admin" */
  ["site_admin_aggregate"]: {
    __typename?: "site_admin_aggregate";
    aggregate?: PartialObjects["site_admin_aggregate_fields"];
    nodes?: PartialObjects["site_admin"][];
  };
  /** aggregate fields of "site_admin" */
  ["site_admin_aggregate_fields"]: {
    __typename?: "site_admin_aggregate_fields";
    avg?: PartialObjects["site_admin_avg_fields"];
    count?: number;
    max?: PartialObjects["site_admin_max_fields"];
    min?: PartialObjects["site_admin_min_fields"];
    stddev?: PartialObjects["site_admin_stddev_fields"];
    stddev_pop?: PartialObjects["site_admin_stddev_pop_fields"];
    stddev_samp?: PartialObjects["site_admin_stddev_samp_fields"];
    sum?: PartialObjects["site_admin_sum_fields"];
    var_pop?: PartialObjects["site_admin_var_pop_fields"];
    var_samp?: PartialObjects["site_admin_var_samp_fields"];
    variance?: PartialObjects["site_admin_variance_fields"];
  };
  /** order by aggregate values of table "site_admin" */
  ["site_admin_aggregate_order_by"]: {
    avg?: PartialObjects["site_admin_avg_order_by"];
    count?: PartialObjects["order_by"];
    max?: PartialObjects["site_admin_max_order_by"];
    min?: PartialObjects["site_admin_min_order_by"];
    stddev?: PartialObjects["site_admin_stddev_order_by"];
    stddev_pop?: PartialObjects["site_admin_stddev_pop_order_by"];
    stddev_samp?: PartialObjects["site_admin_stddev_samp_order_by"];
    sum?: PartialObjects["site_admin_sum_order_by"];
    var_pop?: PartialObjects["site_admin_var_pop_order_by"];
    var_samp?: PartialObjects["site_admin_var_samp_order_by"];
    variance?: PartialObjects["site_admin_variance_order_by"];
  };
  /** input type for inserting array relation for remote table "site_admin" */
  ["site_admin_arr_rel_insert_input"]: {
    data: PartialObjects["site_admin_insert_input"][];
    on_conflict?: PartialObjects["site_admin_on_conflict"];
  };
  /** aggregate avg on columns */
  ["site_admin_avg_fields"]: {
    __typename?: "site_admin_avg_fields";
    id?: number;
  };
  /** order by avg() on columns of table "site_admin" */
  ["site_admin_avg_order_by"]: {
    id?: PartialObjects["order_by"];
  };
  /** Boolean expression to filter rows from the table "site_admin". All fields are combined with a logical 'AND'. */
  ["site_admin_bool_exp"]: {
    _and?: (PartialObjects["site_admin_bool_exp"] | undefined)[];
    _not?: PartialObjects["site_admin_bool_exp"];
    _or?: (PartialObjects["site_admin_bool_exp"] | undefined)[];
    created_at?: PartialObjects["timestamptz_comparison_exp"];
    email?: PartialObjects["String_comparison_exp"];
    id?: PartialObjects["Int_comparison_exp"];
    password?: PartialObjects["String_comparison_exp"];
    updated_at?: PartialObjects["timestamptz_comparison_exp"];
  };
  /** unique or primary key constraints on table "site_admin" */
  ["site_admin_constraint"]: site_admin_constraint;
  /** input type for incrementing integer column in table "site_admin" */
  ["site_admin_inc_input"]: {
    id?: number;
  };
  /** input type for inserting data into table "site_admin" */
  ["site_admin_insert_input"]: {
    created_at?: PartialObjects["timestamptz"];
    email?: string;
    id?: number;
    password?: string;
    updated_at?: PartialObjects["timestamptz"];
  };
  /** aggregate max on columns */
  ["site_admin_max_fields"]: {
    __typename?: "site_admin_max_fields";
    created_at?: PartialObjects["timestamptz"];
    email?: string;
    id?: number;
    password?: string;
    updated_at?: PartialObjects["timestamptz"];
  };
  /** order by max() on columns of table "site_admin" */
  ["site_admin_max_order_by"]: {
    created_at?: PartialObjects["order_by"];
    email?: PartialObjects["order_by"];
    id?: PartialObjects["order_by"];
    password?: PartialObjects["order_by"];
    updated_at?: PartialObjects["order_by"];
  };
  /** aggregate min on columns */
  ["site_admin_min_fields"]: {
    __typename?: "site_admin_min_fields";
    created_at?: PartialObjects["timestamptz"];
    email?: string;
    id?: number;
    password?: string;
    updated_at?: PartialObjects["timestamptz"];
  };
  /** order by min() on columns of table "site_admin" */
  ["site_admin_min_order_by"]: {
    created_at?: PartialObjects["order_by"];
    email?: PartialObjects["order_by"];
    id?: PartialObjects["order_by"];
    password?: PartialObjects["order_by"];
    updated_at?: PartialObjects["order_by"];
  };
  /** response of any mutation on the table "site_admin" */
  ["site_admin_mutation_response"]: {
    __typename?: "site_admin_mutation_response";
    /** number of affected rows by the mutation */
    affected_rows?: number;
    /** data of the affected rows by the mutation */
    returning?: PartialObjects["site_admin"][];
  };
  /** input type for inserting object relation for remote table "site_admin" */
  ["site_admin_obj_rel_insert_input"]: {
    data: PartialObjects["site_admin_insert_input"];
    on_conflict?: PartialObjects["site_admin_on_conflict"];
  };
  /** on conflict condition type for table "site_admin" */
  ["site_admin_on_conflict"]: {
    constraint: PartialObjects["site_admin_constraint"];
    update_columns: PartialObjects["site_admin_update_column"][];
    where?: PartialObjects["site_admin_bool_exp"];
  };
  /** ordering options when selecting data from "site_admin" */
  ["site_admin_order_by"]: {
    created_at?: PartialObjects["order_by"];
    email?: PartialObjects["order_by"];
    id?: PartialObjects["order_by"];
    password?: PartialObjects["order_by"];
    updated_at?: PartialObjects["order_by"];
  };
  /** primary key columns input for table: "site_admin" */
  ["site_admin_pk_columns_input"]: {
    id: number;
  };
  /** select columns of table "site_admin" */
  ["site_admin_select_column"]: site_admin_select_column;
  /** input type for updating data in table "site_admin" */
  ["site_admin_set_input"]: {
    created_at?: PartialObjects["timestamptz"];
    email?: string;
    id?: number;
    password?: string;
    updated_at?: PartialObjects["timestamptz"];
  };
  /** aggregate stddev on columns */
  ["site_admin_stddev_fields"]: {
    __typename?: "site_admin_stddev_fields";
    id?: number;
  };
  /** order by stddev() on columns of table "site_admin" */
  ["site_admin_stddev_order_by"]: {
    id?: PartialObjects["order_by"];
  };
  /** aggregate stddev_pop on columns */
  ["site_admin_stddev_pop_fields"]: {
    __typename?: "site_admin_stddev_pop_fields";
    id?: number;
  };
  /** order by stddev_pop() on columns of table "site_admin" */
  ["site_admin_stddev_pop_order_by"]: {
    id?: PartialObjects["order_by"];
  };
  /** aggregate stddev_samp on columns */
  ["site_admin_stddev_samp_fields"]: {
    __typename?: "site_admin_stddev_samp_fields";
    id?: number;
  };
  /** order by stddev_samp() on columns of table "site_admin" */
  ["site_admin_stddev_samp_order_by"]: {
    id?: PartialObjects["order_by"];
  };
  /** aggregate sum on columns */
  ["site_admin_sum_fields"]: {
    __typename?: "site_admin_sum_fields";
    id?: number;
  };
  /** order by sum() on columns of table "site_admin" */
  ["site_admin_sum_order_by"]: {
    id?: PartialObjects["order_by"];
  };
  /** update columns of table "site_admin" */
  ["site_admin_update_column"]: site_admin_update_column;
  /** aggregate var_pop on columns */
  ["site_admin_var_pop_fields"]: {
    __typename?: "site_admin_var_pop_fields";
    id?: number;
  };
  /** order by var_pop() on columns of table "site_admin" */
  ["site_admin_var_pop_order_by"]: {
    id?: PartialObjects["order_by"];
  };
  /** aggregate var_samp on columns */
  ["site_admin_var_samp_fields"]: {
    __typename?: "site_admin_var_samp_fields";
    id?: number;
  };
  /** order by var_samp() on columns of table "site_admin" */
  ["site_admin_var_samp_order_by"]: {
    id?: PartialObjects["order_by"];
  };
  /** aggregate variance on columns */
  ["site_admin_variance_fields"]: {
    __typename?: "site_admin_variance_fields";
    id?: number;
  };
  /** order by variance() on columns of table "site_admin" */
  ["site_admin_variance_order_by"]: {
    id?: PartialObjects["order_by"];
  };
  /** expression to compare columns of type String. All fields are combined with logical 'AND'. */
  ["String_comparison_exp"]: {
    _eq?: string;
    _gt?: string;
    _gte?: string;
    _ilike?: string;
    _in?: string[];
    _is_null?: boolean;
    _like?: string;
    _lt?: string;
    _lte?: string;
    _neq?: string;
    _nilike?: string;
    _nin?: string[];
    _nlike?: string;
    _nsimilar?: string;
    _similar?: string;
  };
  /** subscription root */
  ["subscription_root"]: {
    __typename?: "subscription_root";
    /** fetch data from the table: "address" */
    address?: PartialObjects["address"][];
    /** fetch aggregated fields from the table: "address" */
    address_aggregate?: PartialObjects["address_aggregate"];
    /** fetch data from the table: "address" using primary key columns */
    address_by_pk?: PartialObjects["address"];
    /** perform the action: "adminLogin" */
    adminLogin?: PartialObjects["JWT"];
    /** fetch data from the table: "order" */
    order?: PartialObjects["order"][];
    /** fetch aggregated fields from the table: "order" */
    order_aggregate?: PartialObjects["order_aggregate"];
    /** fetch data from the table: "order" using primary key columns */
    order_by_pk?: PartialObjects["order"];
    /** fetch data from the table: "order_product" */
    order_product?: PartialObjects["order_product"][];
    /** fetch aggregated fields from the table: "order_product" */
    order_product_aggregate?: PartialObjects["order_product_aggregate"];
    /** fetch data from the table: "order_product" using primary key columns */
    order_product_by_pk?: PartialObjects["order_product"];
    /** fetch data from the table: "product" */
    product?: PartialObjects["product"][];
    /** fetch aggregated fields from the table: "product" */
    product_aggregate?: PartialObjects["product_aggregate"];
    /** fetch data from the table: "product" using primary key columns */
    product_by_pk?: PartialObjects["product"];
    /** fetch data from the table: "product_category_enum" */
    product_category_enum?: PartialObjects["product_category_enum"][];
    /** fetch aggregated fields from the table: "product_category_enum" */
    product_category_enum_aggregate?: PartialObjects["product_category_enum_aggregate"];
    /** fetch data from the table: "product_category_enum" using primary key columns */
    product_category_enum_by_pk?: PartialObjects["product_category_enum"];
    /** fetch data from the table: "product_review" */
    product_review?: PartialObjects["product_review"][];
    /** fetch aggregated fields from the table: "product_review" */
    product_review_aggregate?: PartialObjects["product_review_aggregate"];
    /** fetch data from the table: "product_review" using primary key columns */
    product_review_by_pk?: PartialObjects["product_review"];
    /** perform the action: "refreshToken" */
    refreshToken?: PartialObjects["RefreshTokenJWT"];
    /** fetch data from the table: "site_admin" */
    site_admin?: PartialObjects["site_admin"][];
    /** fetch aggregated fields from the table: "site_admin" */
    site_admin_aggregate?: PartialObjects["site_admin_aggregate"];
    /** fetch data from the table: "site_admin" using primary key columns */
    site_admin_by_pk?: PartialObjects["site_admin"];
    /** fetch data from the table: "user" */
    user?: PartialObjects["user"][];
    /** fetch aggregated fields from the table: "user" */
    user_aggregate?: PartialObjects["user_aggregate"];
    /** fetch data from the table: "user" using primary key columns */
    user_by_pk?: PartialObjects["user"];
  };
  ["timestamptz"]: any;
  /** expression to compare columns of type timestamptz. All fields are combined with logical 'AND'. */
  ["timestamptz_comparison_exp"]: {
    _eq?: PartialObjects["timestamptz"];
    _gt?: PartialObjects["timestamptz"];
    _gte?: PartialObjects["timestamptz"];
    _in?: PartialObjects["timestamptz"][];
    _is_null?: boolean;
    _lt?: PartialObjects["timestamptz"];
    _lte?: PartialObjects["timestamptz"];
    _neq?: PartialObjects["timestamptz"];
    _nin?: PartialObjects["timestamptz"][];
  };
  /** Someone with an account on the site, who uses it to make purchases


columns and relationships of "user" */
  ["user"]: {
    __typename?: "user";
    /** An array relationship */
    addresses?: PartialObjects["address"][];
    /** An aggregated array relationship */
    addresses_aggregate?: PartialObjects["address_aggregate"];
    created_at?: PartialObjects["timestamptz"];
    email?: string;
    id?: number;
    name?: string;
    /** An array relationship */
    orders?: PartialObjects["order"][];
    /** An aggregated array relationship */
    orders_aggregate?: PartialObjects["order_aggregate"];
    /** A bcrypt-hashed version of the user password, compared against securely in the JWT Auth API handler for sign-in */
    password?: string;
    /** An array relationship */
    product_reviews?: PartialObjects["product_review"][];
    /** An aggregated array relationship */
    product_reviews_aggregate?: PartialObjects["product_review_aggregate"];
    refresh_token?: string;
    updated_at?: PartialObjects["timestamptz"];
  };
  /** aggregated selection of "user" */
  ["user_aggregate"]: {
    __typename?: "user_aggregate";
    aggregate?: PartialObjects["user_aggregate_fields"];
    nodes?: PartialObjects["user"][];
  };
  /** aggregate fields of "user" */
  ["user_aggregate_fields"]: {
    __typename?: "user_aggregate_fields";
    avg?: PartialObjects["user_avg_fields"];
    count?: number;
    max?: PartialObjects["user_max_fields"];
    min?: PartialObjects["user_min_fields"];
    stddev?: PartialObjects["user_stddev_fields"];
    stddev_pop?: PartialObjects["user_stddev_pop_fields"];
    stddev_samp?: PartialObjects["user_stddev_samp_fields"];
    sum?: PartialObjects["user_sum_fields"];
    var_pop?: PartialObjects["user_var_pop_fields"];
    var_samp?: PartialObjects["user_var_samp_fields"];
    variance?: PartialObjects["user_variance_fields"];
  };
  /** order by aggregate values of table "user" */
  ["user_aggregate_order_by"]: {
    avg?: PartialObjects["user_avg_order_by"];
    count?: PartialObjects["order_by"];
    max?: PartialObjects["user_max_order_by"];
    min?: PartialObjects["user_min_order_by"];
    stddev?: PartialObjects["user_stddev_order_by"];
    stddev_pop?: PartialObjects["user_stddev_pop_order_by"];
    stddev_samp?: PartialObjects["user_stddev_samp_order_by"];
    sum?: PartialObjects["user_sum_order_by"];
    var_pop?: PartialObjects["user_var_pop_order_by"];
    var_samp?: PartialObjects["user_var_samp_order_by"];
    variance?: PartialObjects["user_variance_order_by"];
  };
  /** input type for inserting array relation for remote table "user" */
  ["user_arr_rel_insert_input"]: {
    data: PartialObjects["user_insert_input"][];
    on_conflict?: PartialObjects["user_on_conflict"];
  };
  /** aggregate avg on columns */
  ["user_avg_fields"]: {
    __typename?: "user_avg_fields";
    id?: number;
  };
  /** order by avg() on columns of table "user" */
  ["user_avg_order_by"]: {
    id?: PartialObjects["order_by"];
  };
  /** Boolean expression to filter rows from the table "user". All fields are combined with a logical 'AND'. */
  ["user_bool_exp"]: {
    _and?: (PartialObjects["user_bool_exp"] | undefined)[];
    _not?: PartialObjects["user_bool_exp"];
    _or?: (PartialObjects["user_bool_exp"] | undefined)[];
    addresses?: PartialObjects["address_bool_exp"];
    created_at?: PartialObjects["timestamptz_comparison_exp"];
    email?: PartialObjects["String_comparison_exp"];
    id?: PartialObjects["Int_comparison_exp"];
    name?: PartialObjects["String_comparison_exp"];
    orders?: PartialObjects["order_bool_exp"];
    password?: PartialObjects["String_comparison_exp"];
    product_reviews?: PartialObjects["product_review_bool_exp"];
    refresh_token?: PartialObjects["String_comparison_exp"];
    updated_at?: PartialObjects["timestamptz_comparison_exp"];
  };
  /** unique or primary key constraints on table "user" */
  ["user_constraint"]: user_constraint;
  /** input type for incrementing integer column in table "user" */
  ["user_inc_input"]: {
    id?: number;
  };
  /** input type for inserting data into table "user" */
  ["user_insert_input"]: {
    addresses?: PartialObjects["address_arr_rel_insert_input"];
    created_at?: PartialObjects["timestamptz"];
    email?: string;
    id?: number;
    name?: string;
    orders?: PartialObjects["order_arr_rel_insert_input"];
    password?: string;
    product_reviews?: PartialObjects["product_review_arr_rel_insert_input"];
    refresh_token?: string;
    updated_at?: PartialObjects["timestamptz"];
  };
  /** aggregate max on columns */
  ["user_max_fields"]: {
    __typename?: "user_max_fields";
    created_at?: PartialObjects["timestamptz"];
    email?: string;
    id?: number;
    name?: string;
    password?: string;
    refresh_token?: string;
    updated_at?: PartialObjects["timestamptz"];
  };
  /** order by max() on columns of table "user" */
  ["user_max_order_by"]: {
    created_at?: PartialObjects["order_by"];
    email?: PartialObjects["order_by"];
    id?: PartialObjects["order_by"];
    name?: PartialObjects["order_by"];
    password?: PartialObjects["order_by"];
    refresh_token?: PartialObjects["order_by"];
    updated_at?: PartialObjects["order_by"];
  };
  /** aggregate min on columns */
  ["user_min_fields"]: {
    __typename?: "user_min_fields";
    created_at?: PartialObjects["timestamptz"];
    email?: string;
    id?: number;
    name?: string;
    password?: string;
    refresh_token?: string;
    updated_at?: PartialObjects["timestamptz"];
  };
  /** order by min() on columns of table "user" */
  ["user_min_order_by"]: {
    created_at?: PartialObjects["order_by"];
    email?: PartialObjects["order_by"];
    id?: PartialObjects["order_by"];
    name?: PartialObjects["order_by"];
    password?: PartialObjects["order_by"];
    refresh_token?: PartialObjects["order_by"];
    updated_at?: PartialObjects["order_by"];
  };
  /** response of any mutation on the table "user" */
  ["user_mutation_response"]: {
    __typename?: "user_mutation_response";
    /** number of affected rows by the mutation */
    affected_rows?: number;
    /** data of the affected rows by the mutation */
    returning?: PartialObjects["user"][];
  };
  /** input type for inserting object relation for remote table "user" */
  ["user_obj_rel_insert_input"]: {
    data: PartialObjects["user_insert_input"];
    on_conflict?: PartialObjects["user_on_conflict"];
  };
  /** on conflict condition type for table "user" */
  ["user_on_conflict"]: {
    constraint: PartialObjects["user_constraint"];
    update_columns: PartialObjects["user_update_column"][];
    where?: PartialObjects["user_bool_exp"];
  };
  /** ordering options when selecting data from "user" */
  ["user_order_by"]: {
    addresses_aggregate?: PartialObjects["address_aggregate_order_by"];
    created_at?: PartialObjects["order_by"];
    email?: PartialObjects["order_by"];
    id?: PartialObjects["order_by"];
    name?: PartialObjects["order_by"];
    orders_aggregate?: PartialObjects["order_aggregate_order_by"];
    password?: PartialObjects["order_by"];
    product_reviews_aggregate?: PartialObjects["product_review_aggregate_order_by"];
    refresh_token?: PartialObjects["order_by"];
    updated_at?: PartialObjects["order_by"];
  };
  /** primary key columns input for table: "user" */
  ["user_pk_columns_input"]: {
    id: number;
  };
  /** select columns of table "user" */
  ["user_select_column"]: user_select_column;
  /** input type for updating data in table "user" */
  ["user_set_input"]: {
    created_at?: PartialObjects["timestamptz"];
    email?: string;
    id?: number;
    name?: string;
    password?: string;
    refresh_token?: string;
    updated_at?: PartialObjects["timestamptz"];
  };
  /** aggregate stddev on columns */
  ["user_stddev_fields"]: {
    __typename?: "user_stddev_fields";
    id?: number;
  };
  /** order by stddev() on columns of table "user" */
  ["user_stddev_order_by"]: {
    id?: PartialObjects["order_by"];
  };
  /** aggregate stddev_pop on columns */
  ["user_stddev_pop_fields"]: {
    __typename?: "user_stddev_pop_fields";
    id?: number;
  };
  /** order by stddev_pop() on columns of table "user" */
  ["user_stddev_pop_order_by"]: {
    id?: PartialObjects["order_by"];
  };
  /** aggregate stddev_samp on columns */
  ["user_stddev_samp_fields"]: {
    __typename?: "user_stddev_samp_fields";
    id?: number;
  };
  /** order by stddev_samp() on columns of table "user" */
  ["user_stddev_samp_order_by"]: {
    id?: PartialObjects["order_by"];
  };
  /** aggregate sum on columns */
  ["user_sum_fields"]: {
    __typename?: "user_sum_fields";
    id?: number;
  };
  /** order by sum() on columns of table "user" */
  ["user_sum_order_by"]: {
    id?: PartialObjects["order_by"];
  };
  /** update columns of table "user" */
  ["user_update_column"]: user_update_column;
  /** aggregate var_pop on columns */
  ["user_var_pop_fields"]: {
    __typename?: "user_var_pop_fields";
    id?: number;
  };
  /** order by var_pop() on columns of table "user" */
  ["user_var_pop_order_by"]: {
    id?: PartialObjects["order_by"];
  };
  /** aggregate var_samp on columns */
  ["user_var_samp_fields"]: {
    __typename?: "user_var_samp_fields";
    id?: number;
  };
  /** order by var_samp() on columns of table "user" */
  ["user_var_samp_order_by"]: {
    id?: PartialObjects["order_by"];
  };
  /** aggregate variance on columns */
  ["user_variance_fields"]: {
    __typename?: "user_variance_fields";
    id?: number;
  };
  /** order by variance() on columns of table "user" */
  ["user_variance_order_by"]: {
    id?: PartialObjects["order_by"];
  };
  ["uuid"]: any;
};

/** A physical billing/shipping address, attached to a user account


columns and relationships of "address" */
export type address = {
  __typename?: "address";
  address_line_one: string;
  address_line_two?: string;
  city: string;
  created_at: timestamptz;
  id: number;
  /** An array relationship */
  orders_with_billing_address: order[];
  /** An aggregated array relationship */
  orders_with_billing_address_aggregate: order_aggregate;
  /** An array relationship */
  orders_with_shipping_address: order[];
  /** An aggregated array relationship */
  orders_with_shipping_address_aggregate: order_aggregate;
  state: string;
  updated_at: timestamptz;
  /** An object relationship */
  user: user;
  user_id: number;
  zipcode: string;
};

/** aggregated selection of "address" */
export type address_aggregate = {
  __typename?: "address_aggregate";
  aggregate?: address_aggregate_fields;
  nodes: address[];
};

/** aggregate fields of "address" */
export type address_aggregate_fields = {
  __typename?: "address_aggregate_fields";
  avg?: address_avg_fields;
  count?: number;
  max?: address_max_fields;
  min?: address_min_fields;
  stddev?: address_stddev_fields;
  stddev_pop?: address_stddev_pop_fields;
  stddev_samp?: address_stddev_samp_fields;
  sum?: address_sum_fields;
  var_pop?: address_var_pop_fields;
  var_samp?: address_var_samp_fields;
  variance?: address_variance_fields;
};

/** order by aggregate values of table "address" */
export type address_aggregate_order_by = {
  avg?: address_avg_order_by;
  count?: order_by;
  max?: address_max_order_by;
  min?: address_min_order_by;
  stddev?: address_stddev_order_by;
  stddev_pop?: address_stddev_pop_order_by;
  stddev_samp?: address_stddev_samp_order_by;
  sum?: address_sum_order_by;
  var_pop?: address_var_pop_order_by;
  var_samp?: address_var_samp_order_by;
  variance?: address_variance_order_by;
};

/** input type for inserting array relation for remote table "address" */
export type address_arr_rel_insert_input = {
  data: address_insert_input[];
  on_conflict?: address_on_conflict;
};

/** aggregate avg on columns */
export type address_avg_fields = {
  __typename?: "address_avg_fields";
  id?: number;
  user_id?: number;
};

/** order by avg() on columns of table "address" */
export type address_avg_order_by = {
  id?: order_by;
  user_id?: order_by;
};

/** Boolean expression to filter rows from the table "address". All fields are combined with a logical 'AND'. */
export type address_bool_exp = {
  _and?: (address_bool_exp | undefined)[];
  _not?: address_bool_exp;
  _or?: (address_bool_exp | undefined)[];
  address_line_one?: String_comparison_exp;
  address_line_two?: String_comparison_exp;
  city?: String_comparison_exp;
  created_at?: timestamptz_comparison_exp;
  id?: Int_comparison_exp;
  orders_with_billing_address?: order_bool_exp;
  orders_with_shipping_address?: order_bool_exp;
  state?: String_comparison_exp;
  updated_at?: timestamptz_comparison_exp;
  user?: user_bool_exp;
  user_id?: Int_comparison_exp;
  zipcode?: String_comparison_exp;
};

/** unique or primary key constraints on table "address" */
export enum address_constraint {
  address_pkey = "address_pkey",
}

/** input type for incrementing integer column in table "address" */
export type address_inc_input = {
  id?: number;
  user_id?: number;
};

/** input type for inserting data into table "address" */
export type address_insert_input = {
  address_line_one?: string;
  address_line_two?: string;
  city?: string;
  created_at?: timestamptz;
  id?: number;
  orders_with_billing_address?: order_arr_rel_insert_input;
  orders_with_shipping_address?: order_arr_rel_insert_input;
  state?: string;
  updated_at?: timestamptz;
  user?: user_obj_rel_insert_input;
  user_id?: number;
  zipcode?: string;
};

/** aggregate max on columns */
export type address_max_fields = {
  __typename?: "address_max_fields";
  address_line_one?: string;
  address_line_two?: string;
  city?: string;
  created_at?: timestamptz;
  id?: number;
  state?: string;
  updated_at?: timestamptz;
  user_id?: number;
  zipcode?: string;
};

/** order by max() on columns of table "address" */
export type address_max_order_by = {
  address_line_one?: order_by;
  address_line_two?: order_by;
  city?: order_by;
  created_at?: order_by;
  id?: order_by;
  state?: order_by;
  updated_at?: order_by;
  user_id?: order_by;
  zipcode?: order_by;
};

/** aggregate min on columns */
export type address_min_fields = {
  __typename?: "address_min_fields";
  address_line_one?: string;
  address_line_two?: string;
  city?: string;
  created_at?: timestamptz;
  id?: number;
  state?: string;
  updated_at?: timestamptz;
  user_id?: number;
  zipcode?: string;
};

/** order by min() on columns of table "address" */
export type address_min_order_by = {
  address_line_one?: order_by;
  address_line_two?: order_by;
  city?: order_by;
  created_at?: order_by;
  id?: order_by;
  state?: order_by;
  updated_at?: order_by;
  user_id?: order_by;
  zipcode?: order_by;
};

/** response of any mutation on the table "address" */
export type address_mutation_response = {
  __typename?: "address_mutation_response";
  /** number of affected rows by the mutation */
  affected_rows: number;
  /** data of the affected rows by the mutation */
  returning: address[];
};

/** input type for inserting object relation for remote table "address" */
export type address_obj_rel_insert_input = {
  data: address_insert_input;
  on_conflict?: address_on_conflict;
};

/** on conflict condition type for table "address" */
export type address_on_conflict = {
  constraint: address_constraint;
  update_columns: address_update_column[];
  where?: address_bool_exp;
};

/** ordering options when selecting data from "address" */
export type address_order_by = {
  address_line_one?: order_by;
  address_line_two?: order_by;
  city?: order_by;
  created_at?: order_by;
  id?: order_by;
  orders_with_billing_address_aggregate?: order_aggregate_order_by;
  orders_with_shipping_address_aggregate?: order_aggregate_order_by;
  state?: order_by;
  updated_at?: order_by;
  user?: user_order_by;
  user_id?: order_by;
  zipcode?: order_by;
};

/** primary key columns input for table: "address" */
export type address_pk_columns_input = {
  id: number;
};

/** select columns of table "address" */
export enum address_select_column {
  address_line_one = "address_line_one",
  address_line_two = "address_line_two",
  city = "city",
  created_at = "created_at",
  id = "id",
  state = "state",
  updated_at = "updated_at",
  user_id = "user_id",
  zipcode = "zipcode",
}

/** input type for updating data in table "address" */
export type address_set_input = {
  address_line_one?: string;
  address_line_two?: string;
  city?: string;
  created_at?: timestamptz;
  id?: number;
  state?: string;
  updated_at?: timestamptz;
  user_id?: number;
  zipcode?: string;
};

/** aggregate stddev on columns */
export type address_stddev_fields = {
  __typename?: "address_stddev_fields";
  id?: number;
  user_id?: number;
};

/** order by stddev() on columns of table "address" */
export type address_stddev_order_by = {
  id?: order_by;
  user_id?: order_by;
};

/** aggregate stddev_pop on columns */
export type address_stddev_pop_fields = {
  __typename?: "address_stddev_pop_fields";
  id?: number;
  user_id?: number;
};

/** order by stddev_pop() on columns of table "address" */
export type address_stddev_pop_order_by = {
  id?: order_by;
  user_id?: order_by;
};

/** aggregate stddev_samp on columns */
export type address_stddev_samp_fields = {
  __typename?: "address_stddev_samp_fields";
  id?: number;
  user_id?: number;
};

/** order by stddev_samp() on columns of table "address" */
export type address_stddev_samp_order_by = {
  id?: order_by;
  user_id?: order_by;
};

/** aggregate sum on columns */
export type address_sum_fields = {
  __typename?: "address_sum_fields";
  id?: number;
  user_id?: number;
};

/** order by sum() on columns of table "address" */
export type address_sum_order_by = {
  id?: order_by;
  user_id?: order_by;
};

/** update columns of table "address" */
export enum address_update_column {
  address_line_one = "address_line_one",
  address_line_two = "address_line_two",
  city = "city",
  created_at = "created_at",
  id = "id",
  state = "state",
  updated_at = "updated_at",
  user_id = "user_id",
  zipcode = "zipcode",
}

/** aggregate var_pop on columns */
export type address_var_pop_fields = {
  __typename?: "address_var_pop_fields";
  id?: number;
  user_id?: number;
};

/** order by var_pop() on columns of table "address" */
export type address_var_pop_order_by = {
  id?: order_by;
  user_id?: order_by;
};

/** aggregate var_samp on columns */
export type address_var_samp_fields = {
  __typename?: "address_var_samp_fields";
  id?: number;
  user_id?: number;
};

/** order by var_samp() on columns of table "address" */
export type address_var_samp_order_by = {
  id?: order_by;
  user_id?: order_by;
};

/** aggregate variance on columns */
export type address_variance_fields = {
  __typename?: "address_variance_fields";
  id?: number;
  user_id?: number;
};

/** order by variance() on columns of table "address" */
export type address_variance_order_by = {
  id?: order_by;
  user_id?: order_by;
};

export type AdminLoginInput = {
  email: string;
  password: string;
};

export type AdminSignupInput = {
  email: string;
  name: string;
  password: string;
};

/** expression to compare columns of type Boolean. All fields are combined with logical 'AND'. */
export type Boolean_comparison_exp = {
  _eq?: boolean;
  _gt?: boolean;
  _gte?: boolean;
  _in?: boolean[];
  _is_null?: boolean;
  _lt?: boolean;
  _lte?: boolean;
  _neq?: boolean;
  _nin?: boolean[];
};

export type CreatePaymentIntentInput = {
  paymentAmount: number;
};

/** expression to compare columns of type Int. All fields are combined with logical 'AND'. */
export type Int_comparison_exp = {
  _eq?: number;
  _gt?: number;
  _gte?: number;
  _in?: number[];
  _is_null?: boolean;
  _lt?: number;
  _lte?: number;
  _neq?: number;
  _nin?: number[];
};

export type json = any;

/** expression to compare columns of type json. All fields are combined with logical 'AND'. */
export type json_comparison_exp = {
  _eq?: json;
  _gt?: json;
  _gte?: json;
  _in?: json[];
  _is_null?: boolean;
  _lt?: json;
  _lte?: json;
  _neq?: json;
  _nin?: json[];
};

export type jsonb = any;

/** expression to compare columns of type jsonb. All fields are combined with logical 'AND'. */
export type jsonb_comparison_exp = {
  /** is the column contained in the given json value */
  _contained_in?: jsonb;
  /** does the column contain the given json value at the top level */
  _contains?: jsonb;
  _eq?: jsonb;
  _gt?: jsonb;
  _gte?: jsonb;
  /** does the string exist as a top-level key in the column */
  _has_key?: string;
  /** do all of these strings exist as top-level keys in the column */
  _has_keys_all?: string[];
  /** do any of these strings exist as top-level keys in the column */
  _has_keys_any?: string[];
  _in?: jsonb[];
  _is_null?: boolean;
  _lt?: jsonb;
  _lte?: jsonb;
  _neq?: jsonb;
  _nin?: jsonb[];
};

export type JWT = {
  __typename?: "JWT";
  email: string;
  name: string;
  refreshToken: string;
  token: string;
};

export type LoginInput = {
  email: string;
  password: string;
};

/** mutation root */
export type mutation_root = {
  __typename?: "mutation_root";
  /** perform the action: "adminSignup" */
  adminSignup?: JWT;
  /** perform the action: "createPaymentIntent" */
  createPaymentIntent?: PaymentIntentClientSecret;
  /** delete data from the table: "address" */
  delete_address?: address_mutation_response;
  /** delete single row from the table: "address" */
  delete_address_by_pk?: address;
  /** delete data from the table: "order" */
  delete_order?: order_mutation_response;
  /** delete single row from the table: "order" */
  delete_order_by_pk?: order;
  /** delete data from the table: "order_product" */
  delete_order_product?: order_product_mutation_response;
  /** delete single row from the table: "order_product" */
  delete_order_product_by_pk?: order_product;
  /** delete data from the table: "product" */
  delete_product?: product_mutation_response;
  /** delete single row from the table: "product" */
  delete_product_by_pk?: product;
  /** delete data from the table: "product_category_enum" */
  delete_product_category_enum?: product_category_enum_mutation_response;
  /** delete single row from the table: "product_category_enum" */
  delete_product_category_enum_by_pk?: product_category_enum;
  /** delete data from the table: "product_review" */
  delete_product_review?: product_review_mutation_response;
  /** delete single row from the table: "product_review" */
  delete_product_review_by_pk?: product_review;
  /** delete data from the table: "site_admin" */
  delete_site_admin?: site_admin_mutation_response;
  /** delete single row from the table: "site_admin" */
  delete_site_admin_by_pk?: site_admin;
  /** delete data from the table: "user" */
  delete_user?: user_mutation_response;
  /** delete single row from the table: "user" */
  delete_user_by_pk?: user;
  /** insert data into the table: "address" */
  insert_address?: address_mutation_response;
  /** insert a single row into the table: "address" */
  insert_address_one?: address;
  /** insert data into the table: "order" */
  insert_order?: order_mutation_response;
  /** insert a single row into the table: "order" */
  insert_order_one?: order;
  /** insert data into the table: "order_product" */
  insert_order_product?: order_product_mutation_response;
  /** insert a single row into the table: "order_product" */
  insert_order_product_one?: order_product;
  /** insert data into the table: "product" */
  insert_product?: product_mutation_response;
  /** insert data into the table: "product_category_enum" */
  insert_product_category_enum?: product_category_enum_mutation_response;
  /** insert a single row into the table: "product_category_enum" */
  insert_product_category_enum_one?: product_category_enum;
  /** insert a single row into the table: "product" */
  insert_product_one?: product;
  /** insert data into the table: "product_review" */
  insert_product_review?: product_review_mutation_response;
  /** insert a single row into the table: "product_review" */
  insert_product_review_one?: product_review;
  /** insert data into the table: "site_admin" */
  insert_site_admin?: site_admin_mutation_response;
  /** insert a single row into the table: "site_admin" */
  insert_site_admin_one?: site_admin;
  /** insert data into the table: "user" */
  insert_user?: user_mutation_response;
  /** insert a single row into the table: "user" */
  insert_user_one?: user;
  /** perform the action: "login" */
  login?: JWT;
  /** perform the action: "signup" */
  signup?: JWT;
  /** update data of the table: "address" */
  update_address?: address_mutation_response;
  /** update single row of the table: "address" */
  update_address_by_pk?: address;
  /** update data of the table: "order" */
  update_order?: order_mutation_response;
  /** update single row of the table: "order" */
  update_order_by_pk?: order;
  /** update data of the table: "order_product" */
  update_order_product?: order_product_mutation_response;
  /** update single row of the table: "order_product" */
  update_order_product_by_pk?: order_product;
  /** update data of the table: "product" */
  update_product?: product_mutation_response;
  /** update single row of the table: "product" */
  update_product_by_pk?: product;
  /** update data of the table: "product_category_enum" */
  update_product_category_enum?: product_category_enum_mutation_response;
  /** update single row of the table: "product_category_enum" */
  update_product_category_enum_by_pk?: product_category_enum;
  /** update data of the table: "product_review" */
  update_product_review?: product_review_mutation_response;
  /** update single row of the table: "product_review" */
  update_product_review_by_pk?: product_review;
  /** update data of the table: "site_admin" */
  update_site_admin?: site_admin_mutation_response;
  /** update single row of the table: "site_admin" */
  update_site_admin_by_pk?: site_admin;
  /** update data of the table: "user" */
  update_user?: user_mutation_response;
  /** update single row of the table: "user" */
  update_user_by_pk?: user;
};

export type numeric = any;

/** expression to compare columns of type numeric. All fields are combined with logical 'AND'. */
export type numeric_comparison_exp = {
  _eq?: numeric;
  _gt?: numeric;
  _gte?: numeric;
  _in?: numeric[];
  _is_null?: boolean;
  _lt?: numeric;
  _lte?: numeric;
  _neq?: numeric;
  _nin?: numeric[];
};

/** An order from a customer, containing one or more products and quantities


columns and relationships of "order" */
export type order = {
  __typename?: "order";
  /** An object relationship */
  billing_address: address;
  billing_address_id: number;
  created_at: timestamptz;
  id: number;
  is_shipped: boolean;
  /** An array relationship */
  products: order_product[];
  /** An aggregated array relationship */
  products_aggregate: order_product_aggregate;
  /** An object relationship */
  shipping_address: address;
  shipping_address_id: number;
  updated_at: timestamptz;
  /** An object relationship */
  user: user;
  user_id: number;
};

/** aggregated selection of "order" */
export type order_aggregate = {
  __typename?: "order_aggregate";
  aggregate?: order_aggregate_fields;
  nodes: order[];
};

/** aggregate fields of "order" */
export type order_aggregate_fields = {
  __typename?: "order_aggregate_fields";
  avg?: order_avg_fields;
  count?: number;
  max?: order_max_fields;
  min?: order_min_fields;
  stddev?: order_stddev_fields;
  stddev_pop?: order_stddev_pop_fields;
  stddev_samp?: order_stddev_samp_fields;
  sum?: order_sum_fields;
  var_pop?: order_var_pop_fields;
  var_samp?: order_var_samp_fields;
  variance?: order_variance_fields;
};

/** order by aggregate values of table "order" */
export type order_aggregate_order_by = {
  avg?: order_avg_order_by;
  count?: order_by;
  max?: order_max_order_by;
  min?: order_min_order_by;
  stddev?: order_stddev_order_by;
  stddev_pop?: order_stddev_pop_order_by;
  stddev_samp?: order_stddev_samp_order_by;
  sum?: order_sum_order_by;
  var_pop?: order_var_pop_order_by;
  var_samp?: order_var_samp_order_by;
  variance?: order_variance_order_by;
};

/** input type for inserting array relation for remote table "order" */
export type order_arr_rel_insert_input = {
  data: order_insert_input[];
  on_conflict?: order_on_conflict;
};

/** aggregate avg on columns */
export type order_avg_fields = {
  __typename?: "order_avg_fields";
  billing_address_id?: number;
  id?: number;
  shipping_address_id?: number;
  user_id?: number;
};

/** order by avg() on columns of table "order" */
export type order_avg_order_by = {
  billing_address_id?: order_by;
  id?: order_by;
  shipping_address_id?: order_by;
  user_id?: order_by;
};

/** Boolean expression to filter rows from the table "order". All fields are combined with a logical 'AND'. */
export type order_bool_exp = {
  _and?: (order_bool_exp | undefined)[];
  _not?: order_bool_exp;
  _or?: (order_bool_exp | undefined)[];
  billing_address?: address_bool_exp;
  billing_address_id?: Int_comparison_exp;
  created_at?: timestamptz_comparison_exp;
  id?: Int_comparison_exp;
  is_shipped?: Boolean_comparison_exp;
  products?: order_product_bool_exp;
  shipping_address?: address_bool_exp;
  shipping_address_id?: Int_comparison_exp;
  updated_at?: timestamptz_comparison_exp;
  user?: user_bool_exp;
  user_id?: Int_comparison_exp;
};

/** column ordering options */
export enum order_by {
  asc = "asc",
  asc_nulls_first = "asc_nulls_first",
  asc_nulls_last = "asc_nulls_last",
  desc = "desc",
  desc_nulls_first = "desc_nulls_first",
  desc_nulls_last = "desc_nulls_last",
}

/** unique or primary key constraints on table "order" */
export enum order_constraint {
  order_pkey = "order_pkey",
}

/** input type for incrementing integer column in table "order" */
export type order_inc_input = {
  billing_address_id?: number;
  id?: number;
  shipping_address_id?: number;
  user_id?: number;
};

/** input type for inserting data into table "order" */
export type order_insert_input = {
  billing_address?: address_obj_rel_insert_input;
  billing_address_id?: number;
  created_at?: timestamptz;
  id?: number;
  is_shipped?: boolean;
  products?: order_product_arr_rel_insert_input;
  shipping_address?: address_obj_rel_insert_input;
  shipping_address_id?: number;
  updated_at?: timestamptz;
  user?: user_obj_rel_insert_input;
  user_id?: number;
};

/** aggregate max on columns */
export type order_max_fields = {
  __typename?: "order_max_fields";
  billing_address_id?: number;
  created_at?: timestamptz;
  id?: number;
  shipping_address_id?: number;
  updated_at?: timestamptz;
  user_id?: number;
};

/** order by max() on columns of table "order" */
export type order_max_order_by = {
  billing_address_id?: order_by;
  created_at?: order_by;
  id?: order_by;
  shipping_address_id?: order_by;
  updated_at?: order_by;
  user_id?: order_by;
};

/** aggregate min on columns */
export type order_min_fields = {
  __typename?: "order_min_fields";
  billing_address_id?: number;
  created_at?: timestamptz;
  id?: number;
  shipping_address_id?: number;
  updated_at?: timestamptz;
  user_id?: number;
};

/** order by min() on columns of table "order" */
export type order_min_order_by = {
  billing_address_id?: order_by;
  created_at?: order_by;
  id?: order_by;
  shipping_address_id?: order_by;
  updated_at?: order_by;
  user_id?: order_by;
};

/** response of any mutation on the table "order" */
export type order_mutation_response = {
  __typename?: "order_mutation_response";
  /** number of affected rows by the mutation */
  affected_rows: number;
  /** data of the affected rows by the mutation */
  returning: order[];
};

/** input type for inserting object relation for remote table "order" */
export type order_obj_rel_insert_input = {
  data: order_insert_input;
  on_conflict?: order_on_conflict;
};

/** on conflict condition type for table "order" */
export type order_on_conflict = {
  constraint: order_constraint;
  update_columns: order_update_column[];
  where?: order_bool_exp;
};

/** ordering options when selecting data from "order" */
export type order_order_by = {
  billing_address?: address_order_by;
  billing_address_id?: order_by;
  created_at?: order_by;
  id?: order_by;
  is_shipped?: order_by;
  products_aggregate?: order_product_aggregate_order_by;
  shipping_address?: address_order_by;
  shipping_address_id?: order_by;
  updated_at?: order_by;
  user?: user_order_by;
  user_id?: order_by;
};

/** primary key columns input for table: "order" */
export type order_pk_columns_input = {
  id: number;
};

/** A product belonging to a customer order, along with a quantity


columns and relationships of "order_product" */
export type order_product = {
  __typename?: "order_product";
  created_at: timestamptz;
  id: number;
  /** An object relationship */
  order: order;
  order_id: number;
  /** An object relationship */
  product: product;
  product_id: number;
  quantity: number;
  updated_at: timestamptz;
};

/** aggregated selection of "order_product" */
export type order_product_aggregate = {
  __typename?: "order_product_aggregate";
  aggregate?: order_product_aggregate_fields;
  nodes: order_product[];
};

/** aggregate fields of "order_product" */
export type order_product_aggregate_fields = {
  __typename?: "order_product_aggregate_fields";
  avg?: order_product_avg_fields;
  count?: number;
  max?: order_product_max_fields;
  min?: order_product_min_fields;
  stddev?: order_product_stddev_fields;
  stddev_pop?: order_product_stddev_pop_fields;
  stddev_samp?: order_product_stddev_samp_fields;
  sum?: order_product_sum_fields;
  var_pop?: order_product_var_pop_fields;
  var_samp?: order_product_var_samp_fields;
  variance?: order_product_variance_fields;
};

/** order by aggregate values of table "order_product" */
export type order_product_aggregate_order_by = {
  avg?: order_product_avg_order_by;
  count?: order_by;
  max?: order_product_max_order_by;
  min?: order_product_min_order_by;
  stddev?: order_product_stddev_order_by;
  stddev_pop?: order_product_stddev_pop_order_by;
  stddev_samp?: order_product_stddev_samp_order_by;
  sum?: order_product_sum_order_by;
  var_pop?: order_product_var_pop_order_by;
  var_samp?: order_product_var_samp_order_by;
  variance?: order_product_variance_order_by;
};

/** input type for inserting array relation for remote table "order_product" */
export type order_product_arr_rel_insert_input = {
  data: order_product_insert_input[];
  on_conflict?: order_product_on_conflict;
};

/** aggregate avg on columns */
export type order_product_avg_fields = {
  __typename?: "order_product_avg_fields";
  id?: number;
  order_id?: number;
  product_id?: number;
  quantity?: number;
};

/** order by avg() on columns of table "order_product" */
export type order_product_avg_order_by = {
  id?: order_by;
  order_id?: order_by;
  product_id?: order_by;
  quantity?: order_by;
};

/** Boolean expression to filter rows from the table "order_product". All fields are combined with a logical 'AND'. */
export type order_product_bool_exp = {
  _and?: (order_product_bool_exp | undefined)[];
  _not?: order_product_bool_exp;
  _or?: (order_product_bool_exp | undefined)[];
  created_at?: timestamptz_comparison_exp;
  id?: Int_comparison_exp;
  order?: order_bool_exp;
  order_id?: Int_comparison_exp;
  product?: product_bool_exp;
  product_id?: Int_comparison_exp;
  quantity?: Int_comparison_exp;
  updated_at?: timestamptz_comparison_exp;
};

/** unique or primary key constraints on table "order_product" */
export enum order_product_constraint {
  order_product_pkey = "order_product_pkey",
}

/** input type for incrementing integer column in table "order_product" */
export type order_product_inc_input = {
  id?: number;
  order_id?: number;
  product_id?: number;
  quantity?: number;
};

/** input type for inserting data into table "order_product" */
export type order_product_insert_input = {
  created_at?: timestamptz;
  id?: number;
  order?: order_obj_rel_insert_input;
  order_id?: number;
  product?: product_obj_rel_insert_input;
  product_id?: number;
  quantity?: number;
  updated_at?: timestamptz;
};

/** aggregate max on columns */
export type order_product_max_fields = {
  __typename?: "order_product_max_fields";
  created_at?: timestamptz;
  id?: number;
  order_id?: number;
  product_id?: number;
  quantity?: number;
  updated_at?: timestamptz;
};

/** order by max() on columns of table "order_product" */
export type order_product_max_order_by = {
  created_at?: order_by;
  id?: order_by;
  order_id?: order_by;
  product_id?: order_by;
  quantity?: order_by;
  updated_at?: order_by;
};

/** aggregate min on columns */
export type order_product_min_fields = {
  __typename?: "order_product_min_fields";
  created_at?: timestamptz;
  id?: number;
  order_id?: number;
  product_id?: number;
  quantity?: number;
  updated_at?: timestamptz;
};

/** order by min() on columns of table "order_product" */
export type order_product_min_order_by = {
  created_at?: order_by;
  id?: order_by;
  order_id?: order_by;
  product_id?: order_by;
  quantity?: order_by;
  updated_at?: order_by;
};

/** response of any mutation on the table "order_product" */
export type order_product_mutation_response = {
  __typename?: "order_product_mutation_response";
  /** number of affected rows by the mutation */
  affected_rows: number;
  /** data of the affected rows by the mutation */
  returning: order_product[];
};

/** input type for inserting object relation for remote table "order_product" */
export type order_product_obj_rel_insert_input = {
  data: order_product_insert_input;
  on_conflict?: order_product_on_conflict;
};

/** on conflict condition type for table "order_product" */
export type order_product_on_conflict = {
  constraint: order_product_constraint;
  update_columns: order_product_update_column[];
  where?: order_product_bool_exp;
};

/** ordering options when selecting data from "order_product" */
export type order_product_order_by = {
  created_at?: order_by;
  id?: order_by;
  order?: order_order_by;
  order_id?: order_by;
  product?: product_order_by;
  product_id?: order_by;
  quantity?: order_by;
  updated_at?: order_by;
};

/** primary key columns input for table: "order_product" */
export type order_product_pk_columns_input = {
  id: number;
};

/** select columns of table "order_product" */
export enum order_product_select_column {
  created_at = "created_at",
  id = "id",
  order_id = "order_id",
  product_id = "product_id",
  quantity = "quantity",
  updated_at = "updated_at",
}

/** input type for updating data in table "order_product" */
export type order_product_set_input = {
  created_at?: timestamptz;
  id?: number;
  order_id?: number;
  product_id?: number;
  quantity?: number;
  updated_at?: timestamptz;
};

/** aggregate stddev on columns */
export type order_product_stddev_fields = {
  __typename?: "order_product_stddev_fields";
  id?: number;
  order_id?: number;
  product_id?: number;
  quantity?: number;
};

/** order by stddev() on columns of table "order_product" */
export type order_product_stddev_order_by = {
  id?: order_by;
  order_id?: order_by;
  product_id?: order_by;
  quantity?: order_by;
};

/** aggregate stddev_pop on columns */
export type order_product_stddev_pop_fields = {
  __typename?: "order_product_stddev_pop_fields";
  id?: number;
  order_id?: number;
  product_id?: number;
  quantity?: number;
};

/** order by stddev_pop() on columns of table "order_product" */
export type order_product_stddev_pop_order_by = {
  id?: order_by;
  order_id?: order_by;
  product_id?: order_by;
  quantity?: order_by;
};

/** aggregate stddev_samp on columns */
export type order_product_stddev_samp_fields = {
  __typename?: "order_product_stddev_samp_fields";
  id?: number;
  order_id?: number;
  product_id?: number;
  quantity?: number;
};

/** order by stddev_samp() on columns of table "order_product" */
export type order_product_stddev_samp_order_by = {
  id?: order_by;
  order_id?: order_by;
  product_id?: order_by;
  quantity?: order_by;
};

/** aggregate sum on columns */
export type order_product_sum_fields = {
  __typename?: "order_product_sum_fields";
  id?: number;
  order_id?: number;
  product_id?: number;
  quantity?: number;
};

/** order by sum() on columns of table "order_product" */
export type order_product_sum_order_by = {
  id?: order_by;
  order_id?: order_by;
  product_id?: order_by;
  quantity?: order_by;
};

/** update columns of table "order_product" */
export enum order_product_update_column {
  created_at = "created_at",
  id = "id",
  order_id = "order_id",
  product_id = "product_id",
  quantity = "quantity",
  updated_at = "updated_at",
}

/** aggregate var_pop on columns */
export type order_product_var_pop_fields = {
  __typename?: "order_product_var_pop_fields";
  id?: number;
  order_id?: number;
  product_id?: number;
  quantity?: number;
};

/** order by var_pop() on columns of table "order_product" */
export type order_product_var_pop_order_by = {
  id?: order_by;
  order_id?: order_by;
  product_id?: order_by;
  quantity?: order_by;
};

/** aggregate var_samp on columns */
export type order_product_var_samp_fields = {
  __typename?: "order_product_var_samp_fields";
  id?: number;
  order_id?: number;
  product_id?: number;
  quantity?: number;
};

/** order by var_samp() on columns of table "order_product" */
export type order_product_var_samp_order_by = {
  id?: order_by;
  order_id?: order_by;
  product_id?: order_by;
  quantity?: order_by;
};

/** aggregate variance on columns */
export type order_product_variance_fields = {
  __typename?: "order_product_variance_fields";
  id?: number;
  order_id?: number;
  product_id?: number;
  quantity?: number;
};

/** order by variance() on columns of table "order_product" */
export type order_product_variance_order_by = {
  id?: order_by;
  order_id?: order_by;
  product_id?: order_by;
  quantity?: order_by;
};

/** select columns of table "order" */
export enum order_select_column {
  billing_address_id = "billing_address_id",
  created_at = "created_at",
  id = "id",
  is_shipped = "is_shipped",
  shipping_address_id = "shipping_address_id",
  updated_at = "updated_at",
  user_id = "user_id",
}

/** input type for updating data in table "order" */
export type order_set_input = {
  billing_address_id?: number;
  created_at?: timestamptz;
  id?: number;
  is_shipped?: boolean;
  shipping_address_id?: number;
  updated_at?: timestamptz;
  user_id?: number;
};

/** aggregate stddev on columns */
export type order_stddev_fields = {
  __typename?: "order_stddev_fields";
  billing_address_id?: number;
  id?: number;
  shipping_address_id?: number;
  user_id?: number;
};

/** order by stddev() on columns of table "order" */
export type order_stddev_order_by = {
  billing_address_id?: order_by;
  id?: order_by;
  shipping_address_id?: order_by;
  user_id?: order_by;
};

/** aggregate stddev_pop on columns */
export type order_stddev_pop_fields = {
  __typename?: "order_stddev_pop_fields";
  billing_address_id?: number;
  id?: number;
  shipping_address_id?: number;
  user_id?: number;
};

/** order by stddev_pop() on columns of table "order" */
export type order_stddev_pop_order_by = {
  billing_address_id?: order_by;
  id?: order_by;
  shipping_address_id?: order_by;
  user_id?: order_by;
};

/** aggregate stddev_samp on columns */
export type order_stddev_samp_fields = {
  __typename?: "order_stddev_samp_fields";
  billing_address_id?: number;
  id?: number;
  shipping_address_id?: number;
  user_id?: number;
};

/** order by stddev_samp() on columns of table "order" */
export type order_stddev_samp_order_by = {
  billing_address_id?: order_by;
  id?: order_by;
  shipping_address_id?: order_by;
  user_id?: order_by;
};

/** aggregate sum on columns */
export type order_sum_fields = {
  __typename?: "order_sum_fields";
  billing_address_id?: number;
  id?: number;
  shipping_address_id?: number;
  user_id?: number;
};

/** order by sum() on columns of table "order" */
export type order_sum_order_by = {
  billing_address_id?: order_by;
  id?: order_by;
  shipping_address_id?: order_by;
  user_id?: order_by;
};

/** update columns of table "order" */
export enum order_update_column {
  billing_address_id = "billing_address_id",
  created_at = "created_at",
  id = "id",
  is_shipped = "is_shipped",
  shipping_address_id = "shipping_address_id",
  updated_at = "updated_at",
  user_id = "user_id",
}

/** aggregate var_pop on columns */
export type order_var_pop_fields = {
  __typename?: "order_var_pop_fields";
  billing_address_id?: number;
  id?: number;
  shipping_address_id?: number;
  user_id?: number;
};

/** order by var_pop() on columns of table "order" */
export type order_var_pop_order_by = {
  billing_address_id?: order_by;
  id?: order_by;
  shipping_address_id?: order_by;
  user_id?: order_by;
};

/** aggregate var_samp on columns */
export type order_var_samp_fields = {
  __typename?: "order_var_samp_fields";
  billing_address_id?: number;
  id?: number;
  shipping_address_id?: number;
  user_id?: number;
};

/** order by var_samp() on columns of table "order" */
export type order_var_samp_order_by = {
  billing_address_id?: order_by;
  id?: order_by;
  shipping_address_id?: order_by;
  user_id?: order_by;
};

/** aggregate variance on columns */
export type order_variance_fields = {
  __typename?: "order_variance_fields";
  billing_address_id?: number;
  id?: number;
  shipping_address_id?: number;
  user_id?: number;
};

/** order by variance() on columns of table "order" */
export type order_variance_order_by = {
  billing_address_id?: order_by;
  id?: order_by;
  shipping_address_id?: order_by;
  user_id?: order_by;
};

export type PaymentIntentClientSecret = {
  __typename?: "PaymentIntentClientSecret";
  clientSecret: string;
};

/** columns and relationships of "product" */
export type product = {
  __typename?: "product";
  brand?: string;
  /** An object relationship */
  category: product_category_enum;
  category_display_name: string;
  created_at: timestamptz;
  description?: string;
  id: number;
  image_urls?: jsonb;
  name: string;
  /** An array relationship */
  orders: order_product[];
  /** An aggregated array relationship */
  orders_aggregate: order_product_aggregate;
  price: numeric;
  /** An array relationship */
  product_reviews: product_review[];
  /** An aggregated array relationship */
  product_reviews_aggregate: product_review_aggregate;
  updated_at: timestamptz;
};

/** aggregated selection of "product" */
export type product_aggregate = {
  __typename?: "product_aggregate";
  aggregate?: product_aggregate_fields;
  nodes: product[];
};

/** aggregate fields of "product" */
export type product_aggregate_fields = {
  __typename?: "product_aggregate_fields";
  avg?: product_avg_fields;
  count?: number;
  max?: product_max_fields;
  min?: product_min_fields;
  stddev?: product_stddev_fields;
  stddev_pop?: product_stddev_pop_fields;
  stddev_samp?: product_stddev_samp_fields;
  sum?: product_sum_fields;
  var_pop?: product_var_pop_fields;
  var_samp?: product_var_samp_fields;
  variance?: product_variance_fields;
};

/** order by aggregate values of table "product" */
export type product_aggregate_order_by = {
  avg?: product_avg_order_by;
  count?: order_by;
  max?: product_max_order_by;
  min?: product_min_order_by;
  stddev?: product_stddev_order_by;
  stddev_pop?: product_stddev_pop_order_by;
  stddev_samp?: product_stddev_samp_order_by;
  sum?: product_sum_order_by;
  var_pop?: product_var_pop_order_by;
  var_samp?: product_var_samp_order_by;
  variance?: product_variance_order_by;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type product_append_input = {
  image_urls?: jsonb;
};

/** input type for inserting array relation for remote table "product" */
export type product_arr_rel_insert_input = {
  data: product_insert_input[];
  on_conflict?: product_on_conflict;
};

/** aggregate avg on columns */
export type product_avg_fields = {
  __typename?: "product_avg_fields";
  id?: number;
  price?: number;
};

/** order by avg() on columns of table "product" */
export type product_avg_order_by = {
  id?: order_by;
  price?: order_by;
};

/** Boolean expression to filter rows from the table "product". All fields are combined with a logical 'AND'. */
export type product_bool_exp = {
  _and?: (product_bool_exp | undefined)[];
  _not?: product_bool_exp;
  _or?: (product_bool_exp | undefined)[];
  brand?: String_comparison_exp;
  category?: product_category_enum_bool_exp;
  category_display_name?: String_comparison_exp;
  created_at?: timestamptz_comparison_exp;
  description?: String_comparison_exp;
  id?: Int_comparison_exp;
  image_urls?: jsonb_comparison_exp;
  name?: String_comparison_exp;
  orders?: order_product_bool_exp;
  price?: numeric_comparison_exp;
  product_reviews?: product_review_bool_exp;
  updated_at?: timestamptz_comparison_exp;
};

/** columns and relationships of "product_category_enum" */
export type product_category_enum = {
  __typename?: "product_category_enum";
  display_name: string;
  name: string;
  /** An array relationship */
  products: product[];
  /** An aggregated array relationship */
  products_aggregate: product_aggregate;
};

/** aggregated selection of "product_category_enum" */
export type product_category_enum_aggregate = {
  __typename?: "product_category_enum_aggregate";
  aggregate?: product_category_enum_aggregate_fields;
  nodes: product_category_enum[];
};

/** aggregate fields of "product_category_enum" */
export type product_category_enum_aggregate_fields = {
  __typename?: "product_category_enum_aggregate_fields";
  count?: number;
  max?: product_category_enum_max_fields;
  min?: product_category_enum_min_fields;
};

/** order by aggregate values of table "product_category_enum" */
export type product_category_enum_aggregate_order_by = {
  count?: order_by;
  max?: product_category_enum_max_order_by;
  min?: product_category_enum_min_order_by;
};

/** input type for inserting array relation for remote table "product_category_enum" */
export type product_category_enum_arr_rel_insert_input = {
  data: product_category_enum_insert_input[];
  on_conflict?: product_category_enum_on_conflict;
};

/** Boolean expression to filter rows from the table "product_category_enum". All fields are combined with a logical 'AND'. */
export type product_category_enum_bool_exp = {
  _and?: (product_category_enum_bool_exp | undefined)[];
  _not?: product_category_enum_bool_exp;
  _or?: (product_category_enum_bool_exp | undefined)[];
  display_name?: String_comparison_exp;
  name?: String_comparison_exp;
  products?: product_bool_exp;
};

/** unique or primary key constraints on table "product_category_enum" */
export enum product_category_enum_constraint {
  product_category_enum_display_name_key = "product_category_enum_display_name_key",
  product_category_enum_pkey = "product_category_enum_pkey",
}

/** input type for inserting data into table "product_category_enum" */
export type product_category_enum_insert_input = {
  display_name?: string;
  name?: string;
  products?: product_arr_rel_insert_input;
};

/** aggregate max on columns */
export type product_category_enum_max_fields = {
  __typename?: "product_category_enum_max_fields";
  display_name?: string;
  name?: string;
};

/** order by max() on columns of table "product_category_enum" */
export type product_category_enum_max_order_by = {
  display_name?: order_by;
  name?: order_by;
};

/** aggregate min on columns */
export type product_category_enum_min_fields = {
  __typename?: "product_category_enum_min_fields";
  display_name?: string;
  name?: string;
};

/** order by min() on columns of table "product_category_enum" */
export type product_category_enum_min_order_by = {
  display_name?: order_by;
  name?: order_by;
};

/** response of any mutation on the table "product_category_enum" */
export type product_category_enum_mutation_response = {
  __typename?: "product_category_enum_mutation_response";
  /** number of affected rows by the mutation */
  affected_rows: number;
  /** data of the affected rows by the mutation */
  returning: product_category_enum[];
};

/** input type for inserting object relation for remote table "product_category_enum" */
export type product_category_enum_obj_rel_insert_input = {
  data: product_category_enum_insert_input;
  on_conflict?: product_category_enum_on_conflict;
};

/** on conflict condition type for table "product_category_enum" */
export type product_category_enum_on_conflict = {
  constraint: product_category_enum_constraint;
  update_columns: product_category_enum_update_column[];
  where?: product_category_enum_bool_exp;
};

/** ordering options when selecting data from "product_category_enum" */
export type product_category_enum_order_by = {
  display_name?: order_by;
  name?: order_by;
  products_aggregate?: product_aggregate_order_by;
};

/** primary key columns input for table: "product_category_enum" */
export type product_category_enum_pk_columns_input = {
  name: string;
};

/** select columns of table "product_category_enum" */
export enum product_category_enum_select_column {
  display_name = "display_name",
  name = "name",
}

/** input type for updating data in table "product_category_enum" */
export type product_category_enum_set_input = {
  display_name?: string;
  name?: string;
};

/** update columns of table "product_category_enum" */
export enum product_category_enum_update_column {
  display_name = "display_name",
  name = "name",
}

/** unique or primary key constraints on table "product" */
export enum product_constraint {
  product_pkey = "product_pkey",
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type product_delete_at_path_input = {
  image_urls?: (string | undefined)[];
};

/** delete the array element with specified index (negative integers count from the
end). throws an error if top level container is not an array */
export type product_delete_elem_input = {
  image_urls?: number;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type product_delete_key_input = {
  image_urls?: string;
};

/** input type for incrementing integer column in table "product" */
export type product_inc_input = {
  id?: number;
  price?: numeric;
};

/** input type for inserting data into table "product" */
export type product_insert_input = {
  brand?: string;
  category?: product_category_enum_obj_rel_insert_input;
  category_display_name?: string;
  created_at?: timestamptz;
  description?: string;
  id?: number;
  image_urls?: jsonb;
  name?: string;
  orders?: order_product_arr_rel_insert_input;
  price?: numeric;
  product_reviews?: product_review_arr_rel_insert_input;
  updated_at?: timestamptz;
};

/** aggregate max on columns */
export type product_max_fields = {
  __typename?: "product_max_fields";
  brand?: string;
  category_display_name?: string;
  created_at?: timestamptz;
  description?: string;
  id?: number;
  name?: string;
  price?: numeric;
  updated_at?: timestamptz;
};

/** order by max() on columns of table "product" */
export type product_max_order_by = {
  brand?: order_by;
  category_display_name?: order_by;
  created_at?: order_by;
  description?: order_by;
  id?: order_by;
  name?: order_by;
  price?: order_by;
  updated_at?: order_by;
};

/** aggregate min on columns */
export type product_min_fields = {
  __typename?: "product_min_fields";
  brand?: string;
  category_display_name?: string;
  created_at?: timestamptz;
  description?: string;
  id?: number;
  name?: string;
  price?: numeric;
  updated_at?: timestamptz;
};

/** order by min() on columns of table "product" */
export type product_min_order_by = {
  brand?: order_by;
  category_display_name?: order_by;
  created_at?: order_by;
  description?: order_by;
  id?: order_by;
  name?: order_by;
  price?: order_by;
  updated_at?: order_by;
};

/** response of any mutation on the table "product" */
export type product_mutation_response = {
  __typename?: "product_mutation_response";
  /** number of affected rows by the mutation */
  affected_rows: number;
  /** data of the affected rows by the mutation */
  returning: product[];
};

/** input type for inserting object relation for remote table "product" */
export type product_obj_rel_insert_input = {
  data: product_insert_input;
  on_conflict?: product_on_conflict;
};

/** on conflict condition type for table "product" */
export type product_on_conflict = {
  constraint: product_constraint;
  update_columns: product_update_column[];
  where?: product_bool_exp;
};

/** ordering options when selecting data from "product" */
export type product_order_by = {
  brand?: order_by;
  category?: product_category_enum_order_by;
  category_display_name?: order_by;
  created_at?: order_by;
  description?: order_by;
  id?: order_by;
  image_urls?: order_by;
  name?: order_by;
  orders_aggregate?: order_product_aggregate_order_by;
  price?: order_by;
  product_reviews_aggregate?: product_review_aggregate_order_by;
  updated_at?: order_by;
};

/** primary key columns input for table: "product" */
export type product_pk_columns_input = {
  id: number;
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type product_prepend_input = {
  image_urls?: jsonb;
};

/** A review for a product which a customer has purchased before


columns and relationships of "product_review" */
export type product_review = {
  __typename?: "product_review";
  comment: string;
  created_at: timestamptz;
  id: number;
  /** An object relationship */
  product: product;
  product_id: number;
  rating: number;
  updated_at: timestamptz;
  /** An object relationship */
  user: user;
  user_id: number;
};

/** aggregated selection of "product_review" */
export type product_review_aggregate = {
  __typename?: "product_review_aggregate";
  aggregate?: product_review_aggregate_fields;
  nodes: product_review[];
};

/** aggregate fields of "product_review" */
export type product_review_aggregate_fields = {
  __typename?: "product_review_aggregate_fields";
  avg?: product_review_avg_fields;
  count?: number;
  max?: product_review_max_fields;
  min?: product_review_min_fields;
  stddev?: product_review_stddev_fields;
  stddev_pop?: product_review_stddev_pop_fields;
  stddev_samp?: product_review_stddev_samp_fields;
  sum?: product_review_sum_fields;
  var_pop?: product_review_var_pop_fields;
  var_samp?: product_review_var_samp_fields;
  variance?: product_review_variance_fields;
};

/** order by aggregate values of table "product_review" */
export type product_review_aggregate_order_by = {
  avg?: product_review_avg_order_by;
  count?: order_by;
  max?: product_review_max_order_by;
  min?: product_review_min_order_by;
  stddev?: product_review_stddev_order_by;
  stddev_pop?: product_review_stddev_pop_order_by;
  stddev_samp?: product_review_stddev_samp_order_by;
  sum?: product_review_sum_order_by;
  var_pop?: product_review_var_pop_order_by;
  var_samp?: product_review_var_samp_order_by;
  variance?: product_review_variance_order_by;
};

/** input type for inserting array relation for remote table "product_review" */
export type product_review_arr_rel_insert_input = {
  data: product_review_insert_input[];
  on_conflict?: product_review_on_conflict;
};

/** aggregate avg on columns */
export type product_review_avg_fields = {
  __typename?: "product_review_avg_fields";
  id?: number;
  product_id?: number;
  rating?: number;
  user_id?: number;
};

/** order by avg() on columns of table "product_review" */
export type product_review_avg_order_by = {
  id?: order_by;
  product_id?: order_by;
  rating?: order_by;
  user_id?: order_by;
};

/** Boolean expression to filter rows from the table "product_review". All fields are combined with a logical 'AND'. */
export type product_review_bool_exp = {
  _and?: (product_review_bool_exp | undefined)[];
  _not?: product_review_bool_exp;
  _or?: (product_review_bool_exp | undefined)[];
  comment?: String_comparison_exp;
  created_at?: timestamptz_comparison_exp;
  id?: Int_comparison_exp;
  product?: product_bool_exp;
  product_id?: Int_comparison_exp;
  rating?: Int_comparison_exp;
  updated_at?: timestamptz_comparison_exp;
  user?: user_bool_exp;
  user_id?: Int_comparison_exp;
};

/** unique or primary key constraints on table "product_review" */
export enum product_review_constraint {
  one_review_per_person_and_product = "one_review_per_person_and_product",
  product_review_pkey = "product_review_pkey",
}

/** input type for incrementing integer column in table "product_review" */
export type product_review_inc_input = {
  id?: number;
  product_id?: number;
  rating?: number;
  user_id?: number;
};

/** input type for inserting data into table "product_review" */
export type product_review_insert_input = {
  comment?: string;
  created_at?: timestamptz;
  id?: number;
  product?: product_obj_rel_insert_input;
  product_id?: number;
  rating?: number;
  updated_at?: timestamptz;
  user?: user_obj_rel_insert_input;
  user_id?: number;
};

/** aggregate max on columns */
export type product_review_max_fields = {
  __typename?: "product_review_max_fields";
  comment?: string;
  created_at?: timestamptz;
  id?: number;
  product_id?: number;
  rating?: number;
  updated_at?: timestamptz;
  user_id?: number;
};

/** order by max() on columns of table "product_review" */
export type product_review_max_order_by = {
  comment?: order_by;
  created_at?: order_by;
  id?: order_by;
  product_id?: order_by;
  rating?: order_by;
  updated_at?: order_by;
  user_id?: order_by;
};

/** aggregate min on columns */
export type product_review_min_fields = {
  __typename?: "product_review_min_fields";
  comment?: string;
  created_at?: timestamptz;
  id?: number;
  product_id?: number;
  rating?: number;
  updated_at?: timestamptz;
  user_id?: number;
};

/** order by min() on columns of table "product_review" */
export type product_review_min_order_by = {
  comment?: order_by;
  created_at?: order_by;
  id?: order_by;
  product_id?: order_by;
  rating?: order_by;
  updated_at?: order_by;
  user_id?: order_by;
};

/** response of any mutation on the table "product_review" */
export type product_review_mutation_response = {
  __typename?: "product_review_mutation_response";
  /** number of affected rows by the mutation */
  affected_rows: number;
  /** data of the affected rows by the mutation */
  returning: product_review[];
};

/** input type for inserting object relation for remote table "product_review" */
export type product_review_obj_rel_insert_input = {
  data: product_review_insert_input;
  on_conflict?: product_review_on_conflict;
};

/** on conflict condition type for table "product_review" */
export type product_review_on_conflict = {
  constraint: product_review_constraint;
  update_columns: product_review_update_column[];
  where?: product_review_bool_exp;
};

/** ordering options when selecting data from "product_review" */
export type product_review_order_by = {
  comment?: order_by;
  created_at?: order_by;
  id?: order_by;
  product?: product_order_by;
  product_id?: order_by;
  rating?: order_by;
  updated_at?: order_by;
  user?: user_order_by;
  user_id?: order_by;
};

/** primary key columns input for table: "product_review" */
export type product_review_pk_columns_input = {
  id: number;
};

/** select columns of table "product_review" */
export enum product_review_select_column {
  comment = "comment",
  created_at = "created_at",
  id = "id",
  product_id = "product_id",
  rating = "rating",
  updated_at = "updated_at",
  user_id = "user_id",
}

/** input type for updating data in table "product_review" */
export type product_review_set_input = {
  comment?: string;
  created_at?: timestamptz;
  id?: number;
  product_id?: number;
  rating?: number;
  updated_at?: timestamptz;
  user_id?: number;
};

/** aggregate stddev on columns */
export type product_review_stddev_fields = {
  __typename?: "product_review_stddev_fields";
  id?: number;
  product_id?: number;
  rating?: number;
  user_id?: number;
};

/** order by stddev() on columns of table "product_review" */
export type product_review_stddev_order_by = {
  id?: order_by;
  product_id?: order_by;
  rating?: order_by;
  user_id?: order_by;
};

/** aggregate stddev_pop on columns */
export type product_review_stddev_pop_fields = {
  __typename?: "product_review_stddev_pop_fields";
  id?: number;
  product_id?: number;
  rating?: number;
  user_id?: number;
};

/** order by stddev_pop() on columns of table "product_review" */
export type product_review_stddev_pop_order_by = {
  id?: order_by;
  product_id?: order_by;
  rating?: order_by;
  user_id?: order_by;
};

/** aggregate stddev_samp on columns */
export type product_review_stddev_samp_fields = {
  __typename?: "product_review_stddev_samp_fields";
  id?: number;
  product_id?: number;
  rating?: number;
  user_id?: number;
};

/** order by stddev_samp() on columns of table "product_review" */
export type product_review_stddev_samp_order_by = {
  id?: order_by;
  product_id?: order_by;
  rating?: order_by;
  user_id?: order_by;
};

/** aggregate sum on columns */
export type product_review_sum_fields = {
  __typename?: "product_review_sum_fields";
  id?: number;
  product_id?: number;
  rating?: number;
  user_id?: number;
};

/** order by sum() on columns of table "product_review" */
export type product_review_sum_order_by = {
  id?: order_by;
  product_id?: order_by;
  rating?: order_by;
  user_id?: order_by;
};

/** update columns of table "product_review" */
export enum product_review_update_column {
  comment = "comment",
  created_at = "created_at",
  id = "id",
  product_id = "product_id",
  rating = "rating",
  updated_at = "updated_at",
  user_id = "user_id",
}

/** aggregate var_pop on columns */
export type product_review_var_pop_fields = {
  __typename?: "product_review_var_pop_fields";
  id?: number;
  product_id?: number;
  rating?: number;
  user_id?: number;
};

/** order by var_pop() on columns of table "product_review" */
export type product_review_var_pop_order_by = {
  id?: order_by;
  product_id?: order_by;
  rating?: order_by;
  user_id?: order_by;
};

/** aggregate var_samp on columns */
export type product_review_var_samp_fields = {
  __typename?: "product_review_var_samp_fields";
  id?: number;
  product_id?: number;
  rating?: number;
  user_id?: number;
};

/** order by var_samp() on columns of table "product_review" */
export type product_review_var_samp_order_by = {
  id?: order_by;
  product_id?: order_by;
  rating?: order_by;
  user_id?: order_by;
};

/** aggregate variance on columns */
export type product_review_variance_fields = {
  __typename?: "product_review_variance_fields";
  id?: number;
  product_id?: number;
  rating?: number;
  user_id?: number;
};

/** order by variance() on columns of table "product_review" */
export type product_review_variance_order_by = {
  id?: order_by;
  product_id?: order_by;
  rating?: order_by;
  user_id?: order_by;
};

/** select columns of table "product" */
export enum product_select_column {
  brand = "brand",
  category_display_name = "category_display_name",
  created_at = "created_at",
  description = "description",
  id = "id",
  image_urls = "image_urls",
  name = "name",
  price = "price",
  updated_at = "updated_at",
}

/** input type for updating data in table "product" */
export type product_set_input = {
  brand?: string;
  category_display_name?: string;
  created_at?: timestamptz;
  description?: string;
  id?: number;
  image_urls?: jsonb;
  name?: string;
  price?: numeric;
  updated_at?: timestamptz;
};

/** aggregate stddev on columns */
export type product_stddev_fields = {
  __typename?: "product_stddev_fields";
  id?: number;
  price?: number;
};

/** order by stddev() on columns of table "product" */
export type product_stddev_order_by = {
  id?: order_by;
  price?: order_by;
};

/** aggregate stddev_pop on columns */
export type product_stddev_pop_fields = {
  __typename?: "product_stddev_pop_fields";
  id?: number;
  price?: number;
};

/** order by stddev_pop() on columns of table "product" */
export type product_stddev_pop_order_by = {
  id?: order_by;
  price?: order_by;
};

/** aggregate stddev_samp on columns */
export type product_stddev_samp_fields = {
  __typename?: "product_stddev_samp_fields";
  id?: number;
  price?: number;
};

/** order by stddev_samp() on columns of table "product" */
export type product_stddev_samp_order_by = {
  id?: order_by;
  price?: order_by;
};

/** aggregate sum on columns */
export type product_sum_fields = {
  __typename?: "product_sum_fields";
  id?: number;
  price?: numeric;
};

/** order by sum() on columns of table "product" */
export type product_sum_order_by = {
  id?: order_by;
  price?: order_by;
};

/** update columns of table "product" */
export enum product_update_column {
  brand = "brand",
  category_display_name = "category_display_name",
  created_at = "created_at",
  description = "description",
  id = "id",
  image_urls = "image_urls",
  name = "name",
  price = "price",
  updated_at = "updated_at",
}

/** aggregate var_pop on columns */
export type product_var_pop_fields = {
  __typename?: "product_var_pop_fields";
  id?: number;
  price?: number;
};

/** order by var_pop() on columns of table "product" */
export type product_var_pop_order_by = {
  id?: order_by;
  price?: order_by;
};

/** aggregate var_samp on columns */
export type product_var_samp_fields = {
  __typename?: "product_var_samp_fields";
  id?: number;
  price?: number;
};

/** order by var_samp() on columns of table "product" */
export type product_var_samp_order_by = {
  id?: order_by;
  price?: order_by;
};

/** aggregate variance on columns */
export type product_variance_fields = {
  __typename?: "product_variance_fields";
  id?: number;
  price?: number;
};

/** order by variance() on columns of table "product" */
export type product_variance_order_by = {
  id?: order_by;
  price?: order_by;
};

/** query root */
export type query_root = {
  __typename?: "query_root";
  /** fetch data from the table: "address" */
  address: address[];
  /** fetch aggregated fields from the table: "address" */
  address_aggregate: address_aggregate;
  /** fetch data from the table: "address" using primary key columns */
  address_by_pk?: address;
  /** perform the action: "adminLogin" */
  adminLogin?: JWT;
  /** fetch data from the table: "order" */
  order: order[];
  /** fetch aggregated fields from the table: "order" */
  order_aggregate: order_aggregate;
  /** fetch data from the table: "order" using primary key columns */
  order_by_pk?: order;
  /** fetch data from the table: "order_product" */
  order_product: order_product[];
  /** fetch aggregated fields from the table: "order_product" */
  order_product_aggregate: order_product_aggregate;
  /** fetch data from the table: "order_product" using primary key columns */
  order_product_by_pk?: order_product;
  /** fetch data from the table: "product" */
  product: product[];
  /** fetch aggregated fields from the table: "product" */
  product_aggregate: product_aggregate;
  /** fetch data from the table: "product" using primary key columns */
  product_by_pk?: product;
  /** fetch data from the table: "product_category_enum" */
  product_category_enum: product_category_enum[];
  /** fetch aggregated fields from the table: "product_category_enum" */
  product_category_enum_aggregate: product_category_enum_aggregate;
  /** fetch data from the table: "product_category_enum" using primary key columns */
  product_category_enum_by_pk?: product_category_enum;
  /** fetch data from the table: "product_review" */
  product_review: product_review[];
  /** fetch aggregated fields from the table: "product_review" */
  product_review_aggregate: product_review_aggregate;
  /** fetch data from the table: "product_review" using primary key columns */
  product_review_by_pk?: product_review;
  /** perform the action: "refreshToken" */
  refreshToken?: RefreshTokenJWT;
  /** fetch data from the table: "site_admin" */
  site_admin: site_admin[];
  /** fetch aggregated fields from the table: "site_admin" */
  site_admin_aggregate: site_admin_aggregate;
  /** fetch data from the table: "site_admin" using primary key columns */
  site_admin_by_pk?: site_admin;
  /** fetch data from the table: "user" */
  user: user[];
  /** fetch aggregated fields from the table: "user" */
  user_aggregate: user_aggregate;
  /** fetch data from the table: "user" using primary key columns */
  user_by_pk?: user;
};

export type RefreshTokenInput = {
  refreshToken: string;
};

export type RefreshTokenJWT = {
  __typename?: "RefreshTokenJWT";
  token: string;
};

export type SignupInput = {
  email: string;
  name: string;
  password: string;
};

/** Someone administrative capabilities on the site


columns and relationships of "site_admin" */
export type site_admin = {
  __typename?: "site_admin";
  created_at: timestamptz;
  email: string;
  id: number;
  /** A bcrypt-hashed version of the admin password, compared against securely in the JWT Auth API handler for sign-in */
  password: string;
  updated_at: timestamptz;
};

/** aggregated selection of "site_admin" */
export type site_admin_aggregate = {
  __typename?: "site_admin_aggregate";
  aggregate?: site_admin_aggregate_fields;
  nodes: site_admin[];
};

/** aggregate fields of "site_admin" */
export type site_admin_aggregate_fields = {
  __typename?: "site_admin_aggregate_fields";
  avg?: site_admin_avg_fields;
  count?: number;
  max?: site_admin_max_fields;
  min?: site_admin_min_fields;
  stddev?: site_admin_stddev_fields;
  stddev_pop?: site_admin_stddev_pop_fields;
  stddev_samp?: site_admin_stddev_samp_fields;
  sum?: site_admin_sum_fields;
  var_pop?: site_admin_var_pop_fields;
  var_samp?: site_admin_var_samp_fields;
  variance?: site_admin_variance_fields;
};

/** order by aggregate values of table "site_admin" */
export type site_admin_aggregate_order_by = {
  avg?: site_admin_avg_order_by;
  count?: order_by;
  max?: site_admin_max_order_by;
  min?: site_admin_min_order_by;
  stddev?: site_admin_stddev_order_by;
  stddev_pop?: site_admin_stddev_pop_order_by;
  stddev_samp?: site_admin_stddev_samp_order_by;
  sum?: site_admin_sum_order_by;
  var_pop?: site_admin_var_pop_order_by;
  var_samp?: site_admin_var_samp_order_by;
  variance?: site_admin_variance_order_by;
};

/** input type for inserting array relation for remote table "site_admin" */
export type site_admin_arr_rel_insert_input = {
  data: site_admin_insert_input[];
  on_conflict?: site_admin_on_conflict;
};

/** aggregate avg on columns */
export type site_admin_avg_fields = {
  __typename?: "site_admin_avg_fields";
  id?: number;
};

/** order by avg() on columns of table "site_admin" */
export type site_admin_avg_order_by = {
  id?: order_by;
};

/** Boolean expression to filter rows from the table "site_admin". All fields are combined with a logical 'AND'. */
export type site_admin_bool_exp = {
  _and?: (site_admin_bool_exp | undefined)[];
  _not?: site_admin_bool_exp;
  _or?: (site_admin_bool_exp | undefined)[];
  created_at?: timestamptz_comparison_exp;
  email?: String_comparison_exp;
  id?: Int_comparison_exp;
  password?: String_comparison_exp;
  updated_at?: timestamptz_comparison_exp;
};

/** unique or primary key constraints on table "site_admin" */
export enum site_admin_constraint {
  site_admin_email_key = "site_admin_email_key",
  site_admin_pkey = "site_admin_pkey",
}

/** input type for incrementing integer column in table "site_admin" */
export type site_admin_inc_input = {
  id?: number;
};

/** input type for inserting data into table "site_admin" */
export type site_admin_insert_input = {
  created_at?: timestamptz;
  email?: string;
  id?: number;
  password?: string;
  updated_at?: timestamptz;
};

/** aggregate max on columns */
export type site_admin_max_fields = {
  __typename?: "site_admin_max_fields";
  created_at?: timestamptz;
  email?: string;
  id?: number;
  password?: string;
  updated_at?: timestamptz;
};

/** order by max() on columns of table "site_admin" */
export type site_admin_max_order_by = {
  created_at?: order_by;
  email?: order_by;
  id?: order_by;
  password?: order_by;
  updated_at?: order_by;
};

/** aggregate min on columns */
export type site_admin_min_fields = {
  __typename?: "site_admin_min_fields";
  created_at?: timestamptz;
  email?: string;
  id?: number;
  password?: string;
  updated_at?: timestamptz;
};

/** order by min() on columns of table "site_admin" */
export type site_admin_min_order_by = {
  created_at?: order_by;
  email?: order_by;
  id?: order_by;
  password?: order_by;
  updated_at?: order_by;
};

/** response of any mutation on the table "site_admin" */
export type site_admin_mutation_response = {
  __typename?: "site_admin_mutation_response";
  /** number of affected rows by the mutation */
  affected_rows: number;
  /** data of the affected rows by the mutation */
  returning: site_admin[];
};

/** input type for inserting object relation for remote table "site_admin" */
export type site_admin_obj_rel_insert_input = {
  data: site_admin_insert_input;
  on_conflict?: site_admin_on_conflict;
};

/** on conflict condition type for table "site_admin" */
export type site_admin_on_conflict = {
  constraint: site_admin_constraint;
  update_columns: site_admin_update_column[];
  where?: site_admin_bool_exp;
};

/** ordering options when selecting data from "site_admin" */
export type site_admin_order_by = {
  created_at?: order_by;
  email?: order_by;
  id?: order_by;
  password?: order_by;
  updated_at?: order_by;
};

/** primary key columns input for table: "site_admin" */
export type site_admin_pk_columns_input = {
  id: number;
};

/** select columns of table "site_admin" */
export enum site_admin_select_column {
  created_at = "created_at",
  email = "email",
  id = "id",
  password = "password",
  updated_at = "updated_at",
}

/** input type for updating data in table "site_admin" */
export type site_admin_set_input = {
  created_at?: timestamptz;
  email?: string;
  id?: number;
  password?: string;
  updated_at?: timestamptz;
};

/** aggregate stddev on columns */
export type site_admin_stddev_fields = {
  __typename?: "site_admin_stddev_fields";
  id?: number;
};

/** order by stddev() on columns of table "site_admin" */
export type site_admin_stddev_order_by = {
  id?: order_by;
};

/** aggregate stddev_pop on columns */
export type site_admin_stddev_pop_fields = {
  __typename?: "site_admin_stddev_pop_fields";
  id?: number;
};

/** order by stddev_pop() on columns of table "site_admin" */
export type site_admin_stddev_pop_order_by = {
  id?: order_by;
};

/** aggregate stddev_samp on columns */
export type site_admin_stddev_samp_fields = {
  __typename?: "site_admin_stddev_samp_fields";
  id?: number;
};

/** order by stddev_samp() on columns of table "site_admin" */
export type site_admin_stddev_samp_order_by = {
  id?: order_by;
};

/** aggregate sum on columns */
export type site_admin_sum_fields = {
  __typename?: "site_admin_sum_fields";
  id?: number;
};

/** order by sum() on columns of table "site_admin" */
export type site_admin_sum_order_by = {
  id?: order_by;
};

/** update columns of table "site_admin" */
export enum site_admin_update_column {
  created_at = "created_at",
  email = "email",
  id = "id",
  password = "password",
  updated_at = "updated_at",
}

/** aggregate var_pop on columns */
export type site_admin_var_pop_fields = {
  __typename?: "site_admin_var_pop_fields";
  id?: number;
};

/** order by var_pop() on columns of table "site_admin" */
export type site_admin_var_pop_order_by = {
  id?: order_by;
};

/** aggregate var_samp on columns */
export type site_admin_var_samp_fields = {
  __typename?: "site_admin_var_samp_fields";
  id?: number;
};

/** order by var_samp() on columns of table "site_admin" */
export type site_admin_var_samp_order_by = {
  id?: order_by;
};

/** aggregate variance on columns */
export type site_admin_variance_fields = {
  __typename?: "site_admin_variance_fields";
  id?: number;
};

/** order by variance() on columns of table "site_admin" */
export type site_admin_variance_order_by = {
  id?: order_by;
};

/** expression to compare columns of type String. All fields are combined with logical 'AND'. */
export type String_comparison_exp = {
  _eq?: string;
  _gt?: string;
  _gte?: string;
  _ilike?: string;
  _in?: string[];
  _is_null?: boolean;
  _like?: string;
  _lt?: string;
  _lte?: string;
  _neq?: string;
  _nilike?: string;
  _nin?: string[];
  _nlike?: string;
  _nsimilar?: string;
  _similar?: string;
};

/** subscription root */
export type subscription_root = {
  __typename?: "subscription_root";
  /** fetch data from the table: "address" */
  address: address[];
  /** fetch aggregated fields from the table: "address" */
  address_aggregate: address_aggregate;
  /** fetch data from the table: "address" using primary key columns */
  address_by_pk?: address;
  /** perform the action: "adminLogin" */
  adminLogin?: JWT;
  /** fetch data from the table: "order" */
  order: order[];
  /** fetch aggregated fields from the table: "order" */
  order_aggregate: order_aggregate;
  /** fetch data from the table: "order" using primary key columns */
  order_by_pk?: order;
  /** fetch data from the table: "order_product" */
  order_product: order_product[];
  /** fetch aggregated fields from the table: "order_product" */
  order_product_aggregate: order_product_aggregate;
  /** fetch data from the table: "order_product" using primary key columns */
  order_product_by_pk?: order_product;
  /** fetch data from the table: "product" */
  product: product[];
  /** fetch aggregated fields from the table: "product" */
  product_aggregate: product_aggregate;
  /** fetch data from the table: "product" using primary key columns */
  product_by_pk?: product;
  /** fetch data from the table: "product_category_enum" */
  product_category_enum: product_category_enum[];
  /** fetch aggregated fields from the table: "product_category_enum" */
  product_category_enum_aggregate: product_category_enum_aggregate;
  /** fetch data from the table: "product_category_enum" using primary key columns */
  product_category_enum_by_pk?: product_category_enum;
  /** fetch data from the table: "product_review" */
  product_review: product_review[];
  /** fetch aggregated fields from the table: "product_review" */
  product_review_aggregate: product_review_aggregate;
  /** fetch data from the table: "product_review" using primary key columns */
  product_review_by_pk?: product_review;
  /** perform the action: "refreshToken" */
  refreshToken?: RefreshTokenJWT;
  /** fetch data from the table: "site_admin" */
  site_admin: site_admin[];
  /** fetch aggregated fields from the table: "site_admin" */
  site_admin_aggregate: site_admin_aggregate;
  /** fetch data from the table: "site_admin" using primary key columns */
  site_admin_by_pk?: site_admin;
  /** fetch data from the table: "user" */
  user: user[];
  /** fetch aggregated fields from the table: "user" */
  user_aggregate: user_aggregate;
  /** fetch data from the table: "user" using primary key columns */
  user_by_pk?: user;
};

export type timestamptz = any;

/** expression to compare columns of type timestamptz. All fields are combined with logical 'AND'. */
export type timestamptz_comparison_exp = {
  _eq?: timestamptz;
  _gt?: timestamptz;
  _gte?: timestamptz;
  _in?: timestamptz[];
  _is_null?: boolean;
  _lt?: timestamptz;
  _lte?: timestamptz;
  _neq?: timestamptz;
  _nin?: timestamptz[];
};

/** Someone with an account on the site, who uses it to make purchases


columns and relationships of "user" */
export type user = {
  __typename?: "user";
  /** An array relationship */
  addresses: address[];
  /** An aggregated array relationship */
  addresses_aggregate: address_aggregate;
  created_at: timestamptz;
  email: string;
  id: number;
  name: string;
  /** An array relationship */
  orders: order[];
  /** An aggregated array relationship */
  orders_aggregate: order_aggregate;
  /** A bcrypt-hashed version of the user password, compared against securely in the JWT Auth API handler for sign-in */
  password: string;
  /** An array relationship */
  product_reviews: product_review[];
  /** An aggregated array relationship */
  product_reviews_aggregate: product_review_aggregate;
  refresh_token?: string;
  updated_at: timestamptz;
};

/** aggregated selection of "user" */
export type user_aggregate = {
  __typename?: "user_aggregate";
  aggregate?: user_aggregate_fields;
  nodes: user[];
};

/** aggregate fields of "user" */
export type user_aggregate_fields = {
  __typename?: "user_aggregate_fields";
  avg?: user_avg_fields;
  count?: number;
  max?: user_max_fields;
  min?: user_min_fields;
  stddev?: user_stddev_fields;
  stddev_pop?: user_stddev_pop_fields;
  stddev_samp?: user_stddev_samp_fields;
  sum?: user_sum_fields;
  var_pop?: user_var_pop_fields;
  var_samp?: user_var_samp_fields;
  variance?: user_variance_fields;
};

/** order by aggregate values of table "user" */
export type user_aggregate_order_by = {
  avg?: user_avg_order_by;
  count?: order_by;
  max?: user_max_order_by;
  min?: user_min_order_by;
  stddev?: user_stddev_order_by;
  stddev_pop?: user_stddev_pop_order_by;
  stddev_samp?: user_stddev_samp_order_by;
  sum?: user_sum_order_by;
  var_pop?: user_var_pop_order_by;
  var_samp?: user_var_samp_order_by;
  variance?: user_variance_order_by;
};

/** input type for inserting array relation for remote table "user" */
export type user_arr_rel_insert_input = {
  data: user_insert_input[];
  on_conflict?: user_on_conflict;
};

/** aggregate avg on columns */
export type user_avg_fields = {
  __typename?: "user_avg_fields";
  id?: number;
};

/** order by avg() on columns of table "user" */
export type user_avg_order_by = {
  id?: order_by;
};

/** Boolean expression to filter rows from the table "user". All fields are combined with a logical 'AND'. */
export type user_bool_exp = {
  _and?: (user_bool_exp | undefined)[];
  _not?: user_bool_exp;
  _or?: (user_bool_exp | undefined)[];
  addresses?: address_bool_exp;
  created_at?: timestamptz_comparison_exp;
  email?: String_comparison_exp;
  id?: Int_comparison_exp;
  name?: String_comparison_exp;
  orders?: order_bool_exp;
  password?: String_comparison_exp;
  product_reviews?: product_review_bool_exp;
  refresh_token?: String_comparison_exp;
  updated_at?: timestamptz_comparison_exp;
};

/** unique or primary key constraints on table "user" */
export enum user_constraint {
  user_email_key = "user_email_key",
  user_pkey = "user_pkey",
  user_refresh_token_key = "user_refresh_token_key",
}

/** input type for incrementing integer column in table "user" */
export type user_inc_input = {
  id?: number;
};

/** input type for inserting data into table "user" */
export type user_insert_input = {
  addresses?: address_arr_rel_insert_input;
  created_at?: timestamptz;
  email?: string;
  id?: number;
  name?: string;
  orders?: order_arr_rel_insert_input;
  password?: string;
  product_reviews?: product_review_arr_rel_insert_input;
  refresh_token?: string;
  updated_at?: timestamptz;
};

/** aggregate max on columns */
export type user_max_fields = {
  __typename?: "user_max_fields";
  created_at?: timestamptz;
  email?: string;
  id?: number;
  name?: string;
  password?: string;
  refresh_token?: string;
  updated_at?: timestamptz;
};

/** order by max() on columns of table "user" */
export type user_max_order_by = {
  created_at?: order_by;
  email?: order_by;
  id?: order_by;
  name?: order_by;
  password?: order_by;
  refresh_token?: order_by;
  updated_at?: order_by;
};

/** aggregate min on columns */
export type user_min_fields = {
  __typename?: "user_min_fields";
  created_at?: timestamptz;
  email?: string;
  id?: number;
  name?: string;
  password?: string;
  refresh_token?: string;
  updated_at?: timestamptz;
};

/** order by min() on columns of table "user" */
export type user_min_order_by = {
  created_at?: order_by;
  email?: order_by;
  id?: order_by;
  name?: order_by;
  password?: order_by;
  refresh_token?: order_by;
  updated_at?: order_by;
};

/** response of any mutation on the table "user" */
export type user_mutation_response = {
  __typename?: "user_mutation_response";
  /** number of affected rows by the mutation */
  affected_rows: number;
  /** data of the affected rows by the mutation */
  returning: user[];
};

/** input type for inserting object relation for remote table "user" */
export type user_obj_rel_insert_input = {
  data: user_insert_input;
  on_conflict?: user_on_conflict;
};

/** on conflict condition type for table "user" */
export type user_on_conflict = {
  constraint: user_constraint;
  update_columns: user_update_column[];
  where?: user_bool_exp;
};

/** ordering options when selecting data from "user" */
export type user_order_by = {
  addresses_aggregate?: address_aggregate_order_by;
  created_at?: order_by;
  email?: order_by;
  id?: order_by;
  name?: order_by;
  orders_aggregate?: order_aggregate_order_by;
  password?: order_by;
  product_reviews_aggregate?: product_review_aggregate_order_by;
  refresh_token?: order_by;
  updated_at?: order_by;
};

/** primary key columns input for table: "user" */
export type user_pk_columns_input = {
  id: number;
};

/** select columns of table "user" */
export enum user_select_column {
  created_at = "created_at",
  email = "email",
  id = "id",
  name = "name",
  password = "password",
  refresh_token = "refresh_token",
  updated_at = "updated_at",
}

/** input type for updating data in table "user" */
export type user_set_input = {
  created_at?: timestamptz;
  email?: string;
  id?: number;
  name?: string;
  password?: string;
  refresh_token?: string;
  updated_at?: timestamptz;
};

/** aggregate stddev on columns */
export type user_stddev_fields = {
  __typename?: "user_stddev_fields";
  id?: number;
};

/** order by stddev() on columns of table "user" */
export type user_stddev_order_by = {
  id?: order_by;
};

/** aggregate stddev_pop on columns */
export type user_stddev_pop_fields = {
  __typename?: "user_stddev_pop_fields";
  id?: number;
};

/** order by stddev_pop() on columns of table "user" */
export type user_stddev_pop_order_by = {
  id?: order_by;
};

/** aggregate stddev_samp on columns */
export type user_stddev_samp_fields = {
  __typename?: "user_stddev_samp_fields";
  id?: number;
};

/** order by stddev_samp() on columns of table "user" */
export type user_stddev_samp_order_by = {
  id?: order_by;
};

/** aggregate sum on columns */
export type user_sum_fields = {
  __typename?: "user_sum_fields";
  id?: number;
};

/** order by sum() on columns of table "user" */
export type user_sum_order_by = {
  id?: order_by;
};

/** update columns of table "user" */
export enum user_update_column {
  created_at = "created_at",
  email = "email",
  id = "id",
  name = "name",
  password = "password",
  refresh_token = "refresh_token",
  updated_at = "updated_at",
}

/** aggregate var_pop on columns */
export type user_var_pop_fields = {
  __typename?: "user_var_pop_fields";
  id?: number;
};

/** order by var_pop() on columns of table "user" */
export type user_var_pop_order_by = {
  id?: order_by;
};

/** aggregate var_samp on columns */
export type user_var_samp_fields = {
  __typename?: "user_var_samp_fields";
  id?: number;
};

/** order by var_samp() on columns of table "user" */
export type user_var_samp_order_by = {
  id?: order_by;
};

/** aggregate variance on columns */
export type user_variance_fields = {
  __typename?: "user_variance_fields";
  id?: number;
};

/** order by variance() on columns of table "user" */
export type user_variance_order_by = {
  id?: order_by;
};

export type uuid = any;

export const AllTypesProps: Record<string, any> = {
  address: {
    orders_with_billing_address: {
      distinct_on: {
        type: "order_select_column",
        array: true,
        arrayRequired: false,
        required: true,
      },
      limit: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false,
      },
      offset: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false,
      },
      order_by: {
        type: "order_order_by",
        array: true,
        arrayRequired: false,
        required: true,
      },
      where: {
        type: "order_bool_exp",
        array: false,
        arrayRequired: false,
        required: false,
      },
    },
    orders_with_billing_address_aggregate: {
      distinct_on: {
        type: "order_select_column",
        array: true,
        arrayRequired: false,
        required: true,
      },
      limit: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false,
      },
      offset: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false,
      },
      order_by: {
        type: "order_order_by",
        array: true,
        arrayRequired: false,
        required: true,
      },
      where: {
        type: "order_bool_exp",
        array: false,
        arrayRequired: false,
        required: false,
      },
    },
    orders_with_shipping_address: {
      distinct_on: {
        type: "order_select_column",
        array: true,
        arrayRequired: false,
        required: true,
      },
      limit: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false,
      },
      offset: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false,
      },
      order_by: {
        type: "order_order_by",
        array: true,
        arrayRequired: false,
        required: true,
      },
      where: {
        type: "order_bool_exp",
        array: false,
        arrayRequired: false,
        required: false,
      },
    },
    orders_with_shipping_address_aggregate: {
      distinct_on: {
        type: "order_select_column",
        array: true,
        arrayRequired: false,
        required: true,
      },
      limit: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false,
      },
      offset: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false,
      },
      order_by: {
        type: "order_order_by",
        array: true,
        arrayRequired: false,
        required: true,
      },
      where: {
        type: "order_bool_exp",
        array: false,
        arrayRequired: false,
        required: false,
      },
    },
  },
  address_aggregate_fields: {
    count: {
      columns: {
        type: "address_select_column",
        array: true,
        arrayRequired: false,
        required: true,
      },
      distinct: {
        type: "Boolean",
        array: false,
        arrayRequired: false,
        required: false,
      },
    },
  },
  address_aggregate_order_by: {
    avg: {
      type: "address_avg_order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    count: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    max: {
      type: "address_max_order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    min: {
      type: "address_min_order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    stddev: {
      type: "address_stddev_order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    stddev_pop: {
      type: "address_stddev_pop_order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    stddev_samp: {
      type: "address_stddev_samp_order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    sum: {
      type: "address_sum_order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    var_pop: {
      type: "address_var_pop_order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    var_samp: {
      type: "address_var_samp_order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    variance: {
      type: "address_variance_order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  address_arr_rel_insert_input: {
    data: {
      type: "address_insert_input",
      array: true,
      arrayRequired: true,
      required: true,
    },
    on_conflict: {
      type: "address_on_conflict",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  address_avg_order_by: {
    id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    user_id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  address_bool_exp: {
    _and: {
      type: "address_bool_exp",
      array: true,
      arrayRequired: false,
      required: false,
    },
    _not: {
      type: "address_bool_exp",
      array: false,
      arrayRequired: false,
      required: false,
    },
    _or: {
      type: "address_bool_exp",
      array: true,
      arrayRequired: false,
      required: false,
    },
    address_line_one: {
      type: "String_comparison_exp",
      array: false,
      arrayRequired: false,
      required: false,
    },
    address_line_two: {
      type: "String_comparison_exp",
      array: false,
      arrayRequired: false,
      required: false,
    },
    city: {
      type: "String_comparison_exp",
      array: false,
      arrayRequired: false,
      required: false,
    },
    created_at: {
      type: "timestamptz_comparison_exp",
      array: false,
      arrayRequired: false,
      required: false,
    },
    id: {
      type: "Int_comparison_exp",
      array: false,
      arrayRequired: false,
      required: false,
    },
    orders_with_billing_address: {
      type: "order_bool_exp",
      array: false,
      arrayRequired: false,
      required: false,
    },
    orders_with_shipping_address: {
      type: "order_bool_exp",
      array: false,
      arrayRequired: false,
      required: false,
    },
    state: {
      type: "String_comparison_exp",
      array: false,
      arrayRequired: false,
      required: false,
    },
    updated_at: {
      type: "timestamptz_comparison_exp",
      array: false,
      arrayRequired: false,
      required: false,
    },
    user: {
      type: "user_bool_exp",
      array: false,
      arrayRequired: false,
      required: false,
    },
    user_id: {
      type: "Int_comparison_exp",
      array: false,
      arrayRequired: false,
      required: false,
    },
    zipcode: {
      type: "String_comparison_exp",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  address_constraint: "enum",
  address_inc_input: {
    id: {
      type: "Int",
      array: false,
      arrayRequired: false,
      required: false,
    },
    user_id: {
      type: "Int",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  address_insert_input: {
    address_line_one: {
      type: "String",
      array: false,
      arrayRequired: false,
      required: false,
    },
    address_line_two: {
      type: "String",
      array: false,
      arrayRequired: false,
      required: false,
    },
    city: {
      type: "String",
      array: false,
      arrayRequired: false,
      required: false,
    },
    created_at: {
      type: "timestamptz",
      array: false,
      arrayRequired: false,
      required: false,
    },
    id: {
      type: "Int",
      array: false,
      arrayRequired: false,
      required: false,
    },
    orders_with_billing_address: {
      type: "order_arr_rel_insert_input",
      array: false,
      arrayRequired: false,
      required: false,
    },
    orders_with_shipping_address: {
      type: "order_arr_rel_insert_input",
      array: false,
      arrayRequired: false,
      required: false,
    },
    state: {
      type: "String",
      array: false,
      arrayRequired: false,
      required: false,
    },
    updated_at: {
      type: "timestamptz",
      array: false,
      arrayRequired: false,
      required: false,
    },
    user: {
      type: "user_obj_rel_insert_input",
      array: false,
      arrayRequired: false,
      required: false,
    },
    user_id: {
      type: "Int",
      array: false,
      arrayRequired: false,
      required: false,
    },
    zipcode: {
      type: "String",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  address_max_order_by: {
    address_line_one: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    address_line_two: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    city: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    created_at: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    state: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    updated_at: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    user_id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    zipcode: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  address_min_order_by: {
    address_line_one: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    address_line_two: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    city: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    created_at: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    state: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    updated_at: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    user_id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    zipcode: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  address_obj_rel_insert_input: {
    data: {
      type: "address_insert_input",
      array: false,
      arrayRequired: false,
      required: true,
    },
    on_conflict: {
      type: "address_on_conflict",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  address_on_conflict: {
    constraint: {
      type: "address_constraint",
      array: false,
      arrayRequired: false,
      required: true,
    },
    update_columns: {
      type: "address_update_column",
      array: true,
      arrayRequired: true,
      required: true,
    },
    where: {
      type: "address_bool_exp",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  address_order_by: {
    address_line_one: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    address_line_two: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    city: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    created_at: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    orders_with_billing_address_aggregate: {
      type: "order_aggregate_order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    orders_with_shipping_address_aggregate: {
      type: "order_aggregate_order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    state: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    updated_at: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    user: {
      type: "user_order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    user_id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    zipcode: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  address_pk_columns_input: {
    id: {
      type: "Int",
      array: false,
      arrayRequired: false,
      required: true,
    },
  },
  address_select_column: "enum",
  address_set_input: {
    address_line_one: {
      type: "String",
      array: false,
      arrayRequired: false,
      required: false,
    },
    address_line_two: {
      type: "String",
      array: false,
      arrayRequired: false,
      required: false,
    },
    city: {
      type: "String",
      array: false,
      arrayRequired: false,
      required: false,
    },
    created_at: {
      type: "timestamptz",
      array: false,
      arrayRequired: false,
      required: false,
    },
    id: {
      type: "Int",
      array: false,
      arrayRequired: false,
      required: false,
    },
    state: {
      type: "String",
      array: false,
      arrayRequired: false,
      required: false,
    },
    updated_at: {
      type: "timestamptz",
      array: false,
      arrayRequired: false,
      required: false,
    },
    user_id: {
      type: "Int",
      array: false,
      arrayRequired: false,
      required: false,
    },
    zipcode: {
      type: "String",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  address_stddev_order_by: {
    id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    user_id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  address_stddev_pop_order_by: {
    id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    user_id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  address_stddev_samp_order_by: {
    id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    user_id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  address_sum_order_by: {
    id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    user_id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  address_update_column: "enum",
  address_var_pop_order_by: {
    id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    user_id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  address_var_samp_order_by: {
    id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    user_id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  address_variance_order_by: {
    id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    user_id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  AdminLoginInput: {
    email: {
      type: "String",
      array: false,
      arrayRequired: false,
      required: true,
    },
    password: {
      type: "String",
      array: false,
      arrayRequired: false,
      required: true,
    },
  },
  AdminSignupInput: {
    email: {
      type: "String",
      array: false,
      arrayRequired: false,
      required: true,
    },
    name: {
      type: "String",
      array: false,
      arrayRequired: false,
      required: true,
    },
    password: {
      type: "String",
      array: false,
      arrayRequired: false,
      required: true,
    },
  },
  Boolean_comparison_exp: {
    _eq: {
      type: "Boolean",
      array: false,
      arrayRequired: false,
      required: false,
    },
    _gt: {
      type: "Boolean",
      array: false,
      arrayRequired: false,
      required: false,
    },
    _gte: {
      type: "Boolean",
      array: false,
      arrayRequired: false,
      required: false,
    },
    _in: {
      type: "Boolean",
      array: true,
      arrayRequired: false,
      required: true,
    },
    _is_null: {
      type: "Boolean",
      array: false,
      arrayRequired: false,
      required: false,
    },
    _lt: {
      type: "Boolean",
      array: false,
      arrayRequired: false,
      required: false,
    },
    _lte: {
      type: "Boolean",
      array: false,
      arrayRequired: false,
      required: false,
    },
    _neq: {
      type: "Boolean",
      array: false,
      arrayRequired: false,
      required: false,
    },
    _nin: {
      type: "Boolean",
      array: true,
      arrayRequired: false,
      required: true,
    },
  },
  CreatePaymentIntentInput: {
    paymentAmount: {
      type: "Float",
      array: false,
      arrayRequired: false,
      required: true,
    },
  },
  Int_comparison_exp: {
    _eq: {
      type: "Int",
      array: false,
      arrayRequired: false,
      required: false,
    },
    _gt: {
      type: "Int",
      array: false,
      arrayRequired: false,
      required: false,
    },
    _gte: {
      type: "Int",
      array: false,
      arrayRequired: false,
      required: false,
    },
    _in: {
      type: "Int",
      array: true,
      arrayRequired: false,
      required: true,
    },
    _is_null: {
      type: "Boolean",
      array: false,
      arrayRequired: false,
      required: false,
    },
    _lt: {
      type: "Int",
      array: false,
      arrayRequired: false,
      required: false,
    },
    _lte: {
      type: "Int",
      array: false,
      arrayRequired: false,
      required: false,
    },
    _neq: {
      type: "Int",
      array: false,
      arrayRequired: false,
      required: false,
    },
    _nin: {
      type: "Int",
      array: true,
      arrayRequired: false,
      required: true,
    },
  },
  json: "String",
  json_comparison_exp: {
    _eq: {
      type: "json",
      array: false,
      arrayRequired: false,
      required: false,
    },
    _gt: {
      type: "json",
      array: false,
      arrayRequired: false,
      required: false,
    },
    _gte: {
      type: "json",
      array: false,
      arrayRequired: false,
      required: false,
    },
    _in: {
      type: "json",
      array: true,
      arrayRequired: false,
      required: true,
    },
    _is_null: {
      type: "Boolean",
      array: false,
      arrayRequired: false,
      required: false,
    },
    _lt: {
      type: "json",
      array: false,
      arrayRequired: false,
      required: false,
    },
    _lte: {
      type: "json",
      array: false,
      arrayRequired: false,
      required: false,
    },
    _neq: {
      type: "json",
      array: false,
      arrayRequired: false,
      required: false,
    },
    _nin: {
      type: "json",
      array: true,
      arrayRequired: false,
      required: true,
    },
  },
  jsonb: "String",
  jsonb_comparison_exp: {
    _contained_in: {
      type: "jsonb",
      array: false,
      arrayRequired: false,
      required: false,
    },
    _contains: {
      type: "jsonb",
      array: false,
      arrayRequired: false,
      required: false,
    },
    _eq: {
      type: "jsonb",
      array: false,
      arrayRequired: false,
      required: false,
    },
    _gt: {
      type: "jsonb",
      array: false,
      arrayRequired: false,
      required: false,
    },
    _gte: {
      type: "jsonb",
      array: false,
      arrayRequired: false,
      required: false,
    },
    _has_key: {
      type: "String",
      array: false,
      arrayRequired: false,
      required: false,
    },
    _has_keys_all: {
      type: "String",
      array: true,
      arrayRequired: false,
      required: true,
    },
    _has_keys_any: {
      type: "String",
      array: true,
      arrayRequired: false,
      required: true,
    },
    _in: {
      type: "jsonb",
      array: true,
      arrayRequired: false,
      required: true,
    },
    _is_null: {
      type: "Boolean",
      array: false,
      arrayRequired: false,
      required: false,
    },
    _lt: {
      type: "jsonb",
      array: false,
      arrayRequired: false,
      required: false,
    },
    _lte: {
      type: "jsonb",
      array: false,
      arrayRequired: false,
      required: false,
    },
    _neq: {
      type: "jsonb",
      array: false,
      arrayRequired: false,
      required: false,
    },
    _nin: {
      type: "jsonb",
      array: true,
      arrayRequired: false,
      required: true,
    },
  },
  LoginInput: {
    email: {
      type: "String",
      array: false,
      arrayRequired: false,
      required: true,
    },
    password: {
      type: "String",
      array: false,
      arrayRequired: false,
      required: true,
    },
  },
  mutation_root: {
    adminSignup: {
      params: {
        type: "AdminSignupInput",
        array: false,
        arrayRequired: false,
        required: true,
      },
    },
    createPaymentIntent: {
      params: {
        type: "CreatePaymentIntentInput",
        array: false,
        arrayRequired: false,
        required: true,
      },
    },
    delete_address: {
      where: {
        type: "address_bool_exp",
        array: false,
        arrayRequired: false,
        required: true,
      },
    },
    delete_address_by_pk: {
      id: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: true,
      },
    },
    delete_order: {
      where: {
        type: "order_bool_exp",
        array: false,
        arrayRequired: false,
        required: true,
      },
    },
    delete_order_by_pk: {
      id: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: true,
      },
    },
    delete_order_product: {
      where: {
        type: "order_product_bool_exp",
        array: false,
        arrayRequired: false,
        required: true,
      },
    },
    delete_order_product_by_pk: {
      id: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: true,
      },
    },
    delete_product: {
      where: {
        type: "product_bool_exp",
        array: false,
        arrayRequired: false,
        required: true,
      },
    },
    delete_product_by_pk: {
      id: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: true,
      },
    },
    delete_product_category_enum: {
      where: {
        type: "product_category_enum_bool_exp",
        array: false,
        arrayRequired: false,
        required: true,
      },
    },
    delete_product_category_enum_by_pk: {
      name: {
        type: "String",
        array: false,
        arrayRequired: false,
        required: true,
      },
    },
    delete_product_review: {
      where: {
        type: "product_review_bool_exp",
        array: false,
        arrayRequired: false,
        required: true,
      },
    },
    delete_product_review_by_pk: {
      id: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: true,
      },
    },
    delete_site_admin: {
      where: {
        type: "site_admin_bool_exp",
        array: false,
        arrayRequired: false,
        required: true,
      },
    },
    delete_site_admin_by_pk: {
      id: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: true,
      },
    },
    delete_user: {
      where: {
        type: "user_bool_exp",
        array: false,
        arrayRequired: false,
        required: true,
      },
    },
    delete_user_by_pk: {
      id: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: true,
      },
    },
    insert_address: {
      objects: {
        type: "address_insert_input",
        array: true,
        arrayRequired: true,
        required: true,
      },
      on_conflict: {
        type: "address_on_conflict",
        array: false,
        arrayRequired: false,
        required: false,
      },
    },
    insert_address_one: {
      object: {
        type: "address_insert_input",
        array: false,
        arrayRequired: false,
        required: true,
      },
      on_conflict: {
        type: "address_on_conflict",
        array: false,
        arrayRequired: false,
        required: false,
      },
    },
    insert_order: {
      objects: {
        type: "order_insert_input",
        array: true,
        arrayRequired: true,
        required: true,
      },
      on_conflict: {
        type: "order_on_conflict",
        array: false,
        arrayRequired: false,
        required: false,
      },
    },
    insert_order_one: {
      object: {
        type: "order_insert_input",
        array: false,
        arrayRequired: false,
        required: true,
      },
      on_conflict: {
        type: "order_on_conflict",
        array: false,
        arrayRequired: false,
        required: false,
      },
    },
    insert_order_product: {
      objects: {
        type: "order_product_insert_input",
        array: true,
        arrayRequired: true,
        required: true,
      },
      on_conflict: {
        type: "order_product_on_conflict",
        array: false,
        arrayRequired: false,
        required: false,
      },
    },
    insert_order_product_one: {
      object: {
        type: "order_product_insert_input",
        array: false,
        arrayRequired: false,
        required: true,
      },
      on_conflict: {
        type: "order_product_on_conflict",
        array: false,
        arrayRequired: false,
        required: false,
      },
    },
    insert_product: {
      objects: {
        type: "product_insert_input",
        array: true,
        arrayRequired: true,
        required: true,
      },
      on_conflict: {
        type: "product_on_conflict",
        array: false,
        arrayRequired: false,
        required: false,
      },
    },
    insert_product_category_enum: {
      objects: {
        type: "product_category_enum_insert_input",
        array: true,
        arrayRequired: true,
        required: true,
      },
      on_conflict: {
        type: "product_category_enum_on_conflict",
        array: false,
        arrayRequired: false,
        required: false,
      },
    },
    insert_product_category_enum_one: {
      object: {
        type: "product_category_enum_insert_input",
        array: false,
        arrayRequired: false,
        required: true,
      },
      on_conflict: {
        type: "product_category_enum_on_conflict",
        array: false,
        arrayRequired: false,
        required: false,
      },
    },
    insert_product_one: {
      object: {
        type: "product_insert_input",
        array: false,
        arrayRequired: false,
        required: true,
      },
      on_conflict: {
        type: "product_on_conflict",
        array: false,
        arrayRequired: false,
        required: false,
      },
    },
    insert_product_review: {
      objects: {
        type: "product_review_insert_input",
        array: true,
        arrayRequired: true,
        required: true,
      },
      on_conflict: {
        type: "product_review_on_conflict",
        array: false,
        arrayRequired: false,
        required: false,
      },
    },
    insert_product_review_one: {
      object: {
        type: "product_review_insert_input",
        array: false,
        arrayRequired: false,
        required: true,
      },
      on_conflict: {
        type: "product_review_on_conflict",
        array: false,
        arrayRequired: false,
        required: false,
      },
    },
    insert_site_admin: {
      objects: {
        type: "site_admin_insert_input",
        array: true,
        arrayRequired: true,
        required: true,
      },
      on_conflict: {
        type: "site_admin_on_conflict",
        array: false,
        arrayRequired: false,
        required: false,
      },
    },
    insert_site_admin_one: {
      object: {
        type: "site_admin_insert_input",
        array: false,
        arrayRequired: false,
        required: true,
      },
      on_conflict: {
        type: "site_admin_on_conflict",
        array: false,
        arrayRequired: false,
        required: false,
      },
    },
    insert_user: {
      objects: {
        type: "user_insert_input",
        array: true,
        arrayRequired: true,
        required: true,
      },
      on_conflict: {
        type: "user_on_conflict",
        array: false,
        arrayRequired: false,
        required: false,
      },
    },
    insert_user_one: {
      object: {
        type: "user_insert_input",
        array: false,
        arrayRequired: false,
        required: true,
      },
      on_conflict: {
        type: "user_on_conflict",
        array: false,
        arrayRequired: false,
        required: false,
      },
    },
    login: {
      params: {
        type: "LoginInput",
        array: false,
        arrayRequired: false,
        required: true,
      },
    },
    signup: {
      params: {
        type: "SignupInput",
        array: false,
        arrayRequired: false,
        required: true,
      },
    },
    update_address: {
      _inc: {
        type: "address_inc_input",
        array: false,
        arrayRequired: false,
        required: false,
      },
      _set: {
        type: "address_set_input",
        array: false,
        arrayRequired: false,
        required: false,
      },
      where: {
        type: "address_bool_exp",
        array: false,
        arrayRequired: false,
        required: true,
      },
    },
    update_address_by_pk: {
      _inc: {
        type: "address_inc_input",
        array: false,
        arrayRequired: false,
        required: false,
      },
      _set: {
        type: "address_set_input",
        array: false,
        arrayRequired: false,
        required: false,
      },
      pk_columns: {
        type: "address_pk_columns_input",
        array: false,
        arrayRequired: false,
        required: true,
      },
    },
    update_order: {
      _inc: {
        type: "order_inc_input",
        array: false,
        arrayRequired: false,
        required: false,
      },
      _set: {
        type: "order_set_input",
        array: false,
        arrayRequired: false,
        required: false,
      },
      where: {
        type: "order_bool_exp",
        array: false,
        arrayRequired: false,
        required: true,
      },
    },
    update_order_by_pk: {
      _inc: {
        type: "order_inc_input",
        array: false,
        arrayRequired: false,
        required: false,
      },
      _set: {
        type: "order_set_input",
        array: false,
        arrayRequired: false,
        required: false,
      },
      pk_columns: {
        type: "order_pk_columns_input",
        array: false,
        arrayRequired: false,
        required: true,
      },
    },
    update_order_product: {
      _inc: {
        type: "order_product_inc_input",
        array: false,
        arrayRequired: false,
        required: false,
      },
      _set: {
        type: "order_product_set_input",
        array: false,
        arrayRequired: false,
        required: false,
      },
      where: {
        type: "order_product_bool_exp",
        array: false,
        arrayRequired: false,
        required: true,
      },
    },
    update_order_product_by_pk: {
      _inc: {
        type: "order_product_inc_input",
        array: false,
        arrayRequired: false,
        required: false,
      },
      _set: {
        type: "order_product_set_input",
        array: false,
        arrayRequired: false,
        required: false,
      },
      pk_columns: {
        type: "order_product_pk_columns_input",
        array: false,
        arrayRequired: false,
        required: true,
      },
    },
    update_product: {
      _append: {
        type: "product_append_input",
        array: false,
        arrayRequired: false,
        required: false,
      },
      _delete_at_path: {
        type: "product_delete_at_path_input",
        array: false,
        arrayRequired: false,
        required: false,
      },
      _delete_elem: {
        type: "product_delete_elem_input",
        array: false,
        arrayRequired: false,
        required: false,
      },
      _delete_key: {
        type: "product_delete_key_input",
        array: false,
        arrayRequired: false,
        required: false,
      },
      _inc: {
        type: "product_inc_input",
        array: false,
        arrayRequired: false,
        required: false,
      },
      _prepend: {
        type: "product_prepend_input",
        array: false,
        arrayRequired: false,
        required: false,
      },
      _set: {
        type: "product_set_input",
        array: false,
        arrayRequired: false,
        required: false,
      },
      where: {
        type: "product_bool_exp",
        array: false,
        arrayRequired: false,
        required: true,
      },
    },
    update_product_by_pk: {
      _append: {
        type: "product_append_input",
        array: false,
        arrayRequired: false,
        required: false,
      },
      _delete_at_path: {
        type: "product_delete_at_path_input",
        array: false,
        arrayRequired: false,
        required: false,
      },
      _delete_elem: {
        type: "product_delete_elem_input",
        array: false,
        arrayRequired: false,
        required: false,
      },
      _delete_key: {
        type: "product_delete_key_input",
        array: false,
        arrayRequired: false,
        required: false,
      },
      _inc: {
        type: "product_inc_input",
        array: false,
        arrayRequired: false,
        required: false,
      },
      _prepend: {
        type: "product_prepend_input",
        array: false,
        arrayRequired: false,
        required: false,
      },
      _set: {
        type: "product_set_input",
        array: false,
        arrayRequired: false,
        required: false,
      },
      pk_columns: {
        type: "product_pk_columns_input",
        array: false,
        arrayRequired: false,
        required: true,
      },
    },
    update_product_category_enum: {
      _set: {
        type: "product_category_enum_set_input",
        array: false,
        arrayRequired: false,
        required: false,
      },
      where: {
        type: "product_category_enum_bool_exp",
        array: false,
        arrayRequired: false,
        required: true,
      },
    },
    update_product_category_enum_by_pk: {
      _set: {
        type: "product_category_enum_set_input",
        array: false,
        arrayRequired: false,
        required: false,
      },
      pk_columns: {
        type: "product_category_enum_pk_columns_input",
        array: false,
        arrayRequired: false,
        required: true,
      },
    },
    update_product_review: {
      _inc: {
        type: "product_review_inc_input",
        array: false,
        arrayRequired: false,
        required: false,
      },
      _set: {
        type: "product_review_set_input",
        array: false,
        arrayRequired: false,
        required: false,
      },
      where: {
        type: "product_review_bool_exp",
        array: false,
        arrayRequired: false,
        required: true,
      },
    },
    update_product_review_by_pk: {
      _inc: {
        type: "product_review_inc_input",
        array: false,
        arrayRequired: false,
        required: false,
      },
      _set: {
        type: "product_review_set_input",
        array: false,
        arrayRequired: false,
        required: false,
      },
      pk_columns: {
        type: "product_review_pk_columns_input",
        array: false,
        arrayRequired: false,
        required: true,
      },
    },
    update_site_admin: {
      _inc: {
        type: "site_admin_inc_input",
        array: false,
        arrayRequired: false,
        required: false,
      },
      _set: {
        type: "site_admin_set_input",
        array: false,
        arrayRequired: false,
        required: false,
      },
      where: {
        type: "site_admin_bool_exp",
        array: false,
        arrayRequired: false,
        required: true,
      },
    },
    update_site_admin_by_pk: {
      _inc: {
        type: "site_admin_inc_input",
        array: false,
        arrayRequired: false,
        required: false,
      },
      _set: {
        type: "site_admin_set_input",
        array: false,
        arrayRequired: false,
        required: false,
      },
      pk_columns: {
        type: "site_admin_pk_columns_input",
        array: false,
        arrayRequired: false,
        required: true,
      },
    },
    update_user: {
      _inc: {
        type: "user_inc_input",
        array: false,
        arrayRequired: false,
        required: false,
      },
      _set: {
        type: "user_set_input",
        array: false,
        arrayRequired: false,
        required: false,
      },
      where: {
        type: "user_bool_exp",
        array: false,
        arrayRequired: false,
        required: true,
      },
    },
    update_user_by_pk: {
      _inc: {
        type: "user_inc_input",
        array: false,
        arrayRequired: false,
        required: false,
      },
      _set: {
        type: "user_set_input",
        array: false,
        arrayRequired: false,
        required: false,
      },
      pk_columns: {
        type: "user_pk_columns_input",
        array: false,
        arrayRequired: false,
        required: true,
      },
    },
  },
  numeric: "String",
  numeric_comparison_exp: {
    _eq: {
      type: "numeric",
      array: false,
      arrayRequired: false,
      required: false,
    },
    _gt: {
      type: "numeric",
      array: false,
      arrayRequired: false,
      required: false,
    },
    _gte: {
      type: "numeric",
      array: false,
      arrayRequired: false,
      required: false,
    },
    _in: {
      type: "numeric",
      array: true,
      arrayRequired: false,
      required: true,
    },
    _is_null: {
      type: "Boolean",
      array: false,
      arrayRequired: false,
      required: false,
    },
    _lt: {
      type: "numeric",
      array: false,
      arrayRequired: false,
      required: false,
    },
    _lte: {
      type: "numeric",
      array: false,
      arrayRequired: false,
      required: false,
    },
    _neq: {
      type: "numeric",
      array: false,
      arrayRequired: false,
      required: false,
    },
    _nin: {
      type: "numeric",
      array: true,
      arrayRequired: false,
      required: true,
    },
  },
  order: {
    products: {
      distinct_on: {
        type: "order_product_select_column",
        array: true,
        arrayRequired: false,
        required: true,
      },
      limit: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false,
      },
      offset: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false,
      },
      order_by: {
        type: "order_product_order_by",
        array: true,
        arrayRequired: false,
        required: true,
      },
      where: {
        type: "order_product_bool_exp",
        array: false,
        arrayRequired: false,
        required: false,
      },
    },
    products_aggregate: {
      distinct_on: {
        type: "order_product_select_column",
        array: true,
        arrayRequired: false,
        required: true,
      },
      limit: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false,
      },
      offset: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false,
      },
      order_by: {
        type: "order_product_order_by",
        array: true,
        arrayRequired: false,
        required: true,
      },
      where: {
        type: "order_product_bool_exp",
        array: false,
        arrayRequired: false,
        required: false,
      },
    },
  },
  order_aggregate_fields: {
    count: {
      columns: {
        type: "order_select_column",
        array: true,
        arrayRequired: false,
        required: true,
      },
      distinct: {
        type: "Boolean",
        array: false,
        arrayRequired: false,
        required: false,
      },
    },
  },
  order_aggregate_order_by: {
    avg: {
      type: "order_avg_order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    count: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    max: {
      type: "order_max_order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    min: {
      type: "order_min_order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    stddev: {
      type: "order_stddev_order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    stddev_pop: {
      type: "order_stddev_pop_order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    stddev_samp: {
      type: "order_stddev_samp_order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    sum: {
      type: "order_sum_order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    var_pop: {
      type: "order_var_pop_order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    var_samp: {
      type: "order_var_samp_order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    variance: {
      type: "order_variance_order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  order_arr_rel_insert_input: {
    data: {
      type: "order_insert_input",
      array: true,
      arrayRequired: true,
      required: true,
    },
    on_conflict: {
      type: "order_on_conflict",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  order_avg_order_by: {
    billing_address_id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    shipping_address_id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    user_id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  order_bool_exp: {
    _and: {
      type: "order_bool_exp",
      array: true,
      arrayRequired: false,
      required: false,
    },
    _not: {
      type: "order_bool_exp",
      array: false,
      arrayRequired: false,
      required: false,
    },
    _or: {
      type: "order_bool_exp",
      array: true,
      arrayRequired: false,
      required: false,
    },
    billing_address: {
      type: "address_bool_exp",
      array: false,
      arrayRequired: false,
      required: false,
    },
    billing_address_id: {
      type: "Int_comparison_exp",
      array: false,
      arrayRequired: false,
      required: false,
    },
    created_at: {
      type: "timestamptz_comparison_exp",
      array: false,
      arrayRequired: false,
      required: false,
    },
    id: {
      type: "Int_comparison_exp",
      array: false,
      arrayRequired: false,
      required: false,
    },
    is_shipped: {
      type: "Boolean_comparison_exp",
      array: false,
      arrayRequired: false,
      required: false,
    },
    products: {
      type: "order_product_bool_exp",
      array: false,
      arrayRequired: false,
      required: false,
    },
    shipping_address: {
      type: "address_bool_exp",
      array: false,
      arrayRequired: false,
      required: false,
    },
    shipping_address_id: {
      type: "Int_comparison_exp",
      array: false,
      arrayRequired: false,
      required: false,
    },
    updated_at: {
      type: "timestamptz_comparison_exp",
      array: false,
      arrayRequired: false,
      required: false,
    },
    user: {
      type: "user_bool_exp",
      array: false,
      arrayRequired: false,
      required: false,
    },
    user_id: {
      type: "Int_comparison_exp",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  order_by: "enum",
  order_constraint: "enum",
  order_inc_input: {
    billing_address_id: {
      type: "Int",
      array: false,
      arrayRequired: false,
      required: false,
    },
    id: {
      type: "Int",
      array: false,
      arrayRequired: false,
      required: false,
    },
    shipping_address_id: {
      type: "Int",
      array: false,
      arrayRequired: false,
      required: false,
    },
    user_id: {
      type: "Int",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  order_insert_input: {
    billing_address: {
      type: "address_obj_rel_insert_input",
      array: false,
      arrayRequired: false,
      required: false,
    },
    billing_address_id: {
      type: "Int",
      array: false,
      arrayRequired: false,
      required: false,
    },
    created_at: {
      type: "timestamptz",
      array: false,
      arrayRequired: false,
      required: false,
    },
    id: {
      type: "Int",
      array: false,
      arrayRequired: false,
      required: false,
    },
    is_shipped: {
      type: "Boolean",
      array: false,
      arrayRequired: false,
      required: false,
    },
    products: {
      type: "order_product_arr_rel_insert_input",
      array: false,
      arrayRequired: false,
      required: false,
    },
    shipping_address: {
      type: "address_obj_rel_insert_input",
      array: false,
      arrayRequired: false,
      required: false,
    },
    shipping_address_id: {
      type: "Int",
      array: false,
      arrayRequired: false,
      required: false,
    },
    updated_at: {
      type: "timestamptz",
      array: false,
      arrayRequired: false,
      required: false,
    },
    user: {
      type: "user_obj_rel_insert_input",
      array: false,
      arrayRequired: false,
      required: false,
    },
    user_id: {
      type: "Int",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  order_max_order_by: {
    billing_address_id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    created_at: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    shipping_address_id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    updated_at: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    user_id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  order_min_order_by: {
    billing_address_id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    created_at: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    shipping_address_id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    updated_at: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    user_id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  order_obj_rel_insert_input: {
    data: {
      type: "order_insert_input",
      array: false,
      arrayRequired: false,
      required: true,
    },
    on_conflict: {
      type: "order_on_conflict",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  order_on_conflict: {
    constraint: {
      type: "order_constraint",
      array: false,
      arrayRequired: false,
      required: true,
    },
    update_columns: {
      type: "order_update_column",
      array: true,
      arrayRequired: true,
      required: true,
    },
    where: {
      type: "order_bool_exp",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  order_order_by: {
    billing_address: {
      type: "address_order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    billing_address_id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    created_at: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    is_shipped: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    products_aggregate: {
      type: "order_product_aggregate_order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    shipping_address: {
      type: "address_order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    shipping_address_id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    updated_at: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    user: {
      type: "user_order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    user_id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  order_pk_columns_input: {
    id: {
      type: "Int",
      array: false,
      arrayRequired: false,
      required: true,
    },
  },
  order_product_aggregate_fields: {
    count: {
      columns: {
        type: "order_product_select_column",
        array: true,
        arrayRequired: false,
        required: true,
      },
      distinct: {
        type: "Boolean",
        array: false,
        arrayRequired: false,
        required: false,
      },
    },
  },
  order_product_aggregate_order_by: {
    avg: {
      type: "order_product_avg_order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    count: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    max: {
      type: "order_product_max_order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    min: {
      type: "order_product_min_order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    stddev: {
      type: "order_product_stddev_order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    stddev_pop: {
      type: "order_product_stddev_pop_order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    stddev_samp: {
      type: "order_product_stddev_samp_order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    sum: {
      type: "order_product_sum_order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    var_pop: {
      type: "order_product_var_pop_order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    var_samp: {
      type: "order_product_var_samp_order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    variance: {
      type: "order_product_variance_order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  order_product_arr_rel_insert_input: {
    data: {
      type: "order_product_insert_input",
      array: true,
      arrayRequired: true,
      required: true,
    },
    on_conflict: {
      type: "order_product_on_conflict",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  order_product_avg_order_by: {
    id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    order_id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    product_id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    quantity: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  order_product_bool_exp: {
    _and: {
      type: "order_product_bool_exp",
      array: true,
      arrayRequired: false,
      required: false,
    },
    _not: {
      type: "order_product_bool_exp",
      array: false,
      arrayRequired: false,
      required: false,
    },
    _or: {
      type: "order_product_bool_exp",
      array: true,
      arrayRequired: false,
      required: false,
    },
    created_at: {
      type: "timestamptz_comparison_exp",
      array: false,
      arrayRequired: false,
      required: false,
    },
    id: {
      type: "Int_comparison_exp",
      array: false,
      arrayRequired: false,
      required: false,
    },
    order: {
      type: "order_bool_exp",
      array: false,
      arrayRequired: false,
      required: false,
    },
    order_id: {
      type: "Int_comparison_exp",
      array: false,
      arrayRequired: false,
      required: false,
    },
    product: {
      type: "product_bool_exp",
      array: false,
      arrayRequired: false,
      required: false,
    },
    product_id: {
      type: "Int_comparison_exp",
      array: false,
      arrayRequired: false,
      required: false,
    },
    quantity: {
      type: "Int_comparison_exp",
      array: false,
      arrayRequired: false,
      required: false,
    },
    updated_at: {
      type: "timestamptz_comparison_exp",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  order_product_constraint: "enum",
  order_product_inc_input: {
    id: {
      type: "Int",
      array: false,
      arrayRequired: false,
      required: false,
    },
    order_id: {
      type: "Int",
      array: false,
      arrayRequired: false,
      required: false,
    },
    product_id: {
      type: "Int",
      array: false,
      arrayRequired: false,
      required: false,
    },
    quantity: {
      type: "Int",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  order_product_insert_input: {
    created_at: {
      type: "timestamptz",
      array: false,
      arrayRequired: false,
      required: false,
    },
    id: {
      type: "Int",
      array: false,
      arrayRequired: false,
      required: false,
    },
    order: {
      type: "order_obj_rel_insert_input",
      array: false,
      arrayRequired: false,
      required: false,
    },
    order_id: {
      type: "Int",
      array: false,
      arrayRequired: false,
      required: false,
    },
    product: {
      type: "product_obj_rel_insert_input",
      array: false,
      arrayRequired: false,
      required: false,
    },
    product_id: {
      type: "Int",
      array: false,
      arrayRequired: false,
      required: false,
    },
    quantity: {
      type: "Int",
      array: false,
      arrayRequired: false,
      required: false,
    },
    updated_at: {
      type: "timestamptz",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  order_product_max_order_by: {
    created_at: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    order_id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    product_id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    quantity: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    updated_at: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  order_product_min_order_by: {
    created_at: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    order_id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    product_id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    quantity: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    updated_at: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  order_product_obj_rel_insert_input: {
    data: {
      type: "order_product_insert_input",
      array: false,
      arrayRequired: false,
      required: true,
    },
    on_conflict: {
      type: "order_product_on_conflict",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  order_product_on_conflict: {
    constraint: {
      type: "order_product_constraint",
      array: false,
      arrayRequired: false,
      required: true,
    },
    update_columns: {
      type: "order_product_update_column",
      array: true,
      arrayRequired: true,
      required: true,
    },
    where: {
      type: "order_product_bool_exp",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  order_product_order_by: {
    created_at: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    order: {
      type: "order_order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    order_id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    product: {
      type: "product_order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    product_id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    quantity: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    updated_at: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  order_product_pk_columns_input: {
    id: {
      type: "Int",
      array: false,
      arrayRequired: false,
      required: true,
    },
  },
  order_product_select_column: "enum",
  order_product_set_input: {
    created_at: {
      type: "timestamptz",
      array: false,
      arrayRequired: false,
      required: false,
    },
    id: {
      type: "Int",
      array: false,
      arrayRequired: false,
      required: false,
    },
    order_id: {
      type: "Int",
      array: false,
      arrayRequired: false,
      required: false,
    },
    product_id: {
      type: "Int",
      array: false,
      arrayRequired: false,
      required: false,
    },
    quantity: {
      type: "Int",
      array: false,
      arrayRequired: false,
      required: false,
    },
    updated_at: {
      type: "timestamptz",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  order_product_stddev_order_by: {
    id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    order_id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    product_id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    quantity: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  order_product_stddev_pop_order_by: {
    id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    order_id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    product_id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    quantity: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  order_product_stddev_samp_order_by: {
    id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    order_id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    product_id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    quantity: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  order_product_sum_order_by: {
    id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    order_id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    product_id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    quantity: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  order_product_update_column: "enum",
  order_product_var_pop_order_by: {
    id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    order_id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    product_id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    quantity: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  order_product_var_samp_order_by: {
    id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    order_id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    product_id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    quantity: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  order_product_variance_order_by: {
    id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    order_id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    product_id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    quantity: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  order_select_column: "enum",
  order_set_input: {
    billing_address_id: {
      type: "Int",
      array: false,
      arrayRequired: false,
      required: false,
    },
    created_at: {
      type: "timestamptz",
      array: false,
      arrayRequired: false,
      required: false,
    },
    id: {
      type: "Int",
      array: false,
      arrayRequired: false,
      required: false,
    },
    is_shipped: {
      type: "Boolean",
      array: false,
      arrayRequired: false,
      required: false,
    },
    shipping_address_id: {
      type: "Int",
      array: false,
      arrayRequired: false,
      required: false,
    },
    updated_at: {
      type: "timestamptz",
      array: false,
      arrayRequired: false,
      required: false,
    },
    user_id: {
      type: "Int",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  order_stddev_order_by: {
    billing_address_id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    shipping_address_id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    user_id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  order_stddev_pop_order_by: {
    billing_address_id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    shipping_address_id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    user_id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  order_stddev_samp_order_by: {
    billing_address_id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    shipping_address_id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    user_id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  order_sum_order_by: {
    billing_address_id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    shipping_address_id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    user_id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  order_update_column: "enum",
  order_var_pop_order_by: {
    billing_address_id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    shipping_address_id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    user_id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  order_var_samp_order_by: {
    billing_address_id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    shipping_address_id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    user_id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  order_variance_order_by: {
    billing_address_id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    shipping_address_id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    user_id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  product: {
    image_urls: {
      path: {
        type: "String",
        array: false,
        arrayRequired: false,
        required: false,
      },
    },
    orders: {
      distinct_on: {
        type: "order_product_select_column",
        array: true,
        arrayRequired: false,
        required: true,
      },
      limit: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false,
      },
      offset: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false,
      },
      order_by: {
        type: "order_product_order_by",
        array: true,
        arrayRequired: false,
        required: true,
      },
      where: {
        type: "order_product_bool_exp",
        array: false,
        arrayRequired: false,
        required: false,
      },
    },
    orders_aggregate: {
      distinct_on: {
        type: "order_product_select_column",
        array: true,
        arrayRequired: false,
        required: true,
      },
      limit: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false,
      },
      offset: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false,
      },
      order_by: {
        type: "order_product_order_by",
        array: true,
        arrayRequired: false,
        required: true,
      },
      where: {
        type: "order_product_bool_exp",
        array: false,
        arrayRequired: false,
        required: false,
      },
    },
    product_reviews: {
      distinct_on: {
        type: "product_review_select_column",
        array: true,
        arrayRequired: false,
        required: true,
      },
      limit: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false,
      },
      offset: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false,
      },
      order_by: {
        type: "product_review_order_by",
        array: true,
        arrayRequired: false,
        required: true,
      },
      where: {
        type: "product_review_bool_exp",
        array: false,
        arrayRequired: false,
        required: false,
      },
    },
    product_reviews_aggregate: {
      distinct_on: {
        type: "product_review_select_column",
        array: true,
        arrayRequired: false,
        required: true,
      },
      limit: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false,
      },
      offset: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false,
      },
      order_by: {
        type: "product_review_order_by",
        array: true,
        arrayRequired: false,
        required: true,
      },
      where: {
        type: "product_review_bool_exp",
        array: false,
        arrayRequired: false,
        required: false,
      },
    },
  },
  product_aggregate_fields: {
    count: {
      columns: {
        type: "product_select_column",
        array: true,
        arrayRequired: false,
        required: true,
      },
      distinct: {
        type: "Boolean",
        array: false,
        arrayRequired: false,
        required: false,
      },
    },
  },
  product_aggregate_order_by: {
    avg: {
      type: "product_avg_order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    count: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    max: {
      type: "product_max_order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    min: {
      type: "product_min_order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    stddev: {
      type: "product_stddev_order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    stddev_pop: {
      type: "product_stddev_pop_order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    stddev_samp: {
      type: "product_stddev_samp_order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    sum: {
      type: "product_sum_order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    var_pop: {
      type: "product_var_pop_order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    var_samp: {
      type: "product_var_samp_order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    variance: {
      type: "product_variance_order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  product_append_input: {
    image_urls: {
      type: "jsonb",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  product_arr_rel_insert_input: {
    data: {
      type: "product_insert_input",
      array: true,
      arrayRequired: true,
      required: true,
    },
    on_conflict: {
      type: "product_on_conflict",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  product_avg_order_by: {
    id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    price: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  product_bool_exp: {
    _and: {
      type: "product_bool_exp",
      array: true,
      arrayRequired: false,
      required: false,
    },
    _not: {
      type: "product_bool_exp",
      array: false,
      arrayRequired: false,
      required: false,
    },
    _or: {
      type: "product_bool_exp",
      array: true,
      arrayRequired: false,
      required: false,
    },
    brand: {
      type: "String_comparison_exp",
      array: false,
      arrayRequired: false,
      required: false,
    },
    category: {
      type: "product_category_enum_bool_exp",
      array: false,
      arrayRequired: false,
      required: false,
    },
    category_display_name: {
      type: "String_comparison_exp",
      array: false,
      arrayRequired: false,
      required: false,
    },
    created_at: {
      type: "timestamptz_comparison_exp",
      array: false,
      arrayRequired: false,
      required: false,
    },
    description: {
      type: "String_comparison_exp",
      array: false,
      arrayRequired: false,
      required: false,
    },
    id: {
      type: "Int_comparison_exp",
      array: false,
      arrayRequired: false,
      required: false,
    },
    image_urls: {
      type: "jsonb_comparison_exp",
      array: false,
      arrayRequired: false,
      required: false,
    },
    name: {
      type: "String_comparison_exp",
      array: false,
      arrayRequired: false,
      required: false,
    },
    orders: {
      type: "order_product_bool_exp",
      array: false,
      arrayRequired: false,
      required: false,
    },
    price: {
      type: "numeric_comparison_exp",
      array: false,
      arrayRequired: false,
      required: false,
    },
    product_reviews: {
      type: "product_review_bool_exp",
      array: false,
      arrayRequired: false,
      required: false,
    },
    updated_at: {
      type: "timestamptz_comparison_exp",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  product_category_enum: {
    products: {
      distinct_on: {
        type: "product_select_column",
        array: true,
        arrayRequired: false,
        required: true,
      },
      limit: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false,
      },
      offset: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false,
      },
      order_by: {
        type: "product_order_by",
        array: true,
        arrayRequired: false,
        required: true,
      },
      where: {
        type: "product_bool_exp",
        array: false,
        arrayRequired: false,
        required: false,
      },
    },
    products_aggregate: {
      distinct_on: {
        type: "product_select_column",
        array: true,
        arrayRequired: false,
        required: true,
      },
      limit: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false,
      },
      offset: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false,
      },
      order_by: {
        type: "product_order_by",
        array: true,
        arrayRequired: false,
        required: true,
      },
      where: {
        type: "product_bool_exp",
        array: false,
        arrayRequired: false,
        required: false,
      },
    },
  },
  product_category_enum_aggregate_fields: {
    count: {
      columns: {
        type: "product_category_enum_select_column",
        array: true,
        arrayRequired: false,
        required: true,
      },
      distinct: {
        type: "Boolean",
        array: false,
        arrayRequired: false,
        required: false,
      },
    },
  },
  product_category_enum_aggregate_order_by: {
    count: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    max: {
      type: "product_category_enum_max_order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    min: {
      type: "product_category_enum_min_order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  product_category_enum_arr_rel_insert_input: {
    data: {
      type: "product_category_enum_insert_input",
      array: true,
      arrayRequired: true,
      required: true,
    },
    on_conflict: {
      type: "product_category_enum_on_conflict",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  product_category_enum_bool_exp: {
    _and: {
      type: "product_category_enum_bool_exp",
      array: true,
      arrayRequired: false,
      required: false,
    },
    _not: {
      type: "product_category_enum_bool_exp",
      array: false,
      arrayRequired: false,
      required: false,
    },
    _or: {
      type: "product_category_enum_bool_exp",
      array: true,
      arrayRequired: false,
      required: false,
    },
    display_name: {
      type: "String_comparison_exp",
      array: false,
      arrayRequired: false,
      required: false,
    },
    name: {
      type: "String_comparison_exp",
      array: false,
      arrayRequired: false,
      required: false,
    },
    products: {
      type: "product_bool_exp",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  product_category_enum_constraint: "enum",
  product_category_enum_insert_input: {
    display_name: {
      type: "String",
      array: false,
      arrayRequired: false,
      required: false,
    },
    name: {
      type: "String",
      array: false,
      arrayRequired: false,
      required: false,
    },
    products: {
      type: "product_arr_rel_insert_input",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  product_category_enum_max_order_by: {
    display_name: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    name: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  product_category_enum_min_order_by: {
    display_name: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    name: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  product_category_enum_obj_rel_insert_input: {
    data: {
      type: "product_category_enum_insert_input",
      array: false,
      arrayRequired: false,
      required: true,
    },
    on_conflict: {
      type: "product_category_enum_on_conflict",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  product_category_enum_on_conflict: {
    constraint: {
      type: "product_category_enum_constraint",
      array: false,
      arrayRequired: false,
      required: true,
    },
    update_columns: {
      type: "product_category_enum_update_column",
      array: true,
      arrayRequired: true,
      required: true,
    },
    where: {
      type: "product_category_enum_bool_exp",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  product_category_enum_order_by: {
    display_name: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    name: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    products_aggregate: {
      type: "product_aggregate_order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  product_category_enum_pk_columns_input: {
    name: {
      type: "String",
      array: false,
      arrayRequired: false,
      required: true,
    },
  },
  product_category_enum_select_column: "enum",
  product_category_enum_set_input: {
    display_name: {
      type: "String",
      array: false,
      arrayRequired: false,
      required: false,
    },
    name: {
      type: "String",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  product_category_enum_update_column: "enum",
  product_constraint: "enum",
  product_delete_at_path_input: {
    image_urls: {
      type: "String",
      array: true,
      arrayRequired: false,
      required: false,
    },
  },
  product_delete_elem_input: {
    image_urls: {
      type: "Int",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  product_delete_key_input: {
    image_urls: {
      type: "String",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  product_inc_input: {
    id: {
      type: "Int",
      array: false,
      arrayRequired: false,
      required: false,
    },
    price: {
      type: "numeric",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  product_insert_input: {
    brand: {
      type: "String",
      array: false,
      arrayRequired: false,
      required: false,
    },
    category: {
      type: "product_category_enum_obj_rel_insert_input",
      array: false,
      arrayRequired: false,
      required: false,
    },
    category_display_name: {
      type: "String",
      array: false,
      arrayRequired: false,
      required: false,
    },
    created_at: {
      type: "timestamptz",
      array: false,
      arrayRequired: false,
      required: false,
    },
    description: {
      type: "String",
      array: false,
      arrayRequired: false,
      required: false,
    },
    id: {
      type: "Int",
      array: false,
      arrayRequired: false,
      required: false,
    },
    image_urls: {
      type: "jsonb",
      array: false,
      arrayRequired: false,
      required: false,
    },
    name: {
      type: "String",
      array: false,
      arrayRequired: false,
      required: false,
    },
    orders: {
      type: "order_product_arr_rel_insert_input",
      array: false,
      arrayRequired: false,
      required: false,
    },
    price: {
      type: "numeric",
      array: false,
      arrayRequired: false,
      required: false,
    },
    product_reviews: {
      type: "product_review_arr_rel_insert_input",
      array: false,
      arrayRequired: false,
      required: false,
    },
    updated_at: {
      type: "timestamptz",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  product_max_order_by: {
    brand: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    category_display_name: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    created_at: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    description: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    name: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    price: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    updated_at: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  product_min_order_by: {
    brand: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    category_display_name: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    created_at: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    description: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    name: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    price: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    updated_at: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  product_obj_rel_insert_input: {
    data: {
      type: "product_insert_input",
      array: false,
      arrayRequired: false,
      required: true,
    },
    on_conflict: {
      type: "product_on_conflict",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  product_on_conflict: {
    constraint: {
      type: "product_constraint",
      array: false,
      arrayRequired: false,
      required: true,
    },
    update_columns: {
      type: "product_update_column",
      array: true,
      arrayRequired: true,
      required: true,
    },
    where: {
      type: "product_bool_exp",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  product_order_by: {
    brand: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    category: {
      type: "product_category_enum_order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    category_display_name: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    created_at: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    description: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    image_urls: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    name: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    orders_aggregate: {
      type: "order_product_aggregate_order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    price: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    product_reviews_aggregate: {
      type: "product_review_aggregate_order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    updated_at: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  product_pk_columns_input: {
    id: {
      type: "Int",
      array: false,
      arrayRequired: false,
      required: true,
    },
  },
  product_prepend_input: {
    image_urls: {
      type: "jsonb",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  product_review_aggregate_fields: {
    count: {
      columns: {
        type: "product_review_select_column",
        array: true,
        arrayRequired: false,
        required: true,
      },
      distinct: {
        type: "Boolean",
        array: false,
        arrayRequired: false,
        required: false,
      },
    },
  },
  product_review_aggregate_order_by: {
    avg: {
      type: "product_review_avg_order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    count: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    max: {
      type: "product_review_max_order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    min: {
      type: "product_review_min_order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    stddev: {
      type: "product_review_stddev_order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    stddev_pop: {
      type: "product_review_stddev_pop_order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    stddev_samp: {
      type: "product_review_stddev_samp_order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    sum: {
      type: "product_review_sum_order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    var_pop: {
      type: "product_review_var_pop_order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    var_samp: {
      type: "product_review_var_samp_order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    variance: {
      type: "product_review_variance_order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  product_review_arr_rel_insert_input: {
    data: {
      type: "product_review_insert_input",
      array: true,
      arrayRequired: true,
      required: true,
    },
    on_conflict: {
      type: "product_review_on_conflict",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  product_review_avg_order_by: {
    id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    product_id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    rating: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    user_id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  product_review_bool_exp: {
    _and: {
      type: "product_review_bool_exp",
      array: true,
      arrayRequired: false,
      required: false,
    },
    _not: {
      type: "product_review_bool_exp",
      array: false,
      arrayRequired: false,
      required: false,
    },
    _or: {
      type: "product_review_bool_exp",
      array: true,
      arrayRequired: false,
      required: false,
    },
    comment: {
      type: "String_comparison_exp",
      array: false,
      arrayRequired: false,
      required: false,
    },
    created_at: {
      type: "timestamptz_comparison_exp",
      array: false,
      arrayRequired: false,
      required: false,
    },
    id: {
      type: "Int_comparison_exp",
      array: false,
      arrayRequired: false,
      required: false,
    },
    product: {
      type: "product_bool_exp",
      array: false,
      arrayRequired: false,
      required: false,
    },
    product_id: {
      type: "Int_comparison_exp",
      array: false,
      arrayRequired: false,
      required: false,
    },
    rating: {
      type: "Int_comparison_exp",
      array: false,
      arrayRequired: false,
      required: false,
    },
    updated_at: {
      type: "timestamptz_comparison_exp",
      array: false,
      arrayRequired: false,
      required: false,
    },
    user: {
      type: "user_bool_exp",
      array: false,
      arrayRequired: false,
      required: false,
    },
    user_id: {
      type: "Int_comparison_exp",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  product_review_constraint: "enum",
  product_review_inc_input: {
    id: {
      type: "Int",
      array: false,
      arrayRequired: false,
      required: false,
    },
    product_id: {
      type: "Int",
      array: false,
      arrayRequired: false,
      required: false,
    },
    rating: {
      type: "Int",
      array: false,
      arrayRequired: false,
      required: false,
    },
    user_id: {
      type: "Int",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  product_review_insert_input: {
    comment: {
      type: "String",
      array: false,
      arrayRequired: false,
      required: false,
    },
    created_at: {
      type: "timestamptz",
      array: false,
      arrayRequired: false,
      required: false,
    },
    id: {
      type: "Int",
      array: false,
      arrayRequired: false,
      required: false,
    },
    product: {
      type: "product_obj_rel_insert_input",
      array: false,
      arrayRequired: false,
      required: false,
    },
    product_id: {
      type: "Int",
      array: false,
      arrayRequired: false,
      required: false,
    },
    rating: {
      type: "Int",
      array: false,
      arrayRequired: false,
      required: false,
    },
    updated_at: {
      type: "timestamptz",
      array: false,
      arrayRequired: false,
      required: false,
    },
    user: {
      type: "user_obj_rel_insert_input",
      array: false,
      arrayRequired: false,
      required: false,
    },
    user_id: {
      type: "Int",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  product_review_max_order_by: {
    comment: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    created_at: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    product_id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    rating: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    updated_at: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    user_id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  product_review_min_order_by: {
    comment: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    created_at: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    product_id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    rating: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    updated_at: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    user_id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  product_review_obj_rel_insert_input: {
    data: {
      type: "product_review_insert_input",
      array: false,
      arrayRequired: false,
      required: true,
    },
    on_conflict: {
      type: "product_review_on_conflict",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  product_review_on_conflict: {
    constraint: {
      type: "product_review_constraint",
      array: false,
      arrayRequired: false,
      required: true,
    },
    update_columns: {
      type: "product_review_update_column",
      array: true,
      arrayRequired: true,
      required: true,
    },
    where: {
      type: "product_review_bool_exp",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  product_review_order_by: {
    comment: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    created_at: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    product: {
      type: "product_order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    product_id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    rating: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    updated_at: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    user: {
      type: "user_order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    user_id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  product_review_pk_columns_input: {
    id: {
      type: "Int",
      array: false,
      arrayRequired: false,
      required: true,
    },
  },
  product_review_select_column: "enum",
  product_review_set_input: {
    comment: {
      type: "String",
      array: false,
      arrayRequired: false,
      required: false,
    },
    created_at: {
      type: "timestamptz",
      array: false,
      arrayRequired: false,
      required: false,
    },
    id: {
      type: "Int",
      array: false,
      arrayRequired: false,
      required: false,
    },
    product_id: {
      type: "Int",
      array: false,
      arrayRequired: false,
      required: false,
    },
    rating: {
      type: "Int",
      array: false,
      arrayRequired: false,
      required: false,
    },
    updated_at: {
      type: "timestamptz",
      array: false,
      arrayRequired: false,
      required: false,
    },
    user_id: {
      type: "Int",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  product_review_stddev_order_by: {
    id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    product_id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    rating: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    user_id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  product_review_stddev_pop_order_by: {
    id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    product_id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    rating: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    user_id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  product_review_stddev_samp_order_by: {
    id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    product_id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    rating: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    user_id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  product_review_sum_order_by: {
    id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    product_id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    rating: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    user_id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  product_review_update_column: "enum",
  product_review_var_pop_order_by: {
    id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    product_id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    rating: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    user_id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  product_review_var_samp_order_by: {
    id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    product_id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    rating: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    user_id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  product_review_variance_order_by: {
    id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    product_id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    rating: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    user_id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  product_select_column: "enum",
  product_set_input: {
    brand: {
      type: "String",
      array: false,
      arrayRequired: false,
      required: false,
    },
    category_display_name: {
      type: "String",
      array: false,
      arrayRequired: false,
      required: false,
    },
    created_at: {
      type: "timestamptz",
      array: false,
      arrayRequired: false,
      required: false,
    },
    description: {
      type: "String",
      array: false,
      arrayRequired: false,
      required: false,
    },
    id: {
      type: "Int",
      array: false,
      arrayRequired: false,
      required: false,
    },
    image_urls: {
      type: "jsonb",
      array: false,
      arrayRequired: false,
      required: false,
    },
    name: {
      type: "String",
      array: false,
      arrayRequired: false,
      required: false,
    },
    price: {
      type: "numeric",
      array: false,
      arrayRequired: false,
      required: false,
    },
    updated_at: {
      type: "timestamptz",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  product_stddev_order_by: {
    id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    price: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  product_stddev_pop_order_by: {
    id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    price: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  product_stddev_samp_order_by: {
    id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    price: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  product_sum_order_by: {
    id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    price: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  product_update_column: "enum",
  product_var_pop_order_by: {
    id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    price: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  product_var_samp_order_by: {
    id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    price: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  product_variance_order_by: {
    id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    price: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  query_root: {
    address: {
      distinct_on: {
        type: "address_select_column",
        array: true,
        arrayRequired: false,
        required: true,
      },
      limit: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false,
      },
      offset: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false,
      },
      order_by: {
        type: "address_order_by",
        array: true,
        arrayRequired: false,
        required: true,
      },
      where: {
        type: "address_bool_exp",
        array: false,
        arrayRequired: false,
        required: false,
      },
    },
    address_aggregate: {
      distinct_on: {
        type: "address_select_column",
        array: true,
        arrayRequired: false,
        required: true,
      },
      limit: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false,
      },
      offset: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false,
      },
      order_by: {
        type: "address_order_by",
        array: true,
        arrayRequired: false,
        required: true,
      },
      where: {
        type: "address_bool_exp",
        array: false,
        arrayRequired: false,
        required: false,
      },
    },
    address_by_pk: {
      id: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: true,
      },
    },
    adminLogin: {
      params: {
        type: "AdminLoginInput",
        array: false,
        arrayRequired: false,
        required: true,
      },
    },
    order: {
      distinct_on: {
        type: "order_select_column",
        array: true,
        arrayRequired: false,
        required: true,
      },
      limit: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false,
      },
      offset: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false,
      },
      order_by: {
        type: "order_order_by",
        array: true,
        arrayRequired: false,
        required: true,
      },
      where: {
        type: "order_bool_exp",
        array: false,
        arrayRequired: false,
        required: false,
      },
    },
    order_aggregate: {
      distinct_on: {
        type: "order_select_column",
        array: true,
        arrayRequired: false,
        required: true,
      },
      limit: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false,
      },
      offset: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false,
      },
      order_by: {
        type: "order_order_by",
        array: true,
        arrayRequired: false,
        required: true,
      },
      where: {
        type: "order_bool_exp",
        array: false,
        arrayRequired: false,
        required: false,
      },
    },
    order_by_pk: {
      id: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: true,
      },
    },
    order_product: {
      distinct_on: {
        type: "order_product_select_column",
        array: true,
        arrayRequired: false,
        required: true,
      },
      limit: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false,
      },
      offset: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false,
      },
      order_by: {
        type: "order_product_order_by",
        array: true,
        arrayRequired: false,
        required: true,
      },
      where: {
        type: "order_product_bool_exp",
        array: false,
        arrayRequired: false,
        required: false,
      },
    },
    order_product_aggregate: {
      distinct_on: {
        type: "order_product_select_column",
        array: true,
        arrayRequired: false,
        required: true,
      },
      limit: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false,
      },
      offset: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false,
      },
      order_by: {
        type: "order_product_order_by",
        array: true,
        arrayRequired: false,
        required: true,
      },
      where: {
        type: "order_product_bool_exp",
        array: false,
        arrayRequired: false,
        required: false,
      },
    },
    order_product_by_pk: {
      id: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: true,
      },
    },
    product: {
      distinct_on: {
        type: "product_select_column",
        array: true,
        arrayRequired: false,
        required: true,
      },
      limit: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false,
      },
      offset: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false,
      },
      order_by: {
        type: "product_order_by",
        array: true,
        arrayRequired: false,
        required: true,
      },
      where: {
        type: "product_bool_exp",
        array: false,
        arrayRequired: false,
        required: false,
      },
    },
    product_aggregate: {
      distinct_on: {
        type: "product_select_column",
        array: true,
        arrayRequired: false,
        required: true,
      },
      limit: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false,
      },
      offset: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false,
      },
      order_by: {
        type: "product_order_by",
        array: true,
        arrayRequired: false,
        required: true,
      },
      where: {
        type: "product_bool_exp",
        array: false,
        arrayRequired: false,
        required: false,
      },
    },
    product_by_pk: {
      id: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: true,
      },
    },
    product_category_enum: {
      distinct_on: {
        type: "product_category_enum_select_column",
        array: true,
        arrayRequired: false,
        required: true,
      },
      limit: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false,
      },
      offset: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false,
      },
      order_by: {
        type: "product_category_enum_order_by",
        array: true,
        arrayRequired: false,
        required: true,
      },
      where: {
        type: "product_category_enum_bool_exp",
        array: false,
        arrayRequired: false,
        required: false,
      },
    },
    product_category_enum_aggregate: {
      distinct_on: {
        type: "product_category_enum_select_column",
        array: true,
        arrayRequired: false,
        required: true,
      },
      limit: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false,
      },
      offset: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false,
      },
      order_by: {
        type: "product_category_enum_order_by",
        array: true,
        arrayRequired: false,
        required: true,
      },
      where: {
        type: "product_category_enum_bool_exp",
        array: false,
        arrayRequired: false,
        required: false,
      },
    },
    product_category_enum_by_pk: {
      name: {
        type: "String",
        array: false,
        arrayRequired: false,
        required: true,
      },
    },
    product_review: {
      distinct_on: {
        type: "product_review_select_column",
        array: true,
        arrayRequired: false,
        required: true,
      },
      limit: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false,
      },
      offset: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false,
      },
      order_by: {
        type: "product_review_order_by",
        array: true,
        arrayRequired: false,
        required: true,
      },
      where: {
        type: "product_review_bool_exp",
        array: false,
        arrayRequired: false,
        required: false,
      },
    },
    product_review_aggregate: {
      distinct_on: {
        type: "product_review_select_column",
        array: true,
        arrayRequired: false,
        required: true,
      },
      limit: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false,
      },
      offset: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false,
      },
      order_by: {
        type: "product_review_order_by",
        array: true,
        arrayRequired: false,
        required: true,
      },
      where: {
        type: "product_review_bool_exp",
        array: false,
        arrayRequired: false,
        required: false,
      },
    },
    product_review_by_pk: {
      id: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: true,
      },
    },
    refreshToken: {
      params: {
        type: "RefreshTokenInput",
        array: false,
        arrayRequired: false,
        required: true,
      },
    },
    site_admin: {
      distinct_on: {
        type: "site_admin_select_column",
        array: true,
        arrayRequired: false,
        required: true,
      },
      limit: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false,
      },
      offset: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false,
      },
      order_by: {
        type: "site_admin_order_by",
        array: true,
        arrayRequired: false,
        required: true,
      },
      where: {
        type: "site_admin_bool_exp",
        array: false,
        arrayRequired: false,
        required: false,
      },
    },
    site_admin_aggregate: {
      distinct_on: {
        type: "site_admin_select_column",
        array: true,
        arrayRequired: false,
        required: true,
      },
      limit: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false,
      },
      offset: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false,
      },
      order_by: {
        type: "site_admin_order_by",
        array: true,
        arrayRequired: false,
        required: true,
      },
      where: {
        type: "site_admin_bool_exp",
        array: false,
        arrayRequired: false,
        required: false,
      },
    },
    site_admin_by_pk: {
      id: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: true,
      },
    },
    user: {
      distinct_on: {
        type: "user_select_column",
        array: true,
        arrayRequired: false,
        required: true,
      },
      limit: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false,
      },
      offset: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false,
      },
      order_by: {
        type: "user_order_by",
        array: true,
        arrayRequired: false,
        required: true,
      },
      where: {
        type: "user_bool_exp",
        array: false,
        arrayRequired: false,
        required: false,
      },
    },
    user_aggregate: {
      distinct_on: {
        type: "user_select_column",
        array: true,
        arrayRequired: false,
        required: true,
      },
      limit: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false,
      },
      offset: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false,
      },
      order_by: {
        type: "user_order_by",
        array: true,
        arrayRequired: false,
        required: true,
      },
      where: {
        type: "user_bool_exp",
        array: false,
        arrayRequired: false,
        required: false,
      },
    },
    user_by_pk: {
      id: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: true,
      },
    },
  },
  RefreshTokenInput: {
    refreshToken: {
      type: "String",
      array: false,
      arrayRequired: false,
      required: true,
    },
  },
  SignupInput: {
    email: {
      type: "String",
      array: false,
      arrayRequired: false,
      required: true,
    },
    name: {
      type: "String",
      array: false,
      arrayRequired: false,
      required: true,
    },
    password: {
      type: "String",
      array: false,
      arrayRequired: false,
      required: true,
    },
  },
  site_admin_aggregate_fields: {
    count: {
      columns: {
        type: "site_admin_select_column",
        array: true,
        arrayRequired: false,
        required: true,
      },
      distinct: {
        type: "Boolean",
        array: false,
        arrayRequired: false,
        required: false,
      },
    },
  },
  site_admin_aggregate_order_by: {
    avg: {
      type: "site_admin_avg_order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    count: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    max: {
      type: "site_admin_max_order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    min: {
      type: "site_admin_min_order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    stddev: {
      type: "site_admin_stddev_order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    stddev_pop: {
      type: "site_admin_stddev_pop_order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    stddev_samp: {
      type: "site_admin_stddev_samp_order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    sum: {
      type: "site_admin_sum_order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    var_pop: {
      type: "site_admin_var_pop_order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    var_samp: {
      type: "site_admin_var_samp_order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    variance: {
      type: "site_admin_variance_order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  site_admin_arr_rel_insert_input: {
    data: {
      type: "site_admin_insert_input",
      array: true,
      arrayRequired: true,
      required: true,
    },
    on_conflict: {
      type: "site_admin_on_conflict",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  site_admin_avg_order_by: {
    id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  site_admin_bool_exp: {
    _and: {
      type: "site_admin_bool_exp",
      array: true,
      arrayRequired: false,
      required: false,
    },
    _not: {
      type: "site_admin_bool_exp",
      array: false,
      arrayRequired: false,
      required: false,
    },
    _or: {
      type: "site_admin_bool_exp",
      array: true,
      arrayRequired: false,
      required: false,
    },
    created_at: {
      type: "timestamptz_comparison_exp",
      array: false,
      arrayRequired: false,
      required: false,
    },
    email: {
      type: "String_comparison_exp",
      array: false,
      arrayRequired: false,
      required: false,
    },
    id: {
      type: "Int_comparison_exp",
      array: false,
      arrayRequired: false,
      required: false,
    },
    password: {
      type: "String_comparison_exp",
      array: false,
      arrayRequired: false,
      required: false,
    },
    updated_at: {
      type: "timestamptz_comparison_exp",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  site_admin_constraint: "enum",
  site_admin_inc_input: {
    id: {
      type: "Int",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  site_admin_insert_input: {
    created_at: {
      type: "timestamptz",
      array: false,
      arrayRequired: false,
      required: false,
    },
    email: {
      type: "String",
      array: false,
      arrayRequired: false,
      required: false,
    },
    id: {
      type: "Int",
      array: false,
      arrayRequired: false,
      required: false,
    },
    password: {
      type: "String",
      array: false,
      arrayRequired: false,
      required: false,
    },
    updated_at: {
      type: "timestamptz",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  site_admin_max_order_by: {
    created_at: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    email: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    password: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    updated_at: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  site_admin_min_order_by: {
    created_at: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    email: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    password: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    updated_at: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  site_admin_obj_rel_insert_input: {
    data: {
      type: "site_admin_insert_input",
      array: false,
      arrayRequired: false,
      required: true,
    },
    on_conflict: {
      type: "site_admin_on_conflict",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  site_admin_on_conflict: {
    constraint: {
      type: "site_admin_constraint",
      array: false,
      arrayRequired: false,
      required: true,
    },
    update_columns: {
      type: "site_admin_update_column",
      array: true,
      arrayRequired: true,
      required: true,
    },
    where: {
      type: "site_admin_bool_exp",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  site_admin_order_by: {
    created_at: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    email: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    password: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    updated_at: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  site_admin_pk_columns_input: {
    id: {
      type: "Int",
      array: false,
      arrayRequired: false,
      required: true,
    },
  },
  site_admin_select_column: "enum",
  site_admin_set_input: {
    created_at: {
      type: "timestamptz",
      array: false,
      arrayRequired: false,
      required: false,
    },
    email: {
      type: "String",
      array: false,
      arrayRequired: false,
      required: false,
    },
    id: {
      type: "Int",
      array: false,
      arrayRequired: false,
      required: false,
    },
    password: {
      type: "String",
      array: false,
      arrayRequired: false,
      required: false,
    },
    updated_at: {
      type: "timestamptz",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  site_admin_stddev_order_by: {
    id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  site_admin_stddev_pop_order_by: {
    id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  site_admin_stddev_samp_order_by: {
    id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  site_admin_sum_order_by: {
    id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  site_admin_update_column: "enum",
  site_admin_var_pop_order_by: {
    id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  site_admin_var_samp_order_by: {
    id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  site_admin_variance_order_by: {
    id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  String_comparison_exp: {
    _eq: {
      type: "String",
      array: false,
      arrayRequired: false,
      required: false,
    },
    _gt: {
      type: "String",
      array: false,
      arrayRequired: false,
      required: false,
    },
    _gte: {
      type: "String",
      array: false,
      arrayRequired: false,
      required: false,
    },
    _ilike: {
      type: "String",
      array: false,
      arrayRequired: false,
      required: false,
    },
    _in: {
      type: "String",
      array: true,
      arrayRequired: false,
      required: true,
    },
    _is_null: {
      type: "Boolean",
      array: false,
      arrayRequired: false,
      required: false,
    },
    _like: {
      type: "String",
      array: false,
      arrayRequired: false,
      required: false,
    },
    _lt: {
      type: "String",
      array: false,
      arrayRequired: false,
      required: false,
    },
    _lte: {
      type: "String",
      array: false,
      arrayRequired: false,
      required: false,
    },
    _neq: {
      type: "String",
      array: false,
      arrayRequired: false,
      required: false,
    },
    _nilike: {
      type: "String",
      array: false,
      arrayRequired: false,
      required: false,
    },
    _nin: {
      type: "String",
      array: true,
      arrayRequired: false,
      required: true,
    },
    _nlike: {
      type: "String",
      array: false,
      arrayRequired: false,
      required: false,
    },
    _nsimilar: {
      type: "String",
      array: false,
      arrayRequired: false,
      required: false,
    },
    _similar: {
      type: "String",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  subscription_root: {
    address: {
      distinct_on: {
        type: "address_select_column",
        array: true,
        arrayRequired: false,
        required: true,
      },
      limit: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false,
      },
      offset: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false,
      },
      order_by: {
        type: "address_order_by",
        array: true,
        arrayRequired: false,
        required: true,
      },
      where: {
        type: "address_bool_exp",
        array: false,
        arrayRequired: false,
        required: false,
      },
    },
    address_aggregate: {
      distinct_on: {
        type: "address_select_column",
        array: true,
        arrayRequired: false,
        required: true,
      },
      limit: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false,
      },
      offset: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false,
      },
      order_by: {
        type: "address_order_by",
        array: true,
        arrayRequired: false,
        required: true,
      },
      where: {
        type: "address_bool_exp",
        array: false,
        arrayRequired: false,
        required: false,
      },
    },
    address_by_pk: {
      id: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: true,
      },
    },
    adminLogin: {
      params: {
        type: "AdminLoginInput",
        array: false,
        arrayRequired: false,
        required: true,
      },
    },
    order: {
      distinct_on: {
        type: "order_select_column",
        array: true,
        arrayRequired: false,
        required: true,
      },
      limit: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false,
      },
      offset: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false,
      },
      order_by: {
        type: "order_order_by",
        array: true,
        arrayRequired: false,
        required: true,
      },
      where: {
        type: "order_bool_exp",
        array: false,
        arrayRequired: false,
        required: false,
      },
    },
    order_aggregate: {
      distinct_on: {
        type: "order_select_column",
        array: true,
        arrayRequired: false,
        required: true,
      },
      limit: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false,
      },
      offset: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false,
      },
      order_by: {
        type: "order_order_by",
        array: true,
        arrayRequired: false,
        required: true,
      },
      where: {
        type: "order_bool_exp",
        array: false,
        arrayRequired: false,
        required: false,
      },
    },
    order_by_pk: {
      id: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: true,
      },
    },
    order_product: {
      distinct_on: {
        type: "order_product_select_column",
        array: true,
        arrayRequired: false,
        required: true,
      },
      limit: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false,
      },
      offset: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false,
      },
      order_by: {
        type: "order_product_order_by",
        array: true,
        arrayRequired: false,
        required: true,
      },
      where: {
        type: "order_product_bool_exp",
        array: false,
        arrayRequired: false,
        required: false,
      },
    },
    order_product_aggregate: {
      distinct_on: {
        type: "order_product_select_column",
        array: true,
        arrayRequired: false,
        required: true,
      },
      limit: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false,
      },
      offset: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false,
      },
      order_by: {
        type: "order_product_order_by",
        array: true,
        arrayRequired: false,
        required: true,
      },
      where: {
        type: "order_product_bool_exp",
        array: false,
        arrayRequired: false,
        required: false,
      },
    },
    order_product_by_pk: {
      id: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: true,
      },
    },
    product: {
      distinct_on: {
        type: "product_select_column",
        array: true,
        arrayRequired: false,
        required: true,
      },
      limit: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false,
      },
      offset: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false,
      },
      order_by: {
        type: "product_order_by",
        array: true,
        arrayRequired: false,
        required: true,
      },
      where: {
        type: "product_bool_exp",
        array: false,
        arrayRequired: false,
        required: false,
      },
    },
    product_aggregate: {
      distinct_on: {
        type: "product_select_column",
        array: true,
        arrayRequired: false,
        required: true,
      },
      limit: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false,
      },
      offset: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false,
      },
      order_by: {
        type: "product_order_by",
        array: true,
        arrayRequired: false,
        required: true,
      },
      where: {
        type: "product_bool_exp",
        array: false,
        arrayRequired: false,
        required: false,
      },
    },
    product_by_pk: {
      id: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: true,
      },
    },
    product_category_enum: {
      distinct_on: {
        type: "product_category_enum_select_column",
        array: true,
        arrayRequired: false,
        required: true,
      },
      limit: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false,
      },
      offset: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false,
      },
      order_by: {
        type: "product_category_enum_order_by",
        array: true,
        arrayRequired: false,
        required: true,
      },
      where: {
        type: "product_category_enum_bool_exp",
        array: false,
        arrayRequired: false,
        required: false,
      },
    },
    product_category_enum_aggregate: {
      distinct_on: {
        type: "product_category_enum_select_column",
        array: true,
        arrayRequired: false,
        required: true,
      },
      limit: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false,
      },
      offset: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false,
      },
      order_by: {
        type: "product_category_enum_order_by",
        array: true,
        arrayRequired: false,
        required: true,
      },
      where: {
        type: "product_category_enum_bool_exp",
        array: false,
        arrayRequired: false,
        required: false,
      },
    },
    product_category_enum_by_pk: {
      name: {
        type: "String",
        array: false,
        arrayRequired: false,
        required: true,
      },
    },
    product_review: {
      distinct_on: {
        type: "product_review_select_column",
        array: true,
        arrayRequired: false,
        required: true,
      },
      limit: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false,
      },
      offset: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false,
      },
      order_by: {
        type: "product_review_order_by",
        array: true,
        arrayRequired: false,
        required: true,
      },
      where: {
        type: "product_review_bool_exp",
        array: false,
        arrayRequired: false,
        required: false,
      },
    },
    product_review_aggregate: {
      distinct_on: {
        type: "product_review_select_column",
        array: true,
        arrayRequired: false,
        required: true,
      },
      limit: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false,
      },
      offset: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false,
      },
      order_by: {
        type: "product_review_order_by",
        array: true,
        arrayRequired: false,
        required: true,
      },
      where: {
        type: "product_review_bool_exp",
        array: false,
        arrayRequired: false,
        required: false,
      },
    },
    product_review_by_pk: {
      id: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: true,
      },
    },
    refreshToken: {
      params: {
        type: "RefreshTokenInput",
        array: false,
        arrayRequired: false,
        required: true,
      },
    },
    site_admin: {
      distinct_on: {
        type: "site_admin_select_column",
        array: true,
        arrayRequired: false,
        required: true,
      },
      limit: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false,
      },
      offset: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false,
      },
      order_by: {
        type: "site_admin_order_by",
        array: true,
        arrayRequired: false,
        required: true,
      },
      where: {
        type: "site_admin_bool_exp",
        array: false,
        arrayRequired: false,
        required: false,
      },
    },
    site_admin_aggregate: {
      distinct_on: {
        type: "site_admin_select_column",
        array: true,
        arrayRequired: false,
        required: true,
      },
      limit: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false,
      },
      offset: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false,
      },
      order_by: {
        type: "site_admin_order_by",
        array: true,
        arrayRequired: false,
        required: true,
      },
      where: {
        type: "site_admin_bool_exp",
        array: false,
        arrayRequired: false,
        required: false,
      },
    },
    site_admin_by_pk: {
      id: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: true,
      },
    },
    user: {
      distinct_on: {
        type: "user_select_column",
        array: true,
        arrayRequired: false,
        required: true,
      },
      limit: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false,
      },
      offset: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false,
      },
      order_by: {
        type: "user_order_by",
        array: true,
        arrayRequired: false,
        required: true,
      },
      where: {
        type: "user_bool_exp",
        array: false,
        arrayRequired: false,
        required: false,
      },
    },
    user_aggregate: {
      distinct_on: {
        type: "user_select_column",
        array: true,
        arrayRequired: false,
        required: true,
      },
      limit: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false,
      },
      offset: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false,
      },
      order_by: {
        type: "user_order_by",
        array: true,
        arrayRequired: false,
        required: true,
      },
      where: {
        type: "user_bool_exp",
        array: false,
        arrayRequired: false,
        required: false,
      },
    },
    user_by_pk: {
      id: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: true,
      },
    },
  },
  timestamptz: "String",
  timestamptz_comparison_exp: {
    _eq: {
      type: "timestamptz",
      array: false,
      arrayRequired: false,
      required: false,
    },
    _gt: {
      type: "timestamptz",
      array: false,
      arrayRequired: false,
      required: false,
    },
    _gte: {
      type: "timestamptz",
      array: false,
      arrayRequired: false,
      required: false,
    },
    _in: {
      type: "timestamptz",
      array: true,
      arrayRequired: false,
      required: true,
    },
    _is_null: {
      type: "Boolean",
      array: false,
      arrayRequired: false,
      required: false,
    },
    _lt: {
      type: "timestamptz",
      array: false,
      arrayRequired: false,
      required: false,
    },
    _lte: {
      type: "timestamptz",
      array: false,
      arrayRequired: false,
      required: false,
    },
    _neq: {
      type: "timestamptz",
      array: false,
      arrayRequired: false,
      required: false,
    },
    _nin: {
      type: "timestamptz",
      array: true,
      arrayRequired: false,
      required: true,
    },
  },
  user: {
    addresses: {
      distinct_on: {
        type: "address_select_column",
        array: true,
        arrayRequired: false,
        required: true,
      },
      limit: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false,
      },
      offset: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false,
      },
      order_by: {
        type: "address_order_by",
        array: true,
        arrayRequired: false,
        required: true,
      },
      where: {
        type: "address_bool_exp",
        array: false,
        arrayRequired: false,
        required: false,
      },
    },
    addresses_aggregate: {
      distinct_on: {
        type: "address_select_column",
        array: true,
        arrayRequired: false,
        required: true,
      },
      limit: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false,
      },
      offset: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false,
      },
      order_by: {
        type: "address_order_by",
        array: true,
        arrayRequired: false,
        required: true,
      },
      where: {
        type: "address_bool_exp",
        array: false,
        arrayRequired: false,
        required: false,
      },
    },
    orders: {
      distinct_on: {
        type: "order_select_column",
        array: true,
        arrayRequired: false,
        required: true,
      },
      limit: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false,
      },
      offset: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false,
      },
      order_by: {
        type: "order_order_by",
        array: true,
        arrayRequired: false,
        required: true,
      },
      where: {
        type: "order_bool_exp",
        array: false,
        arrayRequired: false,
        required: false,
      },
    },
    orders_aggregate: {
      distinct_on: {
        type: "order_select_column",
        array: true,
        arrayRequired: false,
        required: true,
      },
      limit: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false,
      },
      offset: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false,
      },
      order_by: {
        type: "order_order_by",
        array: true,
        arrayRequired: false,
        required: true,
      },
      where: {
        type: "order_bool_exp",
        array: false,
        arrayRequired: false,
        required: false,
      },
    },
    product_reviews: {
      distinct_on: {
        type: "product_review_select_column",
        array: true,
        arrayRequired: false,
        required: true,
      },
      limit: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false,
      },
      offset: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false,
      },
      order_by: {
        type: "product_review_order_by",
        array: true,
        arrayRequired: false,
        required: true,
      },
      where: {
        type: "product_review_bool_exp",
        array: false,
        arrayRequired: false,
        required: false,
      },
    },
    product_reviews_aggregate: {
      distinct_on: {
        type: "product_review_select_column",
        array: true,
        arrayRequired: false,
        required: true,
      },
      limit: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false,
      },
      offset: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false,
      },
      order_by: {
        type: "product_review_order_by",
        array: true,
        arrayRequired: false,
        required: true,
      },
      where: {
        type: "product_review_bool_exp",
        array: false,
        arrayRequired: false,
        required: false,
      },
    },
  },
  user_aggregate_fields: {
    count: {
      columns: {
        type: "user_select_column",
        array: true,
        arrayRequired: false,
        required: true,
      },
      distinct: {
        type: "Boolean",
        array: false,
        arrayRequired: false,
        required: false,
      },
    },
  },
  user_aggregate_order_by: {
    avg: {
      type: "user_avg_order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    count: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    max: {
      type: "user_max_order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    min: {
      type: "user_min_order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    stddev: {
      type: "user_stddev_order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    stddev_pop: {
      type: "user_stddev_pop_order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    stddev_samp: {
      type: "user_stddev_samp_order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    sum: {
      type: "user_sum_order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    var_pop: {
      type: "user_var_pop_order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    var_samp: {
      type: "user_var_samp_order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    variance: {
      type: "user_variance_order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  user_arr_rel_insert_input: {
    data: {
      type: "user_insert_input",
      array: true,
      arrayRequired: true,
      required: true,
    },
    on_conflict: {
      type: "user_on_conflict",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  user_avg_order_by: {
    id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  user_bool_exp: {
    _and: {
      type: "user_bool_exp",
      array: true,
      arrayRequired: false,
      required: false,
    },
    _not: {
      type: "user_bool_exp",
      array: false,
      arrayRequired: false,
      required: false,
    },
    _or: {
      type: "user_bool_exp",
      array: true,
      arrayRequired: false,
      required: false,
    },
    addresses: {
      type: "address_bool_exp",
      array: false,
      arrayRequired: false,
      required: false,
    },
    created_at: {
      type: "timestamptz_comparison_exp",
      array: false,
      arrayRequired: false,
      required: false,
    },
    email: {
      type: "String_comparison_exp",
      array: false,
      arrayRequired: false,
      required: false,
    },
    id: {
      type: "Int_comparison_exp",
      array: false,
      arrayRequired: false,
      required: false,
    },
    name: {
      type: "String_comparison_exp",
      array: false,
      arrayRequired: false,
      required: false,
    },
    orders: {
      type: "order_bool_exp",
      array: false,
      arrayRequired: false,
      required: false,
    },
    password: {
      type: "String_comparison_exp",
      array: false,
      arrayRequired: false,
      required: false,
    },
    product_reviews: {
      type: "product_review_bool_exp",
      array: false,
      arrayRequired: false,
      required: false,
    },
    refresh_token: {
      type: "String_comparison_exp",
      array: false,
      arrayRequired: false,
      required: false,
    },
    updated_at: {
      type: "timestamptz_comparison_exp",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  user_constraint: "enum",
  user_inc_input: {
    id: {
      type: "Int",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  user_insert_input: {
    addresses: {
      type: "address_arr_rel_insert_input",
      array: false,
      arrayRequired: false,
      required: false,
    },
    created_at: {
      type: "timestamptz",
      array: false,
      arrayRequired: false,
      required: false,
    },
    email: {
      type: "String",
      array: false,
      arrayRequired: false,
      required: false,
    },
    id: {
      type: "Int",
      array: false,
      arrayRequired: false,
      required: false,
    },
    name: {
      type: "String",
      array: false,
      arrayRequired: false,
      required: false,
    },
    orders: {
      type: "order_arr_rel_insert_input",
      array: false,
      arrayRequired: false,
      required: false,
    },
    password: {
      type: "String",
      array: false,
      arrayRequired: false,
      required: false,
    },
    product_reviews: {
      type: "product_review_arr_rel_insert_input",
      array: false,
      arrayRequired: false,
      required: false,
    },
    refresh_token: {
      type: "String",
      array: false,
      arrayRequired: false,
      required: false,
    },
    updated_at: {
      type: "timestamptz",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  user_max_order_by: {
    created_at: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    email: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    name: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    password: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    refresh_token: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    updated_at: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  user_min_order_by: {
    created_at: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    email: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    name: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    password: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    refresh_token: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    updated_at: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  user_obj_rel_insert_input: {
    data: {
      type: "user_insert_input",
      array: false,
      arrayRequired: false,
      required: true,
    },
    on_conflict: {
      type: "user_on_conflict",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  user_on_conflict: {
    constraint: {
      type: "user_constraint",
      array: false,
      arrayRequired: false,
      required: true,
    },
    update_columns: {
      type: "user_update_column",
      array: true,
      arrayRequired: true,
      required: true,
    },
    where: {
      type: "user_bool_exp",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  user_order_by: {
    addresses_aggregate: {
      type: "address_aggregate_order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    created_at: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    email: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    name: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    orders_aggregate: {
      type: "order_aggregate_order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    password: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    product_reviews_aggregate: {
      type: "product_review_aggregate_order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    refresh_token: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    updated_at: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  user_pk_columns_input: {
    id: {
      type: "Int",
      array: false,
      arrayRequired: false,
      required: true,
    },
  },
  user_select_column: "enum",
  user_set_input: {
    created_at: {
      type: "timestamptz",
      array: false,
      arrayRequired: false,
      required: false,
    },
    email: {
      type: "String",
      array: false,
      arrayRequired: false,
      required: false,
    },
    id: {
      type: "Int",
      array: false,
      arrayRequired: false,
      required: false,
    },
    name: {
      type: "String",
      array: false,
      arrayRequired: false,
      required: false,
    },
    password: {
      type: "String",
      array: false,
      arrayRequired: false,
      required: false,
    },
    refresh_token: {
      type: "String",
      array: false,
      arrayRequired: false,
      required: false,
    },
    updated_at: {
      type: "timestamptz",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  user_stddev_order_by: {
    id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  user_stddev_pop_order_by: {
    id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  user_stddev_samp_order_by: {
    id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  user_sum_order_by: {
    id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  user_update_column: "enum",
  user_var_pop_order_by: {
    id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  user_var_samp_order_by: {
    id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  user_variance_order_by: {
    id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  uuid: "String",
};

export const ReturnTypes: Record<string, any> = {
  address: {
    address_line_one: "String",
    address_line_two: "String",
    city: "String",
    created_at: "timestamptz",
    id: "Int",
    orders_with_billing_address: "order",
    orders_with_billing_address_aggregate: "order_aggregate",
    orders_with_shipping_address: "order",
    orders_with_shipping_address_aggregate: "order_aggregate",
    state: "String",
    updated_at: "timestamptz",
    user: "user",
    user_id: "Int",
    zipcode: "String",
  },
  address_aggregate: {
    aggregate: "address_aggregate_fields",
    nodes: "address",
  },
  address_aggregate_fields: {
    avg: "address_avg_fields",
    count: "Int",
    max: "address_max_fields",
    min: "address_min_fields",
    stddev: "address_stddev_fields",
    stddev_pop: "address_stddev_pop_fields",
    stddev_samp: "address_stddev_samp_fields",
    sum: "address_sum_fields",
    var_pop: "address_var_pop_fields",
    var_samp: "address_var_samp_fields",
    variance: "address_variance_fields",
  },
  address_avg_fields: {
    id: "Float",
    user_id: "Float",
  },
  address_max_fields: {
    address_line_one: "String",
    address_line_two: "String",
    city: "String",
    created_at: "timestamptz",
    id: "Int",
    state: "String",
    updated_at: "timestamptz",
    user_id: "Int",
    zipcode: "String",
  },
  address_min_fields: {
    address_line_one: "String",
    address_line_two: "String",
    city: "String",
    created_at: "timestamptz",
    id: "Int",
    state: "String",
    updated_at: "timestamptz",
    user_id: "Int",
    zipcode: "String",
  },
  address_mutation_response: {
    affected_rows: "Int",
    returning: "address",
  },
  address_stddev_fields: {
    id: "Float",
    user_id: "Float",
  },
  address_stddev_pop_fields: {
    id: "Float",
    user_id: "Float",
  },
  address_stddev_samp_fields: {
    id: "Float",
    user_id: "Float",
  },
  address_sum_fields: {
    id: "Int",
    user_id: "Int",
  },
  address_var_pop_fields: {
    id: "Float",
    user_id: "Float",
  },
  address_var_samp_fields: {
    id: "Float",
    user_id: "Float",
  },
  address_variance_fields: {
    id: "Float",
    user_id: "Float",
  },
  JWT: {
    email: "String",
    name: "String",
    refreshToken: "String",
    token: "String",
  },
  mutation_root: {
    adminSignup: "JWT",
    createPaymentIntent: "PaymentIntentClientSecret",
    delete_address: "address_mutation_response",
    delete_address_by_pk: "address",
    delete_order: "order_mutation_response",
    delete_order_by_pk: "order",
    delete_order_product: "order_product_mutation_response",
    delete_order_product_by_pk: "order_product",
    delete_product: "product_mutation_response",
    delete_product_by_pk: "product",
    delete_product_category_enum: "product_category_enum_mutation_response",
    delete_product_category_enum_by_pk: "product_category_enum",
    delete_product_review: "product_review_mutation_response",
    delete_product_review_by_pk: "product_review",
    delete_site_admin: "site_admin_mutation_response",
    delete_site_admin_by_pk: "site_admin",
    delete_user: "user_mutation_response",
    delete_user_by_pk: "user",
    insert_address: "address_mutation_response",
    insert_address_one: "address",
    insert_order: "order_mutation_response",
    insert_order_one: "order",
    insert_order_product: "order_product_mutation_response",
    insert_order_product_one: "order_product",
    insert_product: "product_mutation_response",
    insert_product_category_enum: "product_category_enum_mutation_response",
    insert_product_category_enum_one: "product_category_enum",
    insert_product_one: "product",
    insert_product_review: "product_review_mutation_response",
    insert_product_review_one: "product_review",
    insert_site_admin: "site_admin_mutation_response",
    insert_site_admin_one: "site_admin",
    insert_user: "user_mutation_response",
    insert_user_one: "user",
    login: "JWT",
    signup: "JWT",
    update_address: "address_mutation_response",
    update_address_by_pk: "address",
    update_order: "order_mutation_response",
    update_order_by_pk: "order",
    update_order_product: "order_product_mutation_response",
    update_order_product_by_pk: "order_product",
    update_product: "product_mutation_response",
    update_product_by_pk: "product",
    update_product_category_enum: "product_category_enum_mutation_response",
    update_product_category_enum_by_pk: "product_category_enum",
    update_product_review: "product_review_mutation_response",
    update_product_review_by_pk: "product_review",
    update_site_admin: "site_admin_mutation_response",
    update_site_admin_by_pk: "site_admin",
    update_user: "user_mutation_response",
    update_user_by_pk: "user",
  },
  order: {
    billing_address: "address",
    billing_address_id: "Int",
    created_at: "timestamptz",
    id: "Int",
    is_shipped: "Boolean",
    products: "order_product",
    products_aggregate: "order_product_aggregate",
    shipping_address: "address",
    shipping_address_id: "Int",
    updated_at: "timestamptz",
    user: "user",
    user_id: "Int",
  },
  order_aggregate: {
    aggregate: "order_aggregate_fields",
    nodes: "order",
  },
  order_aggregate_fields: {
    avg: "order_avg_fields",
    count: "Int",
    max: "order_max_fields",
    min: "order_min_fields",
    stddev: "order_stddev_fields",
    stddev_pop: "order_stddev_pop_fields",
    stddev_samp: "order_stddev_samp_fields",
    sum: "order_sum_fields",
    var_pop: "order_var_pop_fields",
    var_samp: "order_var_samp_fields",
    variance: "order_variance_fields",
  },
  order_avg_fields: {
    billing_address_id: "Float",
    id: "Float",
    shipping_address_id: "Float",
    user_id: "Float",
  },
  order_max_fields: {
    billing_address_id: "Int",
    created_at: "timestamptz",
    id: "Int",
    shipping_address_id: "Int",
    updated_at: "timestamptz",
    user_id: "Int",
  },
  order_min_fields: {
    billing_address_id: "Int",
    created_at: "timestamptz",
    id: "Int",
    shipping_address_id: "Int",
    updated_at: "timestamptz",
    user_id: "Int",
  },
  order_mutation_response: {
    affected_rows: "Int",
    returning: "order",
  },
  order_product: {
    created_at: "timestamptz",
    id: "Int",
    order: "order",
    order_id: "Int",
    product: "product",
    product_id: "Int",
    quantity: "Int",
    updated_at: "timestamptz",
  },
  order_product_aggregate: {
    aggregate: "order_product_aggregate_fields",
    nodes: "order_product",
  },
  order_product_aggregate_fields: {
    avg: "order_product_avg_fields",
    count: "Int",
    max: "order_product_max_fields",
    min: "order_product_min_fields",
    stddev: "order_product_stddev_fields",
    stddev_pop: "order_product_stddev_pop_fields",
    stddev_samp: "order_product_stddev_samp_fields",
    sum: "order_product_sum_fields",
    var_pop: "order_product_var_pop_fields",
    var_samp: "order_product_var_samp_fields",
    variance: "order_product_variance_fields",
  },
  order_product_avg_fields: {
    id: "Float",
    order_id: "Float",
    product_id: "Float",
    quantity: "Float",
  },
  order_product_max_fields: {
    created_at: "timestamptz",
    id: "Int",
    order_id: "Int",
    product_id: "Int",
    quantity: "Int",
    updated_at: "timestamptz",
  },
  order_product_min_fields: {
    created_at: "timestamptz",
    id: "Int",
    order_id: "Int",
    product_id: "Int",
    quantity: "Int",
    updated_at: "timestamptz",
  },
  order_product_mutation_response: {
    affected_rows: "Int",
    returning: "order_product",
  },
  order_product_stddev_fields: {
    id: "Float",
    order_id: "Float",
    product_id: "Float",
    quantity: "Float",
  },
  order_product_stddev_pop_fields: {
    id: "Float",
    order_id: "Float",
    product_id: "Float",
    quantity: "Float",
  },
  order_product_stddev_samp_fields: {
    id: "Float",
    order_id: "Float",
    product_id: "Float",
    quantity: "Float",
  },
  order_product_sum_fields: {
    id: "Int",
    order_id: "Int",
    product_id: "Int",
    quantity: "Int",
  },
  order_product_var_pop_fields: {
    id: "Float",
    order_id: "Float",
    product_id: "Float",
    quantity: "Float",
  },
  order_product_var_samp_fields: {
    id: "Float",
    order_id: "Float",
    product_id: "Float",
    quantity: "Float",
  },
  order_product_variance_fields: {
    id: "Float",
    order_id: "Float",
    product_id: "Float",
    quantity: "Float",
  },
  order_stddev_fields: {
    billing_address_id: "Float",
    id: "Float",
    shipping_address_id: "Float",
    user_id: "Float",
  },
  order_stddev_pop_fields: {
    billing_address_id: "Float",
    id: "Float",
    shipping_address_id: "Float",
    user_id: "Float",
  },
  order_stddev_samp_fields: {
    billing_address_id: "Float",
    id: "Float",
    shipping_address_id: "Float",
    user_id: "Float",
  },
  order_sum_fields: {
    billing_address_id: "Int",
    id: "Int",
    shipping_address_id: "Int",
    user_id: "Int",
  },
  order_var_pop_fields: {
    billing_address_id: "Float",
    id: "Float",
    shipping_address_id: "Float",
    user_id: "Float",
  },
  order_var_samp_fields: {
    billing_address_id: "Float",
    id: "Float",
    shipping_address_id: "Float",
    user_id: "Float",
  },
  order_variance_fields: {
    billing_address_id: "Float",
    id: "Float",
    shipping_address_id: "Float",
    user_id: "Float",
  },
  PaymentIntentClientSecret: {
    clientSecret: "String",
  },
  product: {
    brand: "String",
    category: "product_category_enum",
    category_display_name: "String",
    created_at: "timestamptz",
    description: "String",
    id: "Int",
    image_urls: "jsonb",
    name: "String",
    orders: "order_product",
    orders_aggregate: "order_product_aggregate",
    price: "numeric",
    product_reviews: "product_review",
    product_reviews_aggregate: "product_review_aggregate",
    updated_at: "timestamptz",
  },
  product_aggregate: {
    aggregate: "product_aggregate_fields",
    nodes: "product",
  },
  product_aggregate_fields: {
    avg: "product_avg_fields",
    count: "Int",
    max: "product_max_fields",
    min: "product_min_fields",
    stddev: "product_stddev_fields",
    stddev_pop: "product_stddev_pop_fields",
    stddev_samp: "product_stddev_samp_fields",
    sum: "product_sum_fields",
    var_pop: "product_var_pop_fields",
    var_samp: "product_var_samp_fields",
    variance: "product_variance_fields",
  },
  product_avg_fields: {
    id: "Float",
    price: "Float",
  },
  product_category_enum: {
    display_name: "String",
    name: "String",
    products: "product",
    products_aggregate: "product_aggregate",
  },
  product_category_enum_aggregate: {
    aggregate: "product_category_enum_aggregate_fields",
    nodes: "product_category_enum",
  },
  product_category_enum_aggregate_fields: {
    count: "Int",
    max: "product_category_enum_max_fields",
    min: "product_category_enum_min_fields",
  },
  product_category_enum_max_fields: {
    display_name: "String",
    name: "String",
  },
  product_category_enum_min_fields: {
    display_name: "String",
    name: "String",
  },
  product_category_enum_mutation_response: {
    affected_rows: "Int",
    returning: "product_category_enum",
  },
  product_max_fields: {
    brand: "String",
    category_display_name: "String",
    created_at: "timestamptz",
    description: "String",
    id: "Int",
    name: "String",
    price: "numeric",
    updated_at: "timestamptz",
  },
  product_min_fields: {
    brand: "String",
    category_display_name: "String",
    created_at: "timestamptz",
    description: "String",
    id: "Int",
    name: "String",
    price: "numeric",
    updated_at: "timestamptz",
  },
  product_mutation_response: {
    affected_rows: "Int",
    returning: "product",
  },
  product_review: {
    comment: "String",
    created_at: "timestamptz",
    id: "Int",
    product: "product",
    product_id: "Int",
    rating: "Int",
    updated_at: "timestamptz",
    user: "user",
    user_id: "Int",
  },
  product_review_aggregate: {
    aggregate: "product_review_aggregate_fields",
    nodes: "product_review",
  },
  product_review_aggregate_fields: {
    avg: "product_review_avg_fields",
    count: "Int",
    max: "product_review_max_fields",
    min: "product_review_min_fields",
    stddev: "product_review_stddev_fields",
    stddev_pop: "product_review_stddev_pop_fields",
    stddev_samp: "product_review_stddev_samp_fields",
    sum: "product_review_sum_fields",
    var_pop: "product_review_var_pop_fields",
    var_samp: "product_review_var_samp_fields",
    variance: "product_review_variance_fields",
  },
  product_review_avg_fields: {
    id: "Float",
    product_id: "Float",
    rating: "Float",
    user_id: "Float",
  },
  product_review_max_fields: {
    comment: "String",
    created_at: "timestamptz",
    id: "Int",
    product_id: "Int",
    rating: "Int",
    updated_at: "timestamptz",
    user_id: "Int",
  },
  product_review_min_fields: {
    comment: "String",
    created_at: "timestamptz",
    id: "Int",
    product_id: "Int",
    rating: "Int",
    updated_at: "timestamptz",
    user_id: "Int",
  },
  product_review_mutation_response: {
    affected_rows: "Int",
    returning: "product_review",
  },
  product_review_stddev_fields: {
    id: "Float",
    product_id: "Float",
    rating: "Float",
    user_id: "Float",
  },
  product_review_stddev_pop_fields: {
    id: "Float",
    product_id: "Float",
    rating: "Float",
    user_id: "Float",
  },
  product_review_stddev_samp_fields: {
    id: "Float",
    product_id: "Float",
    rating: "Float",
    user_id: "Float",
  },
  product_review_sum_fields: {
    id: "Int",
    product_id: "Int",
    rating: "Int",
    user_id: "Int",
  },
  product_review_var_pop_fields: {
    id: "Float",
    product_id: "Float",
    rating: "Float",
    user_id: "Float",
  },
  product_review_var_samp_fields: {
    id: "Float",
    product_id: "Float",
    rating: "Float",
    user_id: "Float",
  },
  product_review_variance_fields: {
    id: "Float",
    product_id: "Float",
    rating: "Float",
    user_id: "Float",
  },
  product_stddev_fields: {
    id: "Float",
    price: "Float",
  },
  product_stddev_pop_fields: {
    id: "Float",
    price: "Float",
  },
  product_stddev_samp_fields: {
    id: "Float",
    price: "Float",
  },
  product_sum_fields: {
    id: "Int",
    price: "numeric",
  },
  product_var_pop_fields: {
    id: "Float",
    price: "Float",
  },
  product_var_samp_fields: {
    id: "Float",
    price: "Float",
  },
  product_variance_fields: {
    id: "Float",
    price: "Float",
  },
  query_root: {
    address: "address",
    address_aggregate: "address_aggregate",
    address_by_pk: "address",
    adminLogin: "JWT",
    order: "order",
    order_aggregate: "order_aggregate",
    order_by_pk: "order",
    order_product: "order_product",
    order_product_aggregate: "order_product_aggregate",
    order_product_by_pk: "order_product",
    product: "product",
    product_aggregate: "product_aggregate",
    product_by_pk: "product",
    product_category_enum: "product_category_enum",
    product_category_enum_aggregate: "product_category_enum_aggregate",
    product_category_enum_by_pk: "product_category_enum",
    product_review: "product_review",
    product_review_aggregate: "product_review_aggregate",
    product_review_by_pk: "product_review",
    refreshToken: "RefreshTokenJWT",
    site_admin: "site_admin",
    site_admin_aggregate: "site_admin_aggregate",
    site_admin_by_pk: "site_admin",
    user: "user",
    user_aggregate: "user_aggregate",
    user_by_pk: "user",
  },
  RefreshTokenJWT: {
    token: "String",
  },
  site_admin: {
    created_at: "timestamptz",
    email: "String",
    id: "Int",
    password: "String",
    updated_at: "timestamptz",
  },
  site_admin_aggregate: {
    aggregate: "site_admin_aggregate_fields",
    nodes: "site_admin",
  },
  site_admin_aggregate_fields: {
    avg: "site_admin_avg_fields",
    count: "Int",
    max: "site_admin_max_fields",
    min: "site_admin_min_fields",
    stddev: "site_admin_stddev_fields",
    stddev_pop: "site_admin_stddev_pop_fields",
    stddev_samp: "site_admin_stddev_samp_fields",
    sum: "site_admin_sum_fields",
    var_pop: "site_admin_var_pop_fields",
    var_samp: "site_admin_var_samp_fields",
    variance: "site_admin_variance_fields",
  },
  site_admin_avg_fields: {
    id: "Float",
  },
  site_admin_max_fields: {
    created_at: "timestamptz",
    email: "String",
    id: "Int",
    password: "String",
    updated_at: "timestamptz",
  },
  site_admin_min_fields: {
    created_at: "timestamptz",
    email: "String",
    id: "Int",
    password: "String",
    updated_at: "timestamptz",
  },
  site_admin_mutation_response: {
    affected_rows: "Int",
    returning: "site_admin",
  },
  site_admin_stddev_fields: {
    id: "Float",
  },
  site_admin_stddev_pop_fields: {
    id: "Float",
  },
  site_admin_stddev_samp_fields: {
    id: "Float",
  },
  site_admin_sum_fields: {
    id: "Int",
  },
  site_admin_var_pop_fields: {
    id: "Float",
  },
  site_admin_var_samp_fields: {
    id: "Float",
  },
  site_admin_variance_fields: {
    id: "Float",
  },
  subscription_root: {
    address: "address",
    address_aggregate: "address_aggregate",
    address_by_pk: "address",
    adminLogin: "JWT",
    order: "order",
    order_aggregate: "order_aggregate",
    order_by_pk: "order",
    order_product: "order_product",
    order_product_aggregate: "order_product_aggregate",
    order_product_by_pk: "order_product",
    product: "product",
    product_aggregate: "product_aggregate",
    product_by_pk: "product",
    product_category_enum: "product_category_enum",
    product_category_enum_aggregate: "product_category_enum_aggregate",
    product_category_enum_by_pk: "product_category_enum",
    product_review: "product_review",
    product_review_aggregate: "product_review_aggregate",
    product_review_by_pk: "product_review",
    refreshToken: "RefreshTokenJWT",
    site_admin: "site_admin",
    site_admin_aggregate: "site_admin_aggregate",
    site_admin_by_pk: "site_admin",
    user: "user",
    user_aggregate: "user_aggregate",
    user_by_pk: "user",
  },
  user: {
    addresses: "address",
    addresses_aggregate: "address_aggregate",
    created_at: "timestamptz",
    email: "String",
    id: "Int",
    name: "String",
    orders: "order",
    orders_aggregate: "order_aggregate",
    password: "String",
    product_reviews: "product_review",
    product_reviews_aggregate: "product_review_aggregate",
    refresh_token: "String",
    updated_at: "timestamptz",
  },
  user_aggregate: {
    aggregate: "user_aggregate_fields",
    nodes: "user",
  },
  user_aggregate_fields: {
    avg: "user_avg_fields",
    count: "Int",
    max: "user_max_fields",
    min: "user_min_fields",
    stddev: "user_stddev_fields",
    stddev_pop: "user_stddev_pop_fields",
    stddev_samp: "user_stddev_samp_fields",
    sum: "user_sum_fields",
    var_pop: "user_var_pop_fields",
    var_samp: "user_var_samp_fields",
    variance: "user_variance_fields",
  },
  user_avg_fields: {
    id: "Float",
  },
  user_max_fields: {
    created_at: "timestamptz",
    email: "String",
    id: "Int",
    name: "String",
    password: "String",
    refresh_token: "String",
    updated_at: "timestamptz",
  },
  user_min_fields: {
    created_at: "timestamptz",
    email: "String",
    id: "Int",
    name: "String",
    password: "String",
    refresh_token: "String",
    updated_at: "timestamptz",
  },
  user_mutation_response: {
    affected_rows: "Int",
    returning: "user",
  },
  user_stddev_fields: {
    id: "Float",
  },
  user_stddev_pop_fields: {
    id: "Float",
  },
  user_stddev_samp_fields: {
    id: "Float",
  },
  user_sum_fields: {
    id: "Int",
  },
  user_var_pop_fields: {
    id: "Float",
  },
  user_var_samp_fields: {
    id: "Float",
  },
  user_variance_fields: {
    id: "Float",
  },
};

export class GraphQLError extends Error {
  constructor(public response: GraphQLResponse) {
    super("");
    console.error(response);
  }
  toString() {
    return "GraphQL Response Error";
  }
}

export type UnwrapPromise<T> = T extends Promise<infer R> ? R : T;
export type ZeusState<T extends (...args: any[]) => Promise<any>> = NonNullable<
  UnwrapPromise<ReturnType<T>>
>;
export type ZeusHook<
  T extends (
    ...args: any[]
  ) => Record<string, (...args: any[]) => Promise<any>>,
  N extends keyof ReturnType<T>
> = ZeusState<ReturnType<T>[N]>;

type Func<P extends any[], R> = (...args: P) => R;
type AnyFunc = Func<any, any>;

type WithTypeNameValue<T> = T & {
  __typename?: true;
};

type AliasType<T> = WithTypeNameValue<T> & {
  __alias?: Record<string, WithTypeNameValue<T>>;
};

type NotUndefined<T> = T extends undefined ? never : T;

export type ResolverType<F> = NotUndefined<
  F extends [infer ARGS, any] ? ARGS : undefined
>;

export type ArgsType<F extends AnyFunc> = F extends Func<infer P, any>
  ? P
  : never;

interface GraphQLResponse {
  data?: Record<string, any>;
  errors?: Array<{
    message: string;
  }>;
}

export type ValuesOf<T> = T[keyof T];

export type MapResolve<SRC, DST> = SRC extends {
  __interface: infer INTERFACE;
  __resolve: Record<string, { __typename?: string }> & infer IMPLEMENTORS;
}
  ? ValuesOf<{
      [k in keyof SRC["__resolve"] & keyof DST]: {
        [rk in keyof SRC["__resolve"][k] &
          keyof DST[k]]: LastMapTypeSRCResolver<
          SRC["__resolve"][k][rk],
          DST[k][rk]
        >;
      } & {
        __typename: SRC["__resolve"][k]["__typename"];
      };
    }>
  : never;

export type MapInterface<SRC, DST> = SRC extends {
  __interface: infer INTERFACE;
  __resolve: Record<string, { __typename?: string }> & infer IMPLEMENTORS;
}
  ? (MapResolve<SRC, DST> extends never ? {} : MapResolve<SRC, DST>) & {
      [k in keyof SRC["__interface"] & keyof DST]: LastMapTypeSRCResolver<
        SRC["__interface"][k],
        DST[k]
      >;
    }
  : never;

export type ValueToUnion<T> = T extends {
  __typename: infer R;
}
  ? {
      [P in keyof Omit<T, "__typename">]: T[P] & {
        __typename: R;
      };
    }
  : T;

export type ObjectToUnion<T> = {
  [P in keyof T]: T[P];
}[keyof T];

type Anify<T> = { [P in keyof T]?: any };

type LastMapTypeSRCResolver<SRC, DST> = SRC extends undefined
  ? undefined
  : SRC extends Array<infer AR>
  ? LastMapTypeSRCResolver<AR, DST>[]
  : SRC extends { __interface: any; __resolve: any }
  ? MapInterface<SRC, DST>
  : SRC extends { __union: any; __resolve: infer RESOLVE }
  ? ObjectToUnion<MapType<RESOLVE, ValueToUnion<DST>>>
  : DST extends boolean
  ? SRC
  : MapType<SRC, DST>;

export type MapType<SRC extends Anify<DST>, DST> = DST extends boolean
  ? SRC
  : DST extends {
      __alias: any;
    }
  ? {
      [A in keyof DST["__alias"]]: Required<SRC> extends Anify<
        DST["__alias"][A]
      >
        ? MapType<Required<SRC>, DST["__alias"][A]>
        : never;
    } & {
      [Key in keyof Omit<DST, "__alias">]: DST[Key] extends [any, infer PAYLOAD]
        ? LastMapTypeSRCResolver<SRC[Key], PAYLOAD>
        : LastMapTypeSRCResolver<SRC[Key], DST[Key]>;
    }
  : {
      [Key in keyof DST]: DST[Key] extends [any, infer PAYLOAD]
        ? LastMapTypeSRCResolver<SRC[Key], PAYLOAD>
        : LastMapTypeSRCResolver<SRC[Key], DST[Key]>;
    };

type OperationToGraphQL<V, T> = <Z extends V>(
  o: Z | V,
  variables?: Record<string, any>
) => Promise<MapType<T, Z>>;

type CastToGraphQL<V, T> = (
  resultOfYourQuery: any
) => <Z extends V>(o: Z | V) => MapType<T, Z>;

type fetchOptions = ArgsType<typeof fetch>;

export type SelectionFunction<V> = <T>(t: T | V) => T;
type FetchFunction = (
  query: string,
  variables?: Record<string, any>
) => Promise<any>;

export const ZeusSelect = <T>() => ((t: any) => t) as SelectionFunction<T>;

export const ScalarResolver = (scalar: string, value: any) => {
  switch (scalar) {
    case "String":
      return `${JSON.stringify(value)}`;
    case "Int":
      return `${value}`;
    case "Float":
      return `${value}`;
    case "Boolean":
      return `${value}`;
    case "ID":
      return `"${value}"`;
    case "enum":
      return `${value}`;
    case "scalar":
      return `${value}`;
    default:
      return false;
  }
};

export const TypesPropsResolver = ({
  value,
  type,
  name,
  key,
  blockArrays,
}: {
  value: any;
  type: string;
  name: string;
  key?: string;
  blockArrays?: boolean;
}): string => {
  if (value === null) {
    return `null`;
  }
  let resolvedValue = AllTypesProps[type][name];
  if (key) {
    resolvedValue = resolvedValue[key];
  }
  if (!resolvedValue) {
    throw new Error(`Cannot resolve ${type} ${name}${key ? ` ${key}` : ""}`);
  }
  const typeResolved = resolvedValue.type;
  const isArray = resolvedValue.array;
  const isArrayRequired = resolvedValue.arrayRequired;
  if (typeof value === "string" && value.startsWith(`ZEUS_VAR$`)) {
    const isRequired = resolvedValue.required ? "!" : "";
    let t = `${typeResolved}`;
    if (isArray) {
      if (isRequired) {
        t = `${t}!`;
      }
      t = `[${t}]`;
      if (isArrayRequired) {
        t = `${t}!`;
      }
    } else {
      if (isRequired) {
        t = `${t}!`;
      }
    }
    return `\$${value.split(`ZEUS_VAR$`)[1]}__ZEUS_VAR__${t}`;
  }
  if (isArray && !blockArrays) {
    return `[${value
      .map((v: any) =>
        TypesPropsResolver({ value: v, type, name, key, blockArrays: true })
      )
      .join(",")}]`;
  }
  const reslovedScalar = ScalarResolver(typeResolved, value);
  if (!reslovedScalar) {
    const resolvedType = AllTypesProps[typeResolved];
    if (typeof resolvedType === "object") {
      const argsKeys = Object.keys(resolvedType);
      return `{${argsKeys
        .filter((ak) => value[ak] !== undefined)
        .map(
          (ak) =>
            `${ak}:${TypesPropsResolver({
              value: value[ak],
              type: typeResolved,
              name: ak,
            })}`
        )}}`;
    }
    return ScalarResolver(AllTypesProps[typeResolved], value) as string;
  }
  return reslovedScalar;
};

const isArrayFunction = (parent: string[], a: any[]) => {
  const [values, r] = a;
  const [mainKey, key, ...keys] = parent;
  const keyValues = Object.keys(values).filter(
    (k) => typeof values[k] !== "undefined"
  );

  if (!keys.length) {
    return keyValues.length > 0
      ? `(${keyValues
          .map(
            (v) =>
              `${v}:${TypesPropsResolver({
                value: values[v],
                type: mainKey,
                name: key,
                key: v,
              })}`
          )
          .join(",")})${r ? traverseToSeekArrays(parent, r) : ""}`
      : traverseToSeekArrays(parent, r);
  }

  const [typeResolverKey] = keys.splice(keys.length - 1, 1);
  let valueToResolve = ReturnTypes[mainKey][key];
  for (const k of keys) {
    valueToResolve = ReturnTypes[valueToResolve][k];
  }

  const argumentString =
    keyValues.length > 0
      ? `(${keyValues
          .map(
            (v) =>
              `${v}:${TypesPropsResolver({
                value: values[v],
                type: valueToResolve,
                name: typeResolverKey,
                key: v,
              })}`
          )
          .join(",")})${r ? traverseToSeekArrays(parent, r) : ""}`
      : traverseToSeekArrays(parent, r);
  return argumentString;
};

const resolveKV = (
  k: string,
  v: boolean | string | { [x: string]: boolean | string }
) =>
  typeof v === "boolean"
    ? k
    : typeof v === "object"
    ? `${k}{${objectToTree(v)}}`
    : `${k}${v}`;

const objectToTree = (o: { [x: string]: boolean | string }): string =>
  `{${Object.keys(o)
    .map((k) => `${resolveKV(k, o[k])}`)
    .join(" ")}}`;

const traverseToSeekArrays = (parent: string[], a?: any): string => {
  if (!a) return "";
  if (Object.keys(a).length === 0) {
    return "";
  }
  let b: Record<string, any> = {};
  if (Array.isArray(a)) {
    return isArrayFunction([...parent], a);
  } else {
    if (typeof a === "object") {
      Object.keys(a)
        .filter((k) => typeof a[k] !== "undefined")
        .map((k) => {
          if (k === "__alias") {
            Object.keys(a[k]).map((aliasKey) => {
              const aliasOperations = a[k][aliasKey];
              const aliasOperationName = Object.keys(aliasOperations)[0];
              const aliasOperation = aliasOperations[aliasOperationName];
              b[
                `${aliasOperationName}__alias__${aliasKey}: ${aliasOperationName}`
              ] = traverseToSeekArrays(
                [...parent, aliasOperationName],
                aliasOperation
              );
            });
          } else {
            b[k] = traverseToSeekArrays([...parent, k], a[k]);
          }
        });
    } else {
      return "";
    }
  }
  return objectToTree(b);
};

const buildQuery = (type: string, a?: Record<any, any>) =>
  traverseToSeekArrays([type], a);

const inspectVariables = (query: string) => {
  const regex = /\$\b\w*__ZEUS_VAR__\[?[^!^\]^\s^,^\)^\}]*[!]?[\]]?[!]?/g;
  let result;
  const AllVariables: string[] = [];
  while ((result = regex.exec(query))) {
    if (AllVariables.includes(result[0])) {
      continue;
    }
    AllVariables.push(result[0]);
  }
  if (!AllVariables.length) {
    return query;
  }
  let filteredQuery = query;
  AllVariables.forEach((variable) => {
    while (filteredQuery.includes(variable)) {
      filteredQuery = filteredQuery.replace(
        variable,
        variable.split("__ZEUS_VAR__")[0]
      );
    }
  });
  return `(${AllVariables.map((a) => a.split("__ZEUS_VAR__"))
    .map(([variableName, variableType]) => `${variableName}:${variableType}`)
    .join(", ")})${filteredQuery}`;
};

const queryConstruct =
  (t: "query" | "mutation" | "subscription", tName: string) =>
  (o: Record<any, any>) =>
    `${t.toLowerCase()}${inspectVariables(buildQuery(tName, o))}`;

const fullChainConstruct =
  (fn: FetchFunction) =>
  (t: "query" | "mutation" | "subscription", tName: string) =>
  (o: Record<any, any>, variables?: Record<string, any>) =>
    fn(queryConstruct(t, tName)(o), variables).then((r: any) => {
      seekForAliases(r);
      return r;
    });

const seekForAliases = (response: any) => {
  const traverseAlias = (value: any) => {
    if (Array.isArray(value)) {
      value.forEach(seekForAliases);
    } else {
      if (typeof value === "object") {
        seekForAliases(value);
      }
    }
  };
  if (typeof response === "object" && response) {
    const keys = Object.keys(response);
    if (keys.length < 1) {
      return;
    }
    keys.forEach((k) => {
      const value = response[k];
      if (k.indexOf("__alias__") !== -1) {
        const [operation, alias] = k.split("__alias__");
        response[alias] = {
          [operation]: value,
        };
        delete response[k];
      }
      traverseAlias(value);
    });
  }
};

export const $ = (t: TemplateStringsArray): any => `ZEUS_VAR$${t.join("")}`;

const handleFetchResponse = (
  response: Parameters<
    Extract<Parameters<ReturnType<typeof fetch>["then"]>[0], Function>
  >[0]
): Promise<GraphQLResponse> => {
  if (!response.ok) {
    return new Promise((_, reject) => {
      response
        .text()
        .then((text) => {
          try {
            reject(JSON.parse(text));
          } catch (err) {
            reject(text);
          }
        })
        .catch(reject);
    });
  }
  return response.json();
};

const apiFetch =
  (options: fetchOptions) =>
  (query: string, variables: Record<string, any> = {}) => {
    let fetchFunction;
    let queryString = query;
    let fetchOptions = options[1] || {};
    try {
      fetchFunction = require("node-fetch");
    } catch (error) {
      throw new Error(
        "Please install 'node-fetch' to use zeus in nodejs environment"
      );
    }
    if (fetchOptions.method && fetchOptions.method === "GET") {
      try {
        queryString = require("querystring").stringify(query);
      } catch (error) {
        throw new Error(
          "Something gone wrong 'querystring' is a part of nodejs environment"
        );
      }
      return fetchFunction(`${options[0]}?query=${queryString}`, fetchOptions)
        .then(handleFetchResponse)
        .then((response: GraphQLResponse) => {
          if (response.errors) {
            throw new GraphQLError(response);
          }
          return response.data;
        });
    }
    return fetchFunction(`${options[0]}`, {
      body: JSON.stringify({ query: queryString, variables }),
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      ...fetchOptions,
    })
      .then(handleFetchResponse)
      .then((response: GraphQLResponse) => {
        if (response.errors) {
          throw new GraphQLError(response);
        }
        return response.data;
      });
  };

export const Thunder = (fn: FetchFunction) => ({
  query: ((o: any, variables) =>
    fullChainConstruct(fn)("query", "query_root")(o, variables).then(
      (response: any) => response
    )) as OperationToGraphQL<ValueTypes["query_root"], query_root>,
  mutation: ((o: any, variables) =>
    fullChainConstruct(fn)("mutation", "mutation_root")(o, variables).then(
      (response: any) => response
    )) as OperationToGraphQL<ValueTypes["mutation_root"], mutation_root>,
  subscription: ((o: any, variables) =>
    fullChainConstruct(fn)("subscription", "subscription_root")(
      o,
      variables
    ).then((response: any) => response)) as OperationToGraphQL<
    ValueTypes["subscription_root"],
    subscription_root
  >,
});

export const Chain = (...options: fetchOptions) => ({
  query: ((o: any, variables) =>
    fullChainConstruct(apiFetch(options))("query", "query_root")(
      o,
      variables
    ).then((response: any) => response)) as OperationToGraphQL<
    ValueTypes["query_root"],
    query_root
  >,
  mutation: ((o: any, variables) =>
    fullChainConstruct(apiFetch(options))("mutation", "mutation_root")(
      o,
      variables
    ).then((response: any) => response)) as OperationToGraphQL<
    ValueTypes["mutation_root"],
    mutation_root
  >,
  subscription: ((o: any, variables) =>
    fullChainConstruct(apiFetch(options))("subscription", "subscription_root")(
      o,
      variables
    ).then((response: any) => response)) as OperationToGraphQL<
    ValueTypes["subscription_root"],
    subscription_root
  >,
});
export const Zeus = {
  query: (o: ValueTypes["query_root"]) =>
    queryConstruct("query", "query_root")(o),
  mutation: (o: ValueTypes["mutation_root"]) =>
    queryConstruct("mutation", "mutation_root")(o),
  subscription: (o: ValueTypes["subscription_root"]) =>
    queryConstruct("subscription", "subscription_root")(o),
};
export const Cast = {
  query: ((o: any) => (_: any) => o) as CastToGraphQL<
    ValueTypes["query_root"],
    query_root
  >,
  mutation: ((o: any) => (_: any) => o) as CastToGraphQL<
    ValueTypes["mutation_root"],
    mutation_root
  >,
  subscription: ((o: any) => (_: any) => o) as CastToGraphQL<
    ValueTypes["subscription_root"],
    subscription_root
  >,
};
export const Selectors = {
  query: ZeusSelect<ValueTypes["query_root"]>(),
  mutation: ZeusSelect<ValueTypes["mutation_root"]>(),
  subscription: ZeusSelect<ValueTypes["subscription_root"]>(),
};

export const Gql = Chain("http://localhost:8080/v1/graphql");

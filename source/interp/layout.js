//
// Code auto-generated from "interp/layout.py". Do not modify.
//

var $rt_LAYOUT_STR = 0;

function $rt_str_ofs_header(o)
{    
    return 0;
}

function $rt_str_ofs_len(o)
{    
    return $ir_add_i32(0, 4);
}

function $rt_str_ofs_hash(o)
{    
    return $ir_add_i32($ir_add_i32(0, 4), 4);
}

function $rt_str_ofs_data(o, i)
{    
    return $ir_add_i32($ir_add_i32($ir_add_i32($ir_add_i32(0, 4), 4), 4), $ir_mul_i32(2, i));
}

function $rt_str_get_header(o)
{    
    return $ir_load_u32(o, $rt_str_ofs_header(o));
}

function $rt_str_get_len(o)
{    
    return $ir_load_u32(o, $rt_str_ofs_len(o));
}

function $rt_str_get_hash(o)
{    
    return $ir_load_u32(o, $rt_str_ofs_hash(o));
}

function $rt_str_get_data(o, i)
{    
    return $ir_load_u16(o, $rt_str_ofs_data(o, i));
}

function $rt_str_set_header(o, v)
{    
    $ir_store_u32(o, $rt_str_ofs_header(o), v);
}

function $rt_str_set_len(o, v)
{    
    $ir_store_u32(o, $rt_str_ofs_len(o), v);
}

function $rt_str_set_hash(o, v)
{    
    $ir_store_u32(o, $rt_str_ofs_hash(o), v);
}

function $rt_str_set_data(o, i, v)
{    
    $ir_store_u16(o, $rt_str_ofs_data(o, i), v);
}

function $rt_str_comp_size(len)
{    
    return $ir_add_i32($ir_add_i32($ir_add_i32($ir_add_i32(0, 4), 4), 4), $ir_mul_i32(2, len));
}

function $rt_str_sizeof(o)
{    
    return $rt_str_comp_size($rt_str_get_len(o));
}

function $rt_str_alloc(len)
{    
    var o = $ir_heap_alloc($rt_str_comp_size(len));
    $rt_str_set_len(o, len);
    $rt_str_set_header(o, 0);
    return o;
}

function $rt_str_visit_gc(o)
{
}

var $rt_LAYOUT_STRTBL = 1;

function $rt_strtbl_ofs_header(o)
{    
    return 0;
}

function $rt_strtbl_ofs_cap(o)
{    
    return $ir_add_i32(0, 4);
}

function $rt_strtbl_ofs_num_strs(o)
{    
    return $ir_add_i32($ir_add_i32(0, 4), 4);
}

function $rt_strtbl_ofs_str(o, i)
{    
    return $ir_add_i32($ir_add_i32($ir_add_i32($ir_add_i32($ir_add_i32(0, 4), 4), 4), 4), $ir_mul_i32(8, i));
}

function $rt_strtbl_get_header(o)
{    
    return $ir_load_u32(o, $rt_strtbl_ofs_header(o));
}

function $rt_strtbl_get_cap(o)
{    
    return $ir_load_u32(o, $rt_strtbl_ofs_cap(o));
}

function $rt_strtbl_get_num_strs(o)
{    
    return $ir_load_u32(o, $rt_strtbl_ofs_num_strs(o));
}

function $rt_strtbl_get_str(o, i)
{    
    return $ir_load_refptr(o, $rt_strtbl_ofs_str(o, i));
}

function $rt_strtbl_set_header(o, v)
{    
    $ir_store_u32(o, $rt_strtbl_ofs_header(o), v);
}

function $rt_strtbl_set_cap(o, v)
{    
    $ir_store_u32(o, $rt_strtbl_ofs_cap(o), v);
}

function $rt_strtbl_set_num_strs(o, v)
{    
    $ir_store_u32(o, $rt_strtbl_ofs_num_strs(o), v);
}

function $rt_strtbl_set_str(o, i, v)
{    
    $ir_store_refptr(o, $rt_strtbl_ofs_str(o, i), v);
}

function $rt_strtbl_comp_size(cap)
{    
    return $ir_add_i32($ir_add_i32($ir_add_i32($ir_add_i32($ir_add_i32(0, 4), 4), 4), 4), $ir_mul_i32(8, cap));
}

function $rt_strtbl_sizeof(o)
{    
    return $rt_strtbl_comp_size($rt_strtbl_get_cap(o));
}

function $rt_strtbl_alloc(cap)
{    
    var o = $ir_heap_alloc($rt_strtbl_comp_size(cap));
    $rt_strtbl_set_cap(o, cap);
    $rt_strtbl_set_header(o, 1);
    $rt_strtbl_set_num_strs(o, 0);
    for (var i = 0; i < cap; ++i)
    {    
        $rt_strtbl_set_str(o, i, null);
    }
    return o;
}

function $rt_strtbl_visit_gc(o)
{    
    var cap = $rt_strtbl_get_cap(o);
    for (var i = 0; i < cap; ++i)
    {    
        $rt_strtbl_set_str(o, i, $rt_gcForward(interp, $rt_strtbl_get_str(o, i)));
    }
}

var $rt_LAYOUT_OBJ = 2;

function $rt_obj_ofs_header(o)
{    
    return 0;
}

function $rt_obj_ofs_cap(o)
{    
    return $ir_add_i32(0, 4);
}

function $rt_obj_ofs_class(o)
{    
    return $ir_add_i32($ir_add_i32(0, 4), 4);
}

function $rt_obj_ofs_next(o)
{    
    return $ir_add_i32($ir_add_i32($ir_add_i32(0, 4), 4), 8);
}

function $rt_obj_ofs_proto(o)
{    
    return $ir_add_i32($ir_add_i32($ir_add_i32($ir_add_i32(0, 4), 4), 8), 8);
}

function $rt_obj_ofs_word(o, i)
{    
    return $ir_add_i32($ir_add_i32($ir_add_i32($ir_add_i32($ir_add_i32($ir_add_i32(0, 4), 4), 8), 8), 8), $ir_mul_i32(8, i));
}

function $rt_obj_ofs_type(o, i)
{    
    return $ir_add_i32($ir_add_i32($ir_add_i32($ir_add_i32($ir_add_i32($ir_add_i32($ir_add_i32(0, 4), 4), 8), 8), 8), $ir_mul_i32(8, $rt_obj_get_cap(o))), $ir_mul_i32(1, i));
}

function $rt_obj_get_header(o)
{    
    return $ir_load_u32(o, $rt_obj_ofs_header(o));
}

function $rt_obj_get_cap(o)
{    
    return $ir_load_u32(o, $rt_obj_ofs_cap(o));
}

function $rt_obj_get_class(o)
{    
    return $ir_load_refptr(o, $rt_obj_ofs_class(o));
}

function $rt_obj_get_next(o)
{    
    return $ir_load_refptr(o, $rt_obj_ofs_next(o));
}

function $rt_obj_get_proto(o)
{    
    return $ir_load_refptr(o, $rt_obj_ofs_proto(o));
}

function $rt_obj_get_word(o, i)
{    
    return $ir_load_u64(o, $rt_obj_ofs_word(o, i));
}

function $rt_obj_get_type(o, i)
{    
    return $ir_load_u8(o, $rt_obj_ofs_type(o, i));
}

function $rt_obj_set_header(o, v)
{    
    $ir_store_u32(o, $rt_obj_ofs_header(o), v);
}

function $rt_obj_set_cap(o, v)
{    
    $ir_store_u32(o, $rt_obj_ofs_cap(o), v);
}

function $rt_obj_set_class(o, v)
{    
    $ir_store_refptr(o, $rt_obj_ofs_class(o), v);
}

function $rt_obj_set_next(o, v)
{    
    $ir_store_refptr(o, $rt_obj_ofs_next(o), v);
}

function $rt_obj_set_proto(o, v)
{    
    $ir_store_refptr(o, $rt_obj_ofs_proto(o), v);
}

function $rt_obj_set_word(o, i, v)
{    
    $ir_store_u64(o, $rt_obj_ofs_word(o, i), v);
}

function $rt_obj_set_type(o, i, v)
{    
    $ir_store_u8(o, $rt_obj_ofs_type(o, i), v);
}

function $rt_obj_comp_size(cap)
{    
    return $ir_add_i32($ir_add_i32($ir_add_i32($ir_add_i32($ir_add_i32($ir_add_i32($ir_add_i32(0, 4), 4), 8), 8), 8), $ir_mul_i32(8, cap)), $ir_mul_i32(1, cap));
}

function $rt_obj_sizeof(o)
{    
    return $rt_obj_comp_size($rt_obj_get_cap(o));
}

function $rt_obj_alloc(cap)
{    
    var o = $ir_heap_alloc($rt_obj_comp_size(cap));
    $rt_obj_set_cap(o, cap);
    $rt_obj_set_header(o, 2);
    $rt_obj_set_next(o, null);
    for (var i = 0; i < cap; ++i)
    {    
        $rt_obj_set_word(o, i, $ir_get_word(undefined));
    }
    for (var i = 0; i < cap; ++i)
    {    
        $rt_obj_set_type(o, i, $ir_get_type(undefined));
    }
    return o;
}

function $rt_obj_visit_gc(o)
{    
    $rt_obj_set_class(o, $rt_gcForward(interp, $rt_obj_get_class(o)));
    $rt_obj_set_next(o, $rt_gcForward(interp, $rt_obj_get_next(o)));
    $rt_obj_set_proto(o, $rt_gcForward(interp, $rt_obj_get_proto(o)));
    var cap = $rt_obj_get_cap(o);
    for (var i = 0; i < cap; ++i)
    {    
        $rt_obj_set_word(o, i, $rt_gcForward(interp, $rt_obj_get_word(o, i), $rt_obj_get_type(o, i)));
    }
}

var $rt_LAYOUT_CLOS = 3;

function $rt_clos_ofs_header(o)
{    
    return 0;
}

function $rt_clos_ofs_cap(o)
{    
    return $ir_add_i32(0, 4);
}

function $rt_clos_ofs_class(o)
{    
    return $ir_add_i32($ir_add_i32(0, 4), 4);
}

function $rt_clos_ofs_next(o)
{    
    return $ir_add_i32($ir_add_i32($ir_add_i32(0, 4), 4), 8);
}

function $rt_clos_ofs_proto(o)
{    
    return $ir_add_i32($ir_add_i32($ir_add_i32($ir_add_i32(0, 4), 4), 8), 8);
}

function $rt_clos_ofs_word(o, i)
{    
    return $ir_add_i32($ir_add_i32($ir_add_i32($ir_add_i32($ir_add_i32($ir_add_i32(0, 4), 4), 8), 8), 8), $ir_mul_i32(8, i));
}

function $rt_clos_ofs_type(o, i)
{    
    return $ir_add_i32($ir_add_i32($ir_add_i32($ir_add_i32($ir_add_i32($ir_add_i32($ir_add_i32(0, 4), 4), 8), 8), 8), $ir_mul_i32(8, $rt_clos_get_cap(o))), $ir_mul_i32(1, i));
}

function $rt_clos_ofs_fptr(o)
{    
    return $ir_and_i32($ir_add_i32($ir_add_i32($ir_add_i32($ir_add_i32($ir_add_i32($ir_add_i32($ir_add_i32($ir_add_i32(0, 4), 4), 8), 8), 8), $ir_mul_i32(8, $rt_clos_get_cap(o))), $ir_mul_i32(1, $rt_clos_get_cap(o))), 7), -8);
}

function $rt_clos_ofs_ctor_class(o)
{    
    return $ir_add_i32($ir_and_i32($ir_add_i32($ir_add_i32($ir_add_i32($ir_add_i32($ir_add_i32($ir_add_i32($ir_add_i32($ir_add_i32(0, 4), 4), 8), 8), 8), $ir_mul_i32(8, $rt_clos_get_cap(o))), $ir_mul_i32(1, $rt_clos_get_cap(o))), 7), -8), 8);
}

function $rt_clos_ofs_num_cells(o)
{    
    return $ir_add_i32($ir_add_i32($ir_and_i32($ir_add_i32($ir_add_i32($ir_add_i32($ir_add_i32($ir_add_i32($ir_add_i32($ir_add_i32($ir_add_i32(0, 4), 4), 8), 8), 8), $ir_mul_i32(8, $rt_clos_get_cap(o))), $ir_mul_i32(1, $rt_clos_get_cap(o))), 7), -8), 8), 8);
}

function $rt_clos_ofs_cell(o, i)
{    
    return $ir_add_i32($ir_add_i32($ir_add_i32($ir_add_i32($ir_add_i32($ir_and_i32($ir_add_i32($ir_add_i32($ir_add_i32($ir_add_i32($ir_add_i32($ir_add_i32($ir_add_i32($ir_add_i32(0, 4), 4), 8), 8), 8), $ir_mul_i32(8, $rt_clos_get_cap(o))), $ir_mul_i32(1, $rt_clos_get_cap(o))), 7), -8), 8), 8), 4), 4), $ir_mul_i32(8, i));
}

function $rt_clos_get_header(o)
{    
    return $ir_load_u32(o, $rt_clos_ofs_header(o));
}

function $rt_clos_get_cap(o)
{    
    return $ir_load_u32(o, $rt_clos_ofs_cap(o));
}

function $rt_clos_get_class(o)
{    
    return $ir_load_refptr(o, $rt_clos_ofs_class(o));
}

function $rt_clos_get_next(o)
{    
    return $ir_load_refptr(o, $rt_clos_ofs_next(o));
}

function $rt_clos_get_proto(o)
{    
    return $ir_load_refptr(o, $rt_clos_ofs_proto(o));
}

function $rt_clos_get_word(o, i)
{    
    return $ir_load_u64(o, $rt_clos_ofs_word(o, i));
}

function $rt_clos_get_type(o, i)
{    
    return $ir_load_u8(o, $rt_clos_ofs_type(o, i));
}

function $rt_clos_get_fptr(o)
{    
    return $ir_load_funptr(o, $rt_clos_ofs_fptr(o));
}

function $rt_clos_get_ctor_class(o)
{    
    return $ir_load_refptr(o, $rt_clos_ofs_ctor_class(o));
}

function $rt_clos_get_num_cells(o)
{    
    return $ir_load_u32(o, $rt_clos_ofs_num_cells(o));
}

function $rt_clos_get_cell(o, i)
{    
    return $ir_load_refptr(o, $rt_clos_ofs_cell(o, i));
}

function $rt_clos_set_header(o, v)
{    
    $ir_store_u32(o, $rt_clos_ofs_header(o), v);
}

function $rt_clos_set_cap(o, v)
{    
    $ir_store_u32(o, $rt_clos_ofs_cap(o), v);
}

function $rt_clos_set_class(o, v)
{    
    $ir_store_refptr(o, $rt_clos_ofs_class(o), v);
}

function $rt_clos_set_next(o, v)
{    
    $ir_store_refptr(o, $rt_clos_ofs_next(o), v);
}

function $rt_clos_set_proto(o, v)
{    
    $ir_store_refptr(o, $rt_clos_ofs_proto(o), v);
}

function $rt_clos_set_word(o, i, v)
{    
    $ir_store_u64(o, $rt_clos_ofs_word(o, i), v);
}

function $rt_clos_set_type(o, i, v)
{    
    $ir_store_u8(o, $rt_clos_ofs_type(o, i), v);
}

function $rt_clos_set_fptr(o, v)
{    
    $ir_store_funptr(o, $rt_clos_ofs_fptr(o), v);
}

function $rt_clos_set_ctor_class(o, v)
{    
    $ir_store_refptr(o, $rt_clos_ofs_ctor_class(o), v);
}

function $rt_clos_set_num_cells(o, v)
{    
    $ir_store_u32(o, $rt_clos_ofs_num_cells(o), v);
}

function $rt_clos_set_cell(o, i, v)
{    
    $ir_store_refptr(o, $rt_clos_ofs_cell(o, i), v);
}

function $rt_clos_comp_size(cap, num_cells)
{    
    return $ir_add_i32($ir_add_i32($ir_add_i32($ir_add_i32($ir_add_i32($ir_and_i32($ir_add_i32($ir_add_i32($ir_add_i32($ir_add_i32($ir_add_i32($ir_add_i32($ir_add_i32($ir_add_i32(0, 4), 4), 8), 8), 8), $ir_mul_i32(8, cap)), $ir_mul_i32(1, cap)), 7), -8), 8), 8), 4), 4), $ir_mul_i32(8, num_cells));
}

function $rt_clos_sizeof(o)
{    
    return $rt_clos_comp_size($rt_clos_get_cap(o), $rt_clos_get_num_cells(o));
}

function $rt_clos_alloc(cap, num_cells)
{    
    var o = $ir_heap_alloc($rt_clos_comp_size(cap, num_cells));
    $rt_clos_set_cap(o, cap);
    $rt_clos_set_num_cells(o, num_cells);
    $rt_clos_set_header(o, 3);
    $rt_clos_set_next(o, null);
    for (var i = 0; i < cap; ++i)
    {    
        $rt_clos_set_word(o, i, $ir_get_word(undefined));
    }
    for (var i = 0; i < cap; ++i)
    {    
        $rt_clos_set_type(o, i, $ir_get_type(undefined));
    }
    $rt_clos_set_ctor_class(o, null);
    for (var i = 0; i < num_cells; ++i)
    {    
        $rt_clos_set_cell(o, i, null);
    }
    return o;
}

function $rt_clos_visit_gc(o)
{    
    $rt_clos_set_class(o, $rt_gcForward(interp, $rt_clos_get_class(o)));
    $rt_clos_set_next(o, $rt_gcForward(interp, $rt_clos_get_next(o)));
    $rt_clos_set_proto(o, $rt_gcForward(interp, $rt_clos_get_proto(o)));
    var cap = $rt_clos_get_cap(o);
    for (var i = 0; i < cap; ++i)
    {    
        $rt_clos_set_word(o, i, $rt_gcForward(interp, $rt_clos_get_word(o, i), $rt_clos_get_type(o, i)));
    }
    $rt_clos_set_ctor_class(o, $rt_gcForward(interp, $rt_clos_get_ctor_class(o)));
    var num_cells = $rt_clos_get_num_cells(o);
    for (var i = 0; i < num_cells; ++i)
    {    
        $rt_clos_set_cell(o, i, $rt_gcForward(interp, $rt_clos_get_cell(o, i)));
    }
}

var $rt_LAYOUT_CELL = 4;

function $rt_cell_ofs_header(o)
{    
    return 0;
}

function $rt_cell_ofs_word(o)
{    
    return $ir_add_i32($ir_add_i32(0, 4), 4);
}

function $rt_cell_ofs_type(o)
{    
    return $ir_add_i32($ir_add_i32($ir_add_i32(0, 4), 4), 8);
}

function $rt_cell_get_header(o)
{    
    return $ir_load_u32(o, $rt_cell_ofs_header(o));
}

function $rt_cell_get_word(o)
{    
    return $ir_load_u64(o, $rt_cell_ofs_word(o));
}

function $rt_cell_get_type(o)
{    
    return $ir_load_u8(o, $rt_cell_ofs_type(o));
}

function $rt_cell_set_header(o, v)
{    
    $ir_store_u32(o, $rt_cell_ofs_header(o), v);
}

function $rt_cell_set_word(o, v)
{    
    $ir_store_u64(o, $rt_cell_ofs_word(o), v);
}

function $rt_cell_set_type(o, v)
{    
    $ir_store_u8(o, $rt_cell_ofs_type(o), v);
}

function $rt_cell_comp_size()
{    
    return $ir_add_i32($ir_add_i32($ir_add_i32($ir_add_i32(0, 4), 4), 8), 1);
}

function $rt_cell_sizeof(o)
{    
    return $rt_cell_comp_size();
}

function $rt_cell_alloc()
{    
    var o = $ir_heap_alloc($rt_cell_comp_size());
    $rt_cell_set_header(o, 4);
    $rt_cell_set_word(o, $ir_get_word(undefined));
    $rt_cell_set_type(o, $ir_get_type(undefined));
    return o;
}

function $rt_cell_visit_gc(o)
{    
    $rt_cell_set_word(o, $rt_gcForward(interp, $rt_cell_get_word(o), $rt_cell_get_type(o)));
}

var $rt_LAYOUT_ARR = 5;

function $rt_arr_ofs_header(o)
{    
    return 0;
}

function $rt_arr_ofs_cap(o)
{    
    return $ir_add_i32(0, 4);
}

function $rt_arr_ofs_class(o)
{    
    return $ir_add_i32($ir_add_i32(0, 4), 4);
}

function $rt_arr_ofs_next(o)
{    
    return $ir_add_i32($ir_add_i32($ir_add_i32(0, 4), 4), 8);
}

function $rt_arr_ofs_proto(o)
{    
    return $ir_add_i32($ir_add_i32($ir_add_i32($ir_add_i32(0, 4), 4), 8), 8);
}

function $rt_arr_ofs_word(o, i)
{    
    return $ir_add_i32($ir_add_i32($ir_add_i32($ir_add_i32($ir_add_i32($ir_add_i32(0, 4), 4), 8), 8), 8), $ir_mul_i32(8, i));
}

function $rt_arr_ofs_type(o, i)
{    
    return $ir_add_i32($ir_add_i32($ir_add_i32($ir_add_i32($ir_add_i32($ir_add_i32($ir_add_i32(0, 4), 4), 8), 8), 8), $ir_mul_i32(8, $rt_arr_get_cap(o))), $ir_mul_i32(1, i));
}

function $rt_arr_ofs_tbl(o)
{    
    return $ir_and_i32($ir_add_i32($ir_add_i32($ir_add_i32($ir_add_i32($ir_add_i32($ir_add_i32($ir_add_i32($ir_add_i32(0, 4), 4), 8), 8), 8), $ir_mul_i32(8, $rt_arr_get_cap(o))), $ir_mul_i32(1, $rt_arr_get_cap(o))), 7), -8);
}

function $rt_arr_ofs_len(o)
{    
    return $ir_add_i32($ir_and_i32($ir_add_i32($ir_add_i32($ir_add_i32($ir_add_i32($ir_add_i32($ir_add_i32($ir_add_i32($ir_add_i32(0, 4), 4), 8), 8), 8), $ir_mul_i32(8, $rt_arr_get_cap(o))), $ir_mul_i32(1, $rt_arr_get_cap(o))), 7), -8), 8);
}

function $rt_arr_get_header(o)
{    
    return $ir_load_u32(o, $rt_arr_ofs_header(o));
}

function $rt_arr_get_cap(o)
{    
    return $ir_load_u32(o, $rt_arr_ofs_cap(o));
}

function $rt_arr_get_class(o)
{    
    return $ir_load_refptr(o, $rt_arr_ofs_class(o));
}

function $rt_arr_get_next(o)
{    
    return $ir_load_refptr(o, $rt_arr_ofs_next(o));
}

function $rt_arr_get_proto(o)
{    
    return $ir_load_refptr(o, $rt_arr_ofs_proto(o));
}

function $rt_arr_get_word(o, i)
{    
    return $ir_load_u64(o, $rt_arr_ofs_word(o, i));
}

function $rt_arr_get_type(o, i)
{    
    return $ir_load_u8(o, $rt_arr_ofs_type(o, i));
}

function $rt_arr_get_tbl(o)
{    
    return $ir_load_refptr(o, $rt_arr_ofs_tbl(o));
}

function $rt_arr_get_len(o)
{    
    return $ir_load_u32(o, $rt_arr_ofs_len(o));
}

function $rt_arr_set_header(o, v)
{    
    $ir_store_u32(o, $rt_arr_ofs_header(o), v);
}

function $rt_arr_set_cap(o, v)
{    
    $ir_store_u32(o, $rt_arr_ofs_cap(o), v);
}

function $rt_arr_set_class(o, v)
{    
    $ir_store_refptr(o, $rt_arr_ofs_class(o), v);
}

function $rt_arr_set_next(o, v)
{    
    $ir_store_refptr(o, $rt_arr_ofs_next(o), v);
}

function $rt_arr_set_proto(o, v)
{    
    $ir_store_refptr(o, $rt_arr_ofs_proto(o), v);
}

function $rt_arr_set_word(o, i, v)
{    
    $ir_store_u64(o, $rt_arr_ofs_word(o, i), v);
}

function $rt_arr_set_type(o, i, v)
{    
    $ir_store_u8(o, $rt_arr_ofs_type(o, i), v);
}

function $rt_arr_set_tbl(o, v)
{    
    $ir_store_refptr(o, $rt_arr_ofs_tbl(o), v);
}

function $rt_arr_set_len(o, v)
{    
    $ir_store_u32(o, $rt_arr_ofs_len(o), v);
}

function $rt_arr_comp_size(cap)
{    
    return $ir_add_i32($ir_add_i32($ir_and_i32($ir_add_i32($ir_add_i32($ir_add_i32($ir_add_i32($ir_add_i32($ir_add_i32($ir_add_i32($ir_add_i32(0, 4), 4), 8), 8), 8), $ir_mul_i32(8, cap)), $ir_mul_i32(1, cap)), 7), -8), 8), 4);
}

function $rt_arr_sizeof(o)
{    
    return $rt_arr_comp_size($rt_arr_get_cap(o));
}

function $rt_arr_alloc(cap)
{    
    var o = $ir_heap_alloc($rt_arr_comp_size(cap));
    $rt_arr_set_cap(o, cap);
    $rt_arr_set_header(o, 5);
    $rt_arr_set_next(o, null);
    for (var i = 0; i < cap; ++i)
    {    
        $rt_arr_set_word(o, i, $ir_get_word(undefined));
    }
    for (var i = 0; i < cap; ++i)
    {    
        $rt_arr_set_type(o, i, $ir_get_type(undefined));
    }
    return o;
}

function $rt_arr_visit_gc(o)
{    
    $rt_arr_set_class(o, $rt_gcForward(interp, $rt_arr_get_class(o)));
    $rt_arr_set_next(o, $rt_gcForward(interp, $rt_arr_get_next(o)));
    $rt_arr_set_proto(o, $rt_gcForward(interp, $rt_arr_get_proto(o)));
    var cap = $rt_arr_get_cap(o);
    for (var i = 0; i < cap; ++i)
    {    
        $rt_arr_set_word(o, i, $rt_gcForward(interp, $rt_arr_get_word(o, i), $rt_arr_get_type(o, i)));
    }
    $rt_arr_set_tbl(o, $rt_gcForward(interp, $rt_arr_get_tbl(o)));
}

var $rt_LAYOUT_ARRTBL = 6;

function $rt_arrtbl_ofs_header(o)
{    
    return 0;
}

function $rt_arrtbl_ofs_cap(o)
{    
    return $ir_add_i32(0, 4);
}

function $rt_arrtbl_ofs_word(o, i)
{    
    return $ir_add_i32($ir_add_i32($ir_add_i32(0, 4), 4), $ir_mul_i32(8, i));
}

function $rt_arrtbl_ofs_type(o, i)
{    
    return $ir_add_i32($ir_add_i32($ir_add_i32($ir_add_i32(0, 4), 4), $ir_mul_i32(8, $rt_arrtbl_get_cap(o))), $ir_mul_i32(1, i));
}

function $rt_arrtbl_get_header(o)
{    
    return $ir_load_u32(o, $rt_arrtbl_ofs_header(o));
}

function $rt_arrtbl_get_cap(o)
{    
    return $ir_load_u32(o, $rt_arrtbl_ofs_cap(o));
}

function $rt_arrtbl_get_word(o, i)
{    
    return $ir_load_u64(o, $rt_arrtbl_ofs_word(o, i));
}

function $rt_arrtbl_get_type(o, i)
{    
    return $ir_load_u8(o, $rt_arrtbl_ofs_type(o, i));
}

function $rt_arrtbl_set_header(o, v)
{    
    $ir_store_u32(o, $rt_arrtbl_ofs_header(o), v);
}

function $rt_arrtbl_set_cap(o, v)
{    
    $ir_store_u32(o, $rt_arrtbl_ofs_cap(o), v);
}

function $rt_arrtbl_set_word(o, i, v)
{    
    $ir_store_u64(o, $rt_arrtbl_ofs_word(o, i), v);
}

function $rt_arrtbl_set_type(o, i, v)
{    
    $ir_store_u8(o, $rt_arrtbl_ofs_type(o, i), v);
}

function $rt_arrtbl_comp_size(cap)
{    
    return $ir_add_i32($ir_add_i32($ir_add_i32($ir_add_i32(0, 4), 4), $ir_mul_i32(8, cap)), $ir_mul_i32(1, cap));
}

function $rt_arrtbl_sizeof(o)
{    
    return $rt_arrtbl_comp_size($rt_arrtbl_get_cap(o));
}

function $rt_arrtbl_alloc(cap)
{    
    var o = $ir_heap_alloc($rt_arrtbl_comp_size(cap));
    $rt_arrtbl_set_cap(o, cap);
    $rt_arrtbl_set_header(o, 6);
    for (var i = 0; i < cap; ++i)
    {    
        $rt_arrtbl_set_word(o, i, $ir_get_word(undefined));
    }
    for (var i = 0; i < cap; ++i)
    {    
        $rt_arrtbl_set_type(o, i, $ir_get_type(undefined));
    }
    return o;
}

function $rt_arrtbl_visit_gc(o)
{    
    var cap = $rt_arrtbl_get_cap(o);
    for (var i = 0; i < cap; ++i)
    {    
        $rt_arrtbl_set_word(o, i, $rt_gcForward(interp, $rt_arrtbl_get_word(o, i), $rt_arrtbl_get_type(o, i)));
    }
}

var $rt_LAYOUT_CLASS = 7;

function $rt_class_ofs_header(o)
{    
    return 0;
}

function $rt_class_ofs_id(o)
{    
    return $ir_add_i32(0, 4);
}

function $rt_class_ofs_cap(o)
{    
    return $ir_add_i32($ir_add_i32(0, 4), 4);
}

function $rt_class_ofs_num_props(o)
{    
    return $ir_add_i32($ir_add_i32($ir_add_i32(0, 4), 4), 4);
}

function $rt_class_ofs_next(o)
{    
    return $ir_add_i32($ir_add_i32($ir_add_i32($ir_add_i32(0, 4), 4), 4), 4);
}

function $rt_class_ofs_arr_type(o)
{    
    return $ir_add_i32($ir_add_i32($ir_add_i32($ir_add_i32($ir_add_i32(0, 4), 4), 4), 4), 8);
}

function $rt_class_ofs_prop_name(o, i)
{    
    return $ir_add_i32($ir_add_i32($ir_add_i32($ir_add_i32($ir_add_i32($ir_add_i32($ir_add_i32(0, 4), 4), 4), 4), 8), 8), $ir_mul_i32(8, i));
}

function $rt_class_ofs_prop_type(o, i)
{    
    return $ir_add_i32($ir_add_i32($ir_add_i32($ir_add_i32($ir_add_i32($ir_add_i32($ir_add_i32($ir_add_i32(0, 4), 4), 4), 4), 8), 8), $ir_mul_i32(8, $rt_class_get_cap(o))), $ir_mul_i32(8, i));
}

function $rt_class_ofs_prop_idx(o, i)
{    
    return $ir_add_i32($ir_add_i32($ir_add_i32($ir_add_i32($ir_add_i32($ir_add_i32($ir_add_i32($ir_add_i32($ir_add_i32(0, 4), 4), 4), 4), 8), 8), $ir_mul_i32(8, $rt_class_get_cap(o))), $ir_mul_i32(8, $rt_class_get_cap(o))), $ir_mul_i32(4, i));
}

function $rt_class_get_header(o)
{    
    return $ir_load_u32(o, $rt_class_ofs_header(o));
}

function $rt_class_get_id(o)
{    
    return $ir_load_u32(o, $rt_class_ofs_id(o));
}

function $rt_class_get_cap(o)
{    
    return $ir_load_u32(o, $rt_class_ofs_cap(o));
}

function $rt_class_get_num_props(o)
{    
    return $ir_load_u32(o, $rt_class_ofs_num_props(o));
}

function $rt_class_get_next(o)
{    
    return $ir_load_refptr(o, $rt_class_ofs_next(o));
}

function $rt_class_get_arr_type(o)
{    
    return $ir_load_rawptr(o, $rt_class_ofs_arr_type(o));
}

function $rt_class_get_prop_name(o, i)
{    
    return $ir_load_refptr(o, $rt_class_ofs_prop_name(o, i));
}

function $rt_class_get_prop_type(o, i)
{    
    return $ir_load_rawptr(o, $rt_class_ofs_prop_type(o, i));
}

function $rt_class_get_prop_idx(o, i)
{    
    return $ir_load_u32(o, $rt_class_ofs_prop_idx(o, i));
}

function $rt_class_set_header(o, v)
{    
    $ir_store_u32(o, $rt_class_ofs_header(o), v);
}

function $rt_class_set_id(o, v)
{    
    $ir_store_u32(o, $rt_class_ofs_id(o), v);
}

function $rt_class_set_cap(o, v)
{    
    $ir_store_u32(o, $rt_class_ofs_cap(o), v);
}

function $rt_class_set_num_props(o, v)
{    
    $ir_store_u32(o, $rt_class_ofs_num_props(o), v);
}

function $rt_class_set_next(o, v)
{    
    $ir_store_refptr(o, $rt_class_ofs_next(o), v);
}

function $rt_class_set_arr_type(o, v)
{    
    $ir_store_rawptr(o, $rt_class_ofs_arr_type(o), v);
}

function $rt_class_set_prop_name(o, i, v)
{    
    $ir_store_refptr(o, $rt_class_ofs_prop_name(o, i), v);
}

function $rt_class_set_prop_type(o, i, v)
{    
    $ir_store_rawptr(o, $rt_class_ofs_prop_type(o, i), v);
}

function $rt_class_set_prop_idx(o, i, v)
{    
    $ir_store_u32(o, $rt_class_ofs_prop_idx(o, i), v);
}

function $rt_class_comp_size(cap)
{    
    return $ir_add_i32($ir_add_i32($ir_add_i32($ir_add_i32($ir_add_i32($ir_add_i32($ir_add_i32($ir_add_i32($ir_add_i32(0, 4), 4), 4), 4), 8), 8), $ir_mul_i32(8, cap)), $ir_mul_i32(8, cap)), $ir_mul_i32(4, cap));
}

function $rt_class_sizeof(o)
{    
    return $rt_class_comp_size($rt_class_get_cap(o));
}

function $rt_class_alloc(cap)
{    
    var o = $ir_heap_alloc($rt_class_comp_size(cap));
    $rt_class_set_cap(o, cap);
    $rt_class_set_header(o, 7);
    $rt_class_set_num_props(o, 0);
    $rt_class_set_next(o, null);
    $rt_class_set_arr_type(o, null);
    for (var i = 0; i < cap; ++i)
    {    
        $rt_class_set_prop_name(o, i, null);
    }
    for (var i = 0; i < cap; ++i)
    {    
        $rt_class_set_prop_type(o, i, null);
    }
    return o;
}

function $rt_class_visit_gc(o)
{    
    $rt_class_set_next(o, $rt_gcForward(interp, $rt_class_get_next(o)));
    var cap = $rt_class_get_cap(o);
    for (var i = 0; i < cap; ++i)
    {    
        $rt_class_set_prop_name(o, i, $rt_gcForward(interp, $rt_class_get_prop_name(o, i)));
    }
}

function $rt_layout_sizeof(o)
{    
    var t = $rt_obj_get_header(o);
    if ($ir_eq_i32(t, LAYOUT_STR))
    {    
        return $rt_str_sizeof(o);
    }
    if ($ir_eq_i32(t, LAYOUT_STRTBL))
    {    
        return $rt_strtbl_sizeof(o);
    }
    if ($ir_eq_i32(t, LAYOUT_OBJ))
    {    
        return $rt_obj_sizeof(o);
    }
    if ($ir_eq_i32(t, LAYOUT_CLOS))
    {    
        return $rt_clos_sizeof(o);
    }
    if ($ir_eq_i32(t, LAYOUT_CELL))
    {    
        return $rt_cell_sizeof(o);
    }
    if ($ir_eq_i32(t, LAYOUT_ARR))
    {    
        return $rt_arr_sizeof(o);
    }
    if ($ir_eq_i32(t, LAYOUT_ARRTBL))
    {    
        return $rt_arrtbl_sizeof(o);
    }
    if ($ir_eq_i32(t, LAYOUT_CLASS))
    {    
        return $rt_class_sizeof(o);
    }
    $rt_assert(false, "invalid layout in layout_sizeof");
}

function $rt_layout_visit_gc(o)
{    
    var t = $rt_obj_get_header(o);
    if ($ir_eq_i32(t, LAYOUT_STR))
    {    
        $rt_str_visit_gc(interp, o);
        return;
    }
    if ($ir_eq_i32(t, LAYOUT_STRTBL))
    {    
        $rt_strtbl_visit_gc(interp, o);
        return;
    }
    if ($ir_eq_i32(t, LAYOUT_OBJ))
    {    
        $rt_obj_visit_gc(interp, o);
        return;
    }
    if ($ir_eq_i32(t, LAYOUT_CLOS))
    {    
        $rt_clos_visit_gc(interp, o);
        return;
    }
    if ($ir_eq_i32(t, LAYOUT_CELL))
    {    
        $rt_cell_visit_gc(interp, o);
        return;
    }
    if ($ir_eq_i32(t, LAYOUT_ARR))
    {    
        $rt_arr_visit_gc(interp, o);
        return;
    }
    if ($ir_eq_i32(t, LAYOUT_ARRTBL))
    {    
        $rt_arrtbl_visit_gc(interp, o);
        return;
    }
    if ($ir_eq_i32(t, LAYOUT_CLASS))
    {    
        $rt_class_visit_gc(interp, o);
        return;
    }
    $rt_assert(false, "invalid layout in layout_visit_gc");
}

